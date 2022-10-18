import { ShoppingCart } from 'phosphor-react'
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

      <form>
        <label htmlFor="">
          R$ <span>9,90</span>
        </label>
        <input type="number" placeholder="Qtd" />
        <button type="submit">
          <ShoppingCart weight="fill" />
        </button>
      </form>
    </CardContainer>
  )
}
