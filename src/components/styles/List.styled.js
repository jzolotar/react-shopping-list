import styled from 'styled-components';

export const StyledList = styled.ul`
  padding: 1rem 1.25rem;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.25rem;
    padding-left: 1rem;
    border-radius: 5px;
    transition: all 0.3s linear;

    &:hover {
      background-color: hsl(205, 86%, 81%);
    }

    p {
      font-size: 1rem;
      text-transform: uppercase;
    }
    button {
      background: transparent;
      border-color: transparent;
      cursor: pointer;
      font-size: 0.95rem;
      margin: 0 0.15rem;

      &.edit {
        color: green;
      }

      &.remove {
        color: red;
      }
    }
  }
`;
