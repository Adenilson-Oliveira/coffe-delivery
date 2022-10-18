import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 16rem;
  /* max-width: 18rem; */
  height: 18.75rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* gap: 5rem; */
  align-items: center;
  text-align: center;

  /* margin: 2rem;
  margin-bottom: 2.5rem; */

  background-color: ${(props) => props.theme['base-card']};

  border-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;

  h2 {
    font-family: 'Baloo 2', sans-serif;
  }

  img {
    margin-top: -1rem;
    width: 7.5rem;
    height: 7.5rem;
  }

  .features span {
    font-size: 0.8rem;
    font-weight: bold;
    padding: 0 0.8rem;
    border-radius: 8px;
    color: ${(props) => props.theme['yellow-dark']};
    background-color: ${(props) => props.theme['yellow-light']};
  }

  .input-qtd {
    padding: 0 1rem;
    display: flex;
    gap: 1rem;
    padding-right: 1rem;
    align-items: center;
    height: 38px;
    margin-bottom: 1rem;

    /* padding: 0 1rem; */

    span {
      font-size: 38px;
      font-weight: bold;
      font-family: 'Baloo 2', sans-serif;
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme['base-title']};
    }
    .qtd {
      flex: 1;
      background-color: ${(props) => props.theme['base-button']};
      border-radius: 6px;
      height: 38px;
      font-size: 25px;
      gap: 0.5rem;
      padding: 0 1rem;

      overflow: hidden;

      display: flex;
      align-items: center;
      justify-content: space-evenly;

      font-weight: normal;
      color: ${(props) => props.theme['base-text']};
    }

    .num {
      font-size: 30px;
    }

    .minus,
    .plus {
      cursor: pointer;
      /* pointer-events: none; */
      padding: 0;
      margin: 0;
      font-size: 25px;
      color: #9747ff;
      transition: 0.1ms;

      &:hover {
        color: ${(props) => props.theme['purple-dark']};
      }
    }

    button {
      border-radius: 6px;
      height: 38px;
      width: 38px;
      border: 0;
      background-color: ${(props) => props.theme['purple-dark']};
      color: ${(props) => props.theme.white};
      padding: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.1ms;

      :hover,
      :focus {
        outline: none;
        background-color: #9747ff;
      }
    }
  }
`
