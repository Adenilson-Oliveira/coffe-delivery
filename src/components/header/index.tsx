import { MapPin, ShoppingCart } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <img
          src="src/assets/logo-coffe-delivery.svg"
          alt="logo coffe delivery"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </li>

          <Link to="/checkout">
            <li>
              <ShoppingCart weight="fill" />
            </li>
          </Link>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
