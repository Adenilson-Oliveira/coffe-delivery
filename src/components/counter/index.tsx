import { CounterContainer } from './styles'

export function Counter() {
  return (
    <CounterContainer className="qtd">
      <span className="minus">-</span>
      <span className="num">0</span>
      <span className="plus">+</span>
    </CounterContainer>
  )
}
