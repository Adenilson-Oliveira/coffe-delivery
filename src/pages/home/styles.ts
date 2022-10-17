import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin: 0 10rem;

  section {
    padding: 5.875rem 0;

    display: flex;
    justify-content: space-between;
    /* flex: 1; */
    div {
      padding-right: 3.5rem;
    }

    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.25rem;
      line-height: 130%;
      color: ${(props) => props.theme['base-subtitle']};
      margin-bottom: 4.125rem;
    }

    ul {
      columns: 2;
      li {
        margin-bottom: 1.25rem;
        display: flex;
        align-items: center;
        gap: 12px;
        color: ${(props) => props.theme['base-text']};
      }

      /* li :first-child {
        color: red;
        background-color: gray;
        width: 16px;
        height: 16px;
        padding: 6px;
      } */
    }
  }

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 32px;
    line-height: 130%;
  }

  .products {
    display: flex;
    flex-wrap: wrap;

    justify-content: space-between;
    align-items: center;
  }

  .icon {
    font-size: 16px;
    border-radius: 1000;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .shopping-cart {
    color: ${(props) => props.theme.background};
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  .timer {
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.background};
  }

  .packeage {
    background-color: ${(props) => props.theme['base-text']};
    color: ${(props) => props.theme.background};
  }

  .coffee {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};
  }
`
