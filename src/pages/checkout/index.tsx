import { CheckoutContainer, Details, ResultContainer } from './/styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ProductCheckout } from './components/ProductCheckout'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { coffe, CoffeContext } from '../../contexts/CoffeContext'

// para evitar uma api sem nescessida, irei simular um valor para a entrega

export function Checkout() {
  const { coffe } = useContext(CoffeContext)
  const [cart, setCart] = useState(coffe.filter((cafe: coffe) => cafe.qtd > 0))

  const totalDosItens = cart.reduce(
    (prev, curr) => prev + curr.price * curr.qtd,
    0,
  )
  const totalDosItensStr = totalDosItens.toFixed(2).replace('.', ',')

  const entrega = cart.length >= 1 ? 3.5 : 0
  const entregaStr = entrega.toFixed(2).replace('.', ',')

  const totalStr = (totalDosItens + entrega).toFixed(2).replace('.', ',')
  // console.log(totalDosItensStr)
  // console.log(cart.length)

  return (
    <CheckoutContainer>
      <form>
        <div>
          <h1>Complete seu pedido</h1>
          <div className="input-address">
            <header>
              <span className="MapPinLine">
                <MapPinLine />
              </span>
              <div>
                <h2>Endereço de Entrega</h2>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </header>

            <div className="inputs">
              <input type="text" className="cep input" placeholder="CEP" />
              <input type="text" className="rua input" placeholder="Rua" />

              <input type="number" className="num input" placeholder="Número" />
              <input
                type="text"
                className="comp input"
                placeholder="Complemento  (opcional)"
              />

              <input
                type="text"
                className="bairro input"
                placeholder="Bairro"
              />
              <input
                type="text"
                className="cidade input"
                placeholder="Cidade"
              />
              <input type="text" className="uf input" placeholder="UF" />
            </div>
          </div>
          <div className="payment">
            <header>
              <span className="icon-payment">
                <CurrencyDollar />
              </span>
              <div>
                <h2>Pagamento</h2>
                <p>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </p>
              </div>
            </header>

            <div className="payment-method">
              <div>
                <span className="icon-payment">
                  <CreditCard />
                </span>
                CARTÃO DE CRÉDITO
              </div>
              <div>
                <span className="icon-payment">
                  <Bank />
                </span>
                CARTÃO DE DÉBITO
              </div>
              <div>
                <span className="icon-payment">
                  <Money />
                </span>
                DINHEIRO
              </div>
            </div>
          </div>
        </div>

        <ResultContainer>
          <h1>Cafés selcionados</h1>
          <div className="confirm-order">
            {cart.map((cafe: coffe) => {
              return (
                <ProductCheckout
                  key={cafe.id}
                  // name={cafe.name}
                  // qtd={cafe.qtd}
                  // src={cafe.srcImg}
                  // price={cafe.price}
                  // id={cafe.id}
                  props={cafe}
                  setCart={setCart}
                />
              )
            })}

            <Details>
              <ul>
                <li>
                  <p>Total dos itens</p>
                  <span>R$ {totalDosItensStr}</span>
                </li>
                <li>
                  <p>Entrega</p>
                  <span>R$ {entregaStr}</span>
                </li>
                <li className="total">
                  <p>Total</p>
                  <span>R$ {totalStr}</span>
                </li>
              </ul>
            </Details>

            <Link to="/success">
              <button>CONFIRMAR PEDIDO</button>
            </Link>
          </div>
        </ResultContainer>
      </form>
    </CheckoutContainer>
  )
}
