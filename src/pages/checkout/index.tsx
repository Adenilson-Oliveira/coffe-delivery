import { CheckoutContainer, Details, ResultContainer } from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { ProductCheckout } from './components/ProductCheckout'

export function Checkout() {
  document.title = 'Coffe Delivery - Checkout'
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
            <ProductCheckout />

            <ProductCheckout />

            <Details>
              <ul>
                <li>
                  <p>Total de itens</p>
                  <span>R$ 19,80</span>
                </li>
                <li>
                  <p>Entrega</p>
                  <span>R$ 3,50</span>
                </li>
                <li className="total">
                  <p>Total</p>
                  <span>R$ 23,30</span>
                </li>
              </ul>
            </Details>

            <button>CONFIRMAR PEDIDO</button>
          </div>
        </ResultContainer>
      </form>
    </CheckoutContainer>
  )
}
