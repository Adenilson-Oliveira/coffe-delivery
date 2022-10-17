import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 2rem 10rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: center;
  }

  ul li {
    font-size: 1.125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.purple};
    padding: 8px;
    background-color: darkcyan;
    border-radius: 6px;
  }

  ul li:first-child {
    background-color: ${(props) => props.theme['purple-light']};
  }

  ul li:last-child {
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-size: 22px;
  }
`
