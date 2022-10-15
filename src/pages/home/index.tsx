import { Card } from './components/card'
import { CardsContainer } from './styles'

export function Home() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(array)
  return (
    <>
      <header>
        <h1>Logo</h1>
        <h2>nav bar</h2>
      </header>

      <main>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Dellivery voçê recebe seu café onde estiver, a qualquer
            hora
          </p>
          <ul>
            <li>Compra simples e segura</li>
            <li>Entrega rápida e rastreada</li>
            <li>Embalagem mantém o café intacto</li>
            <li>O café chega fresquinho até você</li>
          </ul>
        </div>
        <img
          src="src/assets/images/copo-de-cafe-expresso.svg"
          alt="Copo de café expresso"
        />
      </main>
      <CardsContainer>
        {array.map((_, i) => (
          <Card key={i} />
        ))}
      </CardsContainer>
    </>
  )
}
// src\pages\home\teste.svg
