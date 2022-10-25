import { SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { RequestContext } from '../../contexts/RequestsContext'
import { useContext } from 'react'

export function Success() {
  const { request } = useContext(RequestContext)

  return (
    <>
      {request.user ? (
        <SuccessContainer>
          <h1>Uhu! Pedido confirmado</h1>
          <p>Agora é só aguadar que logo o café chegará até você</p>
          <div>
            <div className="details">
              <ul>
                <li>
                  <span className="icon map">
                    <MapPin weight="fill" size={16} />
                  </span>
                  <p>
                    Entrega em{' '}
                    <span className="bold">
                      {request.user.rua}, {request.user.numero}
                    </span>
                    <br />
                    {request.user.bairro} - {request.user.cidade},{' '}
                    {request.user.uf}
                  </p>
                </li>

                <li>
                  <span className="timer icon">
                    <Timer weight="fill" size={16} />
                  </span>
                  <p>Previsão de entrega</p>
                  <p>
                    <span className="bold">20 min - 30 min</span>
                  </p>
                </li>

                <li>
                  <span className="icon dollar">
                    <CurrencyDollar size={16} />
                  </span>
                  <p>Pagamento na entrega </p>
                  <p>
                    <span className="bold">{request.user.meioDePagamento}</span>
                  </p>
                </li>
              </ul>
            </div>
            <img src="src/assets/images/motoboy.svg" alt="" />
          </div>
        </SuccessContainer>
      ) : (
        <p>verifique seu pedido</p>
      )}
    </>
  )
}
