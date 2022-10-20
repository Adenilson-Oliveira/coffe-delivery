import { CounterContainer } from './styles'

interface CounterProps {
  qtd: number

  onClickPlus: () => void
  onClickMinus: () => void
}

export function Counter({ qtd, onClickPlus, onClickMinus }: CounterProps) {
  return (
    <CounterContainer className="counter">
      <span className="minus" onClick={onClickMinus}>
        -
      </span>
      <span className="num">{qtd}</span>
      <span className="plus" onClick={onClickPlus}>
        +
      </span>
    </CounterContainer>
  )
}
