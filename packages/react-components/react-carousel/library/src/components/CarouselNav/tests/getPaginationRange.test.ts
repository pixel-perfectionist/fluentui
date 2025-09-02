import { getPaginationRange, type PaginationItem } from '../getPaginationRange';

describe('getPaginationRange', () => {
  describe('edge cases', () => {
    it('should return empty array for total <= 0', () => {
      expect(getPaginationRange({ total: 0, current: 0 })).toEqual([]);
      expect(getPaginationRange({ total: -1, current: 0 })).toEqual([]);
    });

    it('should return all indexes for total <= 5', () => {
      expect(getPaginationRange({ total: 1, current: 0 })).toEqual([0]);
      expect(getPaginationRange({ total: 3, current: 1 })).toEqual([0, 1, 2]);
      expect(getPaginationRange({ total: 5, current: 2 })).toEqual([0, 1, 2, 3, 4]);
    });

    it('should clamp current index to valid range', () => {
      const result1 = getPaginationRange({ total: 10, current: -1 });
      const result2 = getPaginationRange({ total: 10, current: 15 });
      // Should treat as current: 0 and current: 9 respectively
      expect(result1).toContain(0);
      expect(result2).toContain(9);
    });
  });

  describe('default parameters (sidePadding: 1, activePadding: 1)', () => {
    it('should handle example 1: total 8, current 3', () => {
      const result = getPaginationRange({ total: 8, current: 3 });
      expect(result).toEqual([0, 'ellipsis', 2, 3, 4, 'ellipsis', 7]);
    });

    it('should handle example 2: total 32, current 10', () => {
      const result = getPaginationRange({ total: 32, current: 10 });
      expect(result).toEqual([0, 'ellipsis', 9, 10, 11, 'ellipsis', 31]);
    });

    it('should handle current at start', () => {
      const result = getPaginationRange({ total: 20, current: 0 });
      expect(result).toEqual([0, 1, 'ellipsis', 19]);
    });

    it('should handle current at end', () => {
      const result = getPaginationRange({ total: 20, current: 19 });
      expect(result).toEqual([0, 'ellipsis', 18, 19]);
    });
  });

  describe('custom sidePadding', () => {
    it('should handle example 3: sidePadding 3', () => {
      const result = getPaginationRange({ 
        total: 32, 
        current: 10, 
        sidePadding: 3, 
        activePadding: 1 
      });
      expect(result).toEqual([0, 1, 2, 'ellipsis', 9, 10, 11, 'ellipsis', 29, 30, 31]);
    });

    it('should show more items at edges with higher sidePadding', () => {
      const result = getPaginationRange({ 
        total: 20, 
        current: 10, 
        sidePadding: 2 
      });
      expect(result[0]).toBe(0);
      expect(result[1]).toBe(1);
      expect(result[result.length - 1]).toBe(19);
      expect(result[result.length - 2]).toBe(18);
    });
  });

  describe('custom activePadding', () => {
    it('should handle example 4: activePadding 3', () => {
      const result = getPaginationRange({ 
        total: 32, 
        current: 10, 
        sidePadding: 3, 
        activePadding: 3 
      });
      expect(result).toEqual([0, 1, 2, 'ellipsis', 7, 8, 9, 10, 11, 12, 13, 'ellipsis', 29, 30, 31]);
    });

    it('should show more neighbors around current with higher activePadding', () => {
      const result = getPaginationRange({ 
        total: 20, 
        current: 10, 
        activePadding: 2 
      });
      const activeSection = result.slice(
        result.indexOf(8),
        result.indexOf(12) + 1
      );
      expect(activeSection).toEqual([8, 9, 10, 11, 12]);
    });
  });

  describe('range merging', () => {
    it('should merge ranges when they overlap', () => {
      const result = getPaginationRange({ 
        total: 10, 
        current: 2, 
        sidePadding: 3, 
        activePadding: 2 
      });
      // Should merge start range [0,1,2] with active range [0,1,2,3,4]
      expect(result).not.toContain('ellipsis');
      expect(result).toEqual([0, 1, 2, 3, 4, 'ellipsis', 7, 8, 9]);
    });

    it('should merge ranges when gap is exactly 1', () => {
      const result = getPaginationRange({ 
        total: 12, 
        current: 3, 
        sidePadding: 1, 
        activePadding: 1 
      });
      // start: [0], active: [2,3,4], end: [11]
      // Gap between 0 and 2 is 1, so should merge to [0,1,2,3,4]
      expect(result).toEqual([0, 1, 2, 3, 4, 'ellipsis', 11]);
    });
  });

  describe('no ellipsis scenarios', () => {
    it('should not add ellipsis when ranges touch', () => {
      const result = getPaginationRange({ 
        total: 8, 
        current: 1, 
        sidePadding: 2, 
        activePadding: 1 
      });
      // Should have continuous sequence without ellipsis
      expect(result).not.toContain('ellipsis');
    });

    it('should handle cases where all ranges merge into one', () => {
      const result = getPaginationRange({ 
        total: 10, 
        current: 5, 
        sidePadding: 3, 
        activePadding: 3 
      });
      // Should be continuous from 0 to 9
      expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });
});