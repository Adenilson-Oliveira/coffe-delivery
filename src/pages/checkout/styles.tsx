import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin: 0 10rem;
  h1 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-family: 'baloo 2', sans-serif;
  }

  header {
    display: flex;
    align-items: flex-start;
  }

  h2 {
    margin-left: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
  }

  p {
    margin-left: 0.5rem;
    color: ${(props) => props.theme['base-text']};
  }
  .MapPinLine {
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 22px;
  }

  form {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 2rem;
  }

  .input-address {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-radius: 6px;
  }

  .inputs {
    margin: 2rem 0;
  }

  .input {
    margin-bottom: 1rem;
    height: 42px;
    background-color: ${(props) => props.theme['base-input']};
    border: none;
    border: 1px solid ${(props) => props.theme['base-button']};
    padding: 1rem;
    color: ${(props) => props.theme['base-label']};
    outline: none;
    border-radius: 4px;
    transition: 0.1ms;

    &:focus {
      border: 2px solid ${(props) => props.theme['yellow-dark']};
      border-radius: 4px;
    }
  }

  .cep {
    width: calc(33.33% - (1rem / 2));
    margin-right: 66.67%;
  }

  .rua {
    width: 100%;
  }

  .num {
    width: calc(33.33% - (1rem / 2));
    margin-right: 1rem;
  }

  .comp {
    width: calc(66.67% - (1rem / 2));
  }

  .bairro {
    width: calc(33.33% - (1rem / 2));
    margin-right: 1rem;
  }

  .cidade {
    width: calc(56.67% - 1rem);
    margin-right: 1rem;
  }

  .uf {
    width: calc(10% - (1rem / 2));
  }

  .payment {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    margin-top: 12px;
    border-radius: 6px;

    .icon-payment {
      color: ${(props) => props.theme.purple};
    }
  }

  .payment-method {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;

    div {
      /* border: 1px solid ${(props) => props.theme['purple-dark']}; */
      padding: 1rem;
      border-radius: 6px;
      display: flex;
      align-items: center;
      cursor: pointer;
      background-color: ${(props) => props.theme['base-button']};

      &:hover {
        background-color: ${(props) => props.theme['base-hover']};
      }
    }

    .icon-payment {
      display: flex;
      align-items: center;
      margin-right: 1rem;
    }
  }
`

export const ResultContainer = styled.div`
  .confirm-order {
    padding: 2.5rem;
    background-color: ${(props) => props.theme['base-card']};
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .confirm-order > button {
    width: 100%;
    font-size: 14px;
    line-height: 1.6;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.yellow};
    padding: 12px 0;
    border: none;
    border-radius: 6px;
    transition: 0.1ms;

    :hover {
      background-color: ${(props) => props.theme['yellow-dark']};
    }
  }
`

export const Details = styled.div`
  margin: 1.5rem 0;

  ul li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.4rem 0;
  }

  ul > .total {
    font-weight: bold;
    font-size: 20px;
  }
`
