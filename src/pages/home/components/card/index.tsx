import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/counter'
import { CardContainer } from './styles'

export function Card() {
  return (
    <CardContainer>
      <img
        src="src/assets/images/copos_de_cafe/expresso-tradicional.svg"
        alt=""
      />
      <div className="features">
        <span>tradicional</span>
      </div>

      <h2>Expresso</h2>

      <p>O tradicional café feito com água quente e grãos moídos</p>

      <div className="input-qtd">
        <div className="price">
          R$ <span>9,90</span>
        </div>
        {/* <div className="qtd">
          <span className="minus">-</span>
          <span className="num">0</span>
          <span className="plus">+</span>
        </div> */}
        <Counter />

        <button type="submit">
          <ShoppingCart weight="fill" />
        </button>
      </div>
    </CardContainer>
  )
}
