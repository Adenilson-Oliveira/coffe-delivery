import styled from 'styled-components'

export const CounterContainer = styled.div`
  font-size: 38px;
  font-weight: bold;
  font-family: 'Baloo 2', sans-serif;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme['base-title']};

  width: 70px;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  height: 38px;
  font-size: 25px;
  gap: 0.5rem;
  padding: 0 1rem;

  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: normal;
  color: ${(props) => props.theme['base-text']};

  position: relative;

  .num {
    padding: 0;
    margin: 0;
    position: absolute;
    font-size: 2rem;
    font-family: monospace;

    right: calc(50% - 8px);
  }

  .minus,
  .plus {
    position: absolute;
    font-family: monospace;
    cursor: pointer;
    /* pointer-events: none; */
    padding: 0;
    margin: 0;
    width: 25px;
    font-size: 25px;
    color: #9747ff;
    transition: 0.1ms;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  .minus {
    left: 0px;
  }
  .plus {
    right: 0px;
  }
`
