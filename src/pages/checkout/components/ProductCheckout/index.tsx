import { Trash } from 'phosphor-react'
import React, { useContext, useState } from 'react'
import { Counter } from '../../../../components/counter'
import { coffe, CoffeContext } from '../../../../contexts/CoffeContext'
import { ProductCheckoutContainer } from './styles'

interface ProductCheckoutProps {
  // name: string
  // qtd: number
  // src: string
  // price: number
  // id: number
  props: any
  setCart: (a: any) => void
}

export function ProductCheckout({
  // name,
  // qtd,
  // src,
  // price,
  // id,
  props,
  setCart,
}: ProductCheckoutProps) {
  const { setCoffe } = useContext(CoffeContext)

  const [qtde, setQtde] = useState(props.qtd)

  const priceStr = props.price.toFixed(2).replace('.', ',')

  function handleClickPlus() {
    setCoffe((state: coffe[]) => {
      return state.map((cafe: coffe) => {
        if (cafe.id === props.id) {
          return { ...cafe, qtd: cafe.qtd + 1 }
        } else {
          return cafe
        }
      })
    })
    setQtde((state: any) => state + 1)
  }

  function handleClickMinus() {
    if (qtde > 1) {
      setCoffe((state: coffe[]) => {
        return state.map((cafe: coffe) => {
          if (cafe.id === props.id) {
            return { ...cafe, qtd: cafe.qtd - 1 }
          } else {
            return cafe
          }
        })
      })
      setQtde((state: any) => state - 1)
    }
  }

  function handleRemove(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()

    setCoffe((state: coffe[]) => {
      return state.map((cafe: coffe) => {
        if (cafe.id === props.id) {
          return { ...cafe, qtd: 0 }
        } else {
          return cafe
        }
      })
    })

    setCart((state: coffe[]) =>
      state.filter((cafe: coffe) => cafe.id !== props.id),
    )
  }

  return (
    <ProductCheckoutContainer>
      <img src={props.srcImg} alt="" />
      <div className="content">
        <h2>{props.name}</h2>
        <div className="actions">
          <Counter
            onClickMinus={handleClickMinus}
            onClickPlus={handleClickPlus}
            qtd={qtde}
          />
          <button onClick={handleRemove}>
            <span className="trash icon">
              <Trash size={16} />
            </span>
            REMOVER
          </button>
        </div>
      </div>

      <span className="price">R$ {priceStr}</span>
    </ProductCheckoutContainer>
  )
}
