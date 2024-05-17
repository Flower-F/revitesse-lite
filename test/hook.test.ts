import { renderHook } from '@testing-library/react';
import { useCounter } from 'react-use';
import { describe, expect, it } from 'vitest';

describe('useCounter', () => {
  it('increment & decrement', () => {
    const { result, rerender } = renderHook(() => useCounter());
    expect(result.current[0]).toMatchInlineSnapshot('0');
    result.current[1].inc(1);
    rerender();
    expect(result.current[0]).toMatchInlineSnapshot('1');
    result.current[1].dec(1);
    rerender();
    expect(result.current[0]).toMatchInlineSnapshot('0');
  });
});
