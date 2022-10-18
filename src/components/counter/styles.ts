import styled from 'styled-components'

export const CounterContainer = styled.div`
  font-size: 38px;
  font-weight: bold;
  font-family: 'Baloo 2', sans-serif;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme['base-title']};

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
`
