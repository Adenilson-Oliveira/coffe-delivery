import { useContext, useState } from 'react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
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
import { RequestContext } from '../../contexts/RequestsContext'
import { useNavigate } from 'react-router-dom'

const newUserAddressFormValidationSchema = zod.object({
  cep: zod
    .string()
    .min(8, 'O cep deve possuir um mínimo de 8 digitos')
    .max(10, 'O cep não pode ultrapassar 10 digitos'),
  rua: zod.string().min(1),
  numero: zod.number().min(1),
  complemento: zod.string().optional(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(2, 'O UF deve possuir no mínimo 2 letras'),
  'mean-of-payment': zod.string(),
})

export function Checkout() {
  const { coffe } = useContext(CoffeContext)
  const [cart, setCart] = useState(coffe.filter((cafe: coffe) => cafe.qtd > 0))
  const { request, setRequest } = useContext(RequestContext)
  const navigate = useNavigate()

  console.log(request)

  // const getUserAddress = useForm({
  //   resolver: zodResolver(userAddressFormValidationSchema),
  //   defaultValues: {
  //     cep: '',
  //     rua: '',
  //     numero: 0,
  //     complemento: '',
  //     bairro: '',
  //     cidade: '',
  //     uf: '',
  //   },
  // })

  const {
    register,
    handleSubmit,
    /* watch, */
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newUserAddressFormValidationSchema),
  })

  // // , watch, reset
  // const { handleSubmit } = getUserAddress

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

  const [erroCart, setErroCart] = useState('')

  function handleGetUserAddress(data: any) {
    console.log(data)

    function nomearMeioDePagamento() {
      switch (data['mean-of-payment']) {
        case 'credit-card':
          return 'Cartão de crédito'
        case 'debit-card':
          return 'Catão de débito'
        case 'money':
          return 'Dinheiro'
        default:
          return 'Verifique o meio de pagamento.'
      }
    }

    const meioDePagamento = nomearMeioDePagamento()

    // tratar os dados para o context
    if (cart.length > 0) {
      setRequest({
        user: {
          ...data,
          cafesComprados: cart,
          meioDePagamento,
        },
      })
    } else {
      setErroCart('selecione os itens para realizar o pedido')
    }
    navigate('/success')
    // useNavigate('/success')

    // redirect for page success
  }

  console.log(errors)

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
              {errors && errors.cep && <p>{`${errors.cep.message}`}</p>}
              {errors && errors.uf && <p>{`${errors.uf.message}`}</p>}

              <input
                required
                type="text"
                className="cep input"
                placeholder="CEP"
                {...register('cep')}
              />
              <input
                required
                type="text"
                className="rua input"
                placeholder="Rua"
                {...register('rua')}
              />

              <input
                required
                type="number"
                className="num input"
                placeholder="Número"
                {...register('numero', { valueAsNumber: true })}
              />
              <input
                type="text"
                className="comp input"
                placeholder="Complemento  (opcional)"
                {...register('complemento')}
              />

              <input
                required
                type="text"
                className="bairro input"
                placeholder="Bairro"
                {...register('bairro')}
              />

              <input
                required
                type="text"
                className="cidade input"
                placeholder="Cidade"
                {...register('cidade')}
              />

              <input
                required
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

            {errors['mean-of-payment'] && (
              <p>{`${errors['mean-of-payment'].message}`}</p>
            )}
            <div className="payment-method">
              <div>
                <input
                  type="radio"
                  id="credit-card"
                  value="credit-card"
                  {...register('mean-of-payment')}
                />
                <label htmlFor="credit-card">
                  <span className="icon-payment">
                    <CreditCard />
                  </span>
                  CARTÃO DE CRÉDITO
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="debit-card"
                  value="debit-card"
                  {...register('mean-of-payment')}
                />
                <label htmlFor="debit-card">
                  {/* <div> */}
                  <span className="icon-payment">
                    <Bank />
                  </span>
                  CARTÃO DE DÉBITO
                  {/* </div> */}
                </label>
              </div>

              <div>
                <input
                  type="radio"
                  id="money"
                  value="money"
                  {...register('mean-of-payment')}
                />
                <label htmlFor="money">
                  <span className="icon-payment">
                    <Money />
                  </span>
                  DINHEIRO
                </label>
              </div>
            </div>
          </div>
        </div>

        <ResultContainer>
          <h1>Cafés selcionados</h1>

          <div className="confirm-order">
            {erroCart && <p>{`${erroCart}`}</p>}
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

            {/* <Link to="/success"> */}
            <button type="submit">CONFIRMAR PEDIDO</button>
            {/* </Link> */}
          </div>
        </ResultContainer>
      </form>
    </CheckoutContainer>
  )
}
