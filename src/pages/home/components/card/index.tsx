import { ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Counter } from '../../../../components/counter'
import { coffe, CoffeContext } from '../../../../contexts/CoffeContext'
import { CardContainer } from './styles'

interface CardProps {
  imgUrl: string
  name: string
  description: string
  price: number
  qtd: number
  id: number
}

export function Card({ imgUrl, name, description, price, qtd, id }: CardProps) {
  const { setCoffe } = useContext(CoffeContext)

  // useEffect(() => {
  //   console.log('=> ', coffe[0])
  // }, [coffe])

  const priceStr = price.toString()
  let priceFinal = ''
  if (priceStr.length - (priceStr.indexOf('.') + 1) === 1) {
    priceFinal = priceStr.replace('.', ',') + '0'
  }
  if (priceStr.length === 1) {
    priceFinal = `${priceStr},00`
  }

  // erro ao acrescentar mais de dois cafes do mesmo
  function handleClickPlus() {
    setCoffe((state: coffe[]) => {
      return state.map((cafe: coffe) => {
        if (cafe.id === id) {
          return { ...cafe, qtd: cafe.qtd + 1 }
        } else {
          return cafe
        }
      })
    })
    // console.log(coffe[0])
  }

  function handleClickMinus() {
    setCoffe((state: coffe[]) => {
      return state.map((cafe: coffe) => {
        if (cafe.id === id) {
          return { ...cafe, qtd: cafe.qtd - 1 }
        } else {
          return cafe
        }
      })
    })
    // console.log(coffe[0])
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
        <Counter
          onClickPlus={handleClickPlus}
          onClickMinus={handleClickMinus}
          qtd={qtd}
        />

        <Link to="/checkout">
          <button>
            <ShoppingCart weight="fill" />
          </button>
        </Link>
      </div>
    </CardContainer>
  )
}
