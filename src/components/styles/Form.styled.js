import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 1rem 1.25rem;

  h1 {
    letter-spacing: 0.3rem;
    font-size: 1.3rem;
    color: #222831;
    margin-bottom: 1rem;
  }
  div {
    margin: 0;
    padding: 0;
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    display: grid;
    grid-template-columns: 4fr 1fr;
  }

  input {
    padding: 0.25rem;
    padding-left: 1rem;
    border-color: transparent;
  }

  button {
    border: transparent;
    display: grid;
    align-items: center;
    padding: 0.25rem;
    background-color: hsl(205, 86%, 81%);
    letter-spacing: 2px;
    font-size: 0.93rem;
    text-transform: capitalize;
  }
`;
