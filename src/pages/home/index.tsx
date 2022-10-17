import { Card } from './components/card'
import { HomeContainer } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(array)
  return (
    <HomeContainer>
      <section>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Dellivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>
              <span className="shopping-cart icon">
                <ShoppingCart weight="fill" />
              </span>
              Compra simples e segura
            </li>
            <li>
              <span className="timer icon">
                <Timer weight="fill" />
              </span>
              Entrega rápida e rastreada
            </li>
            <li>
              <span className="packeage icon">
                <Package weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </li>
            <li>
              <span className="coffee icon">
                <Coffee weight="fill" />
              </span>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <img
          src="src/assets/images/copo-de-cafe-expresso.svg"
          alt="Copo de café expresso"
        />
      </section>
      <h1>Nossos cafés</h1>
      <div className="products">
        {array.map((_, i) => (
          <Card key={i} />
        ))}
      </div>
    </HomeContainer>
  )
}
// src\pages\home\teste.svg
