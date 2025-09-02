/**
 * Represents an item in the pagination range
 */
export type PaginationItem = number | 'ellipsis';

/**
 * Parameters for calculating pagination range
 */
export interface GetPaginationRangeParams {
  /** Total number of slides */
  total: number;
  /** Current active index (0-based) */
  current: number;
  /** Number of items to always show at start and end */
  sidePadding?: number;
  /** Number of neighbors to show around active index */
  activePadding?: number;
}

/**
 * Pure function that calculates which pagination items to display with smart truncation.
 * 
 * Rules:
 * - Always show indexes [0..sidePadding-1] and [total-sidePadding..total-1]
 * - Always show [current-activePadding..current+activePadding]
 * - Insert "ellipsis" between disjoint ranges when gap is at least 2
 * - Merge ranges when gap is 1 or they overlap
 * - Handle edge cases for small totals and boundary conditions
 * 
 * @param params - Parameters for pagination calculation
 * @returns Array of pagination items (numbers or "ellipsis")
 */
export function getPaginationRange({
  total,
  current,
  sidePadding = 1,
  activePadding = 1,
}: GetPaginationRangeParams): PaginationItem[] {
  // Handle edge cases
  if (total <= 0) return [];
  if (total <= 5) return Array.from({ length: total }, (_, i) => i);
  
  // Clamp current to valid range
  const clampedCurrent = Math.max(0, Math.min(current, total - 1));
  
  // Calculate ranges
  const startRange = {
    start: 0,
    end: Math.min(sidePadding - 1, total - 1),
  };
  
  const endRange = {
    start: Math.max(total - sidePadding, 0),
    end: total - 1,
  };
  
  const activeRange = {
    start: Math.max(0, clampedCurrent - activePadding),
    end: Math.min(total - 1, clampedCurrent + activePadding),
  };
  
  // Collect all ranges that might be displayed
  const ranges: Array<{ start: number; end: number }> = [];
  
  // Add start range if valid
  if (startRange.start <= startRange.end) {
    ranges.push(startRange);
  }
  
  // Add active range if it doesn't overlap with start range
  if (activeRange.start > startRange.end + 1) {
    ranges.push(activeRange);
  } else if (activeRange.end > startRange.end) {
    // Merge with start range
    ranges[ranges.length - 1].end = Math.max(ranges[ranges.length - 1].end, activeRange.end);
  }
  
  // Add end range if it doesn't overlap with existing ranges
  const lastRange = ranges[ranges.length - 1];
  if (endRange.start > lastRange.end + 1) {
    ranges.push(endRange);
  } else if (endRange.start <= lastRange.end + 1) {
    // Merge with last range
    ranges[ranges.length - 1].end = Math.max(ranges[ranges.length - 1].end, endRange.end);
  }
  
  // Convert ranges to pagination items
  const result: PaginationItem[] = [];
  
  ranges.forEach((range, index) => {
    // Add items from current range
    for (let i = range.start; i <= range.end; i++) {
      result.push(i);
    }
    
    // Add ellipsis if there's a gap to the next range
    if (index < ranges.length - 1) {
      const nextRange = ranges[index + 1];
      const gap = nextRange.start - range.end;
      if (gap > 1) {
        result.push('ellipsis');
      }
    }
  });
  
  return result;
}