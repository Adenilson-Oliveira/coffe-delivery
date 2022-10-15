import { ShoppingCart } from 'phosphor-react'
import { CardComponent } from './styles'

export function Card() {
  return (
    <CardComponent>
      <img
        src="src/assets/images/copos_de_cafe/expresso-tradicional.svg"
        alt=""
      />
      <h2>Expresso Tradicional</h2>
      <p>O tradicional café feito com água quente e grãos moídos</p>
      <p>
        R$ <span>9,90</span>
      </p>
      <ShoppingCart />
    </CardComponent>
  )
}
