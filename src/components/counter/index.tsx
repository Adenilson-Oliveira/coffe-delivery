import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer className="counter">
      <span className="minus">-</span>
      <span className="num">0</span>
      <span className="plus">+</span>
    </CounterContainer>
  )
}
