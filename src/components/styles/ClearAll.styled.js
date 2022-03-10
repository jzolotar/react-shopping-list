import styled from 'styled-components';

export const StyledClearBtn = styled.button`
  width: 100%;
  cursor: pointer;
  text-align: center;
  color: red;
  background: transparent;
  border-color: transparent;
  opacity: 0.7;
  font-size: 0.9rem;
  text-transform: capitalize;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;
