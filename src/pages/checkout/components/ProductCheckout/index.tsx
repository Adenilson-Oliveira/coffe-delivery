import { Trash } from 'phosphor-react'
import { Counter } from '../../../../components/counter'
import { ProductCheckoutContainer } from './styles'

export function ProductCheckout() {
  return (
    <ProductCheckoutContainer>
      <img
        src="src/assets/images/copos_de_cafe/expresso-tradicional.svg"
        alt=""
      />
      <div className="content">
        <h2>Expresso Tradicional</h2>
        <div className="actions">
          <Counter />
          <button>
            <span className="trash icon">
              <Trash size={16} />
            </span>
            REMOVER
          </button>
        </div>
      </div>

      <span className="price">R$ 9,90</span>
    </ProductCheckoutContainer>
  )
}
