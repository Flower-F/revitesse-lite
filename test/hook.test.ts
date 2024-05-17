import { act, renderHook } from '@testing-library/react';
import { useCounter } from 'ahooks';
import { describe, expect, it } from 'vitest';

describe('useCounter', () => {
  it('increment & decrement', () => {
    const { result } = renderHook(() => useCounter());
    expect(result.current[0]).toMatchInlineSnapshot('0');
    act(() => result.current[1].inc(1));
    expect(result.current[0]).toMatchInlineSnapshot('1');
    act(() => result.current[1].dec(1));
    expect(result.current[0]).toMatchInlineSnapshot('0');
  });
});
