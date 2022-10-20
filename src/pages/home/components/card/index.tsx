import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../../../../components/counter'
import { CardContainer } from './styles'

interface CardProps {
  imgUrl: string
  name: string
  description: string
  price: number
  qtd: number
}

export function Card({ imgUrl, name, description, price, qtd }: CardProps) {
  const priceStr = price.toString()
  let priceFinal = ''
  if (priceStr.length - (priceStr.indexOf('.') + 1) === 1) {
    priceFinal = priceStr.replace('.', ',') + '0'
  }
  if (priceStr.length === 1) {
    priceFinal = `${priceStr},00`
  }

  return (
    <CardContainer>
      <img src={imgUrl} alt="" />
      <div className="features">
        <span>tradicional</span>
      </div>

      <h2>{name}</h2>

      <p>{description}</p>

      <div className="input-qtd">
        <div className="price">
          R$ <span>{priceFinal}</span>
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
