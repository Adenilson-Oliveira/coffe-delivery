import { SuccessContainer } from './styles'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export function Success() {
  return (
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
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </li>

            <li>
              <span className="timer icon">
                <Timer weight="fill" size={16} />
              </span>
              <p>Previsão de entrega</p>
              <p>Farrapos - Porto Alegre, RS</p>
            </li>

            <li>
              <span className="icon dollar">
                <CurrencyDollar size={16} />
              </span>
              <p>
                Entrega em <span>Rua João Daniel Martinelli, 102</span>
              </p>
              <p>Farrapos - Porto Alegre, RS</p>
            </li>
          </ul>
        </div>
        <img src="src/assets/images/motoboy.svg" alt="" />
      </div>
    </SuccessContainer>
  )
}
