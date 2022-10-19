import styled from 'styled-components'

export const ProductCheckoutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.25rem 0.5rem;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  h2 {
    margin-left: 0;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    width: 100px;
    /* font-size: 1.5rem; */
    /* font-weight: bold; */
    font-family: 'baloo 2', sans-serif;
  }

  img {
    margin-right: 20px;
    width: 64px;
  }

  .actions {
    /* div {
      margin-right: 1rem;
    } */

    button {
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      padding-right: 1.5rem;
      background-color: ${(props) => props.theme['base-button']};
      border: none;
      border-radius: 6px;
      color: ${(props) => props.theme['base-text']};
      transition: 0.1ms;
    }

    button:hover {
      background-color: ${(props) => props.theme['base-hover']};
      color: ${(props) => props.theme['base-subtitle']};

      .trash {
        color: ${(props) => props.theme['purple-dark']};
      }
    }
  }

  .trash {
    color: ${(props) => props.theme.purple};
  }

  .counter {
    display: flex;
    align-items: center;
    margin-right: 1rem;
  }

  .num {
    right: calc(50% - 7px);
  }

  .icon {
    font-size: 16px;
    border-radius: 1000;
    padding: 8px;
    /* border-radius: 50%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-wrap: wrap;
  }

  .price {
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`
