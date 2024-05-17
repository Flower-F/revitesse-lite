import { useCounter } from 'react-use';

interface CounterProps {
  initial: number;
}

const Counter = ({ initial }: CounterProps) => {
  const [count, { inc, dec }] = useCounter(initial);

  return (
    <div>
      {count}
      <button className='px-1' onClick={() => inc()}>
        +
      </button>
      <button className='px-1' onClick={() => dec()}>
        -
      </button>
    </div>
  );
};

export default Counter;
