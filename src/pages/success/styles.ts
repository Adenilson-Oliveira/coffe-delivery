import styled from 'styled-components'

export const SuccessContainer = styled.main`
  margin: 0 10rem;

  h1 {
    font-family: 'baloo 2', sans-serif;
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 5rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6rem;

    /* .details,
    img {
      width: 40%;
    } */
  }

  li + li {
    margin-top: 2rem;
  }

  .details {
    background: linear-gradient(white, white) padding-box,
      linear-gradient(
          120deg,
          ${(props) => props.theme.yellow},
          ${(props) => props.theme.purple}
        )
        border-box;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
    border-radius: 30px;

    border-top-right-radius: 36px;
    border-bottom-left-radius: 36px;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 6px;

    max-width: 40%;

    margin-top: 2.5rem;
    padding: 2.5rem;
    flex: 1;
  }

  .icon {
    font-size: 16px;
    border-radius: 1000;
    padding: 8px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    margin-bottom: -2.5rem;
  }

  .details p {
    margin-left: 2.75rem;
  }

  .map {
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.background};
  }

  .timer {
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.background};
  }

  .dollar {
    background-color: ${(props) => props.theme['yellow-dark']};
    color: ${(props) => props.theme.background};
  }

  .bold {
    font-weight: bold;
  }
`
