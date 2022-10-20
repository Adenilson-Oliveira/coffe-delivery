import { Card } from './components/card'
import { HomeContainer } from './styles'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { useState } from 'react'

type cafe = {
  id: number
  srcImg: string
  name: string
  description: string
  price: number
  qtd: number
}

const imgDir = 'src/assets/images/copos_de_cafe'

export function Home() {
  const [cafes] = useState<Array<cafe>>([
    {
      id: 1,
      srcImg: `${imgDir}/expresso-tradicional.svg`,
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      price: 9,
      qtd: 0,
    },
    {
      id: 2,
      srcImg: `${imgDir}/expresso-americano.svg`,
      name: 'Expresso Americano',
      description: 'Expresso diluído, menos intenso que o tradicional',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 3,
      srcImg: `${imgDir}/expresso-cremoso.svg`,
      name: 'Expresso Cremoso',
      description: 'Café expresso tradicional com espuma cremosa',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 4,
      srcImg: `${imgDir}/expresso-gelado.svg`,
      name: 'Expresso Gelado',
      description: 'Bebida preparada com café expresso e cubos de gelo',
      price: 9.9,
      qtd: 0,
    },

    {
      id: 5,
      srcImg: `${imgDir}/cafe-com-leite.svg`,
      name: 'Café com Leite',
      description: 'Meio a meio de expresso tradicional com leite vaporizado',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 6,
      srcImg: `${imgDir}/latte.svg`,
      name: 'Latte',
      description:
        'Uma dose de café expresso com o dobro de leite e espuma cremosa',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 7,
      srcImg: `${imgDir}/capuccino.svg`,
      name: 'Capuccino',
      description:
        'Bebida com canela feita de doses iguais de café, leite e espuma',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 8,
      srcImg: `${imgDir}/macchiato.svg`,
      name: 'Macchiato',
      description:
        'Café expresso misturado com um pouco de leite quente e espuma',
      price: 9.9,
      qtd: 0,
    },

    {
      id: 9,
      srcImg: `${imgDir}/mocaccino.svg`,
      name: 'Mocaccino',
      description: 'Café expresso com calda de chocolate, pouco leite e espuma',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 10,
      srcImg: `${imgDir}/chocolate-quente.svg`,
      name: 'Chocolate Quente',
      description:
        'Bebida feita com chocolate dissolvido no leite quente e café',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 11,
      srcImg: `${imgDir}/cubano.svg`,
      name: 'Cubano',
      description:
        'Drink gelado de café expresso com rum, creme de leite e hortelã',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 12,
      srcImg: `${imgDir}/havaiano.svg`,
      name: 'Havaiano',
      description: 'Bebida adocicada preparada com café e leite de coco',
      price: 9.9,
      qtd: 0,
    },

    {
      id: 13,
      srcImg: `${imgDir}/arabe.svg`,
      name: 'Árabe',
      description: 'Bebida preparada com grãos de café árabe e especiarias',
      price: 9.9,
      qtd: 0,
    },
    {
      id: 14,
      srcImg: `${imgDir}/irlandes.svg`,
      name: 'Irlandês',
      description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
      price: 9.9,
      qtd: 0,
    },
  ])

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
        {cafes.map((cafe) => (
          <Card
            key={cafe.id}
            imgUrl={cafe.srcImg}
            name={cafe.name}
            description={cafe.description}
            price={cafe.price}
            qtd={cafe.qtd}
          />
        ))}
      </div>
    </HomeContainer>
  )
}
// src\pages\home\teste.svg
