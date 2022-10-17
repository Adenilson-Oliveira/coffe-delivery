import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="src/assets/logo-coffe-delivery.svg" alt="logo coffe delivery" />
      <nav>
        <ul>
          <li>
            <MapPin size={22} weight="fill" /> Porto Alegre, RS
          </li>
          <li>
            <ShoppingCart weight="fill" />
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  )
}
