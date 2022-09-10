import type { FC } from 'react'

interface ICounterProps {
  initial: number
}

const Counter: FC<ICounterProps> = ({ initial }) => {
  const [count, { inc, dec }] = useCounter(initial)

  return (
    <div>
      {count}
      <button px-1 onClick={() => inc()}>
        +
      </button>
      <button px-1 onClick={() => dec()}>
        -
      </button>
    </div>
  )
}

export default Counter
