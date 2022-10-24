import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import * as zod from 'zod'
import { useForm, useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { ProductCheckout } from './components/ProductCheckout'
import { coffe, CoffeContext } from '../../contexts/CoffeContext'

import { CheckoutContainer, Details, ResultContainer } from './styles'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'

const userAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O cep deve possuir um mínimo de 8 digitos')
    .max(10, 'O cep não pode ultrapassar 10 digitos'),
  rua: zod.string().min(1),
  numero: zod.number().min(1),
  complemento: zod.string().min(1).optional(),
  bairro: zod.string().min(1),
  cidade: zod.number().min(1),
  uf: zod.string().min(1),
})

export function Checkout() {
  const { coffe } = useContext(CoffeContext)
  const [cart, setCart] = useState(coffe.filter((cafe: coffe) => cafe.qtd > 0))

  const getUserAddress = useForm({
    resolver: zodResolver(userAddressFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: 0,
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    },
  })

  // , watch, reset
  const { handleSubmit } = getUserAddress

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

  function handleGetUserAddress(data: any) {
    console.log(data)
  }

  const { register } = useFormContext()

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleGetUserAddress)}>
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
              <input
                type="text"
                className="cep input"
                placeholder="CEP"
                {...register('cep')}
              />
              <input
                type="text"
                className="rua input"
                placeholder="Rua"
                {...register('rua')}
              />

              <input
                type="number"
                className="num input"
                placeholder="Número"
                {...register('numero')}
              />
              <input
                type="text"
                className="comp input"
                placeholder="Complemento  (opcional)"
                {...register('complemento')}
              />

              <input
                type="text"
                className="bairro input"
                placeholder="Bairro"
                {...register('bairro')}
              />

              <input
                type="text"
                className="cidade input"
                placeholder="Cidade"
                {...register('cidade')}
              />
              <input
                type="text"
                className="uf input"
                placeholder="UF"
                {...register('uf')}
              />
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
