import styled from 'styled-components';

export const StyledAlert = styled.section`
  width: 100%;
  border-radius: 7px;
  background-color: white;
  text-align: center;
  padding: 0.3rem 0.1rem;

  p {
    font-size: 0.8rem;
    font-weight: bold;
    font-style: italic;

    &.danger {
      color: red;
    }
    &.success {
      color: green;
    }
  }
`;
