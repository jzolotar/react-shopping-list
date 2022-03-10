import { StyledForm } from './styles/Form.styled';

const Form = () => {
  return (
    <StyledForm>
      <h1>TODO LIST</h1>
      <div>
        <input type='text' />
        <button type='submit'>Add</button>
      </div>
    </StyledForm>
  );
};

export default Form;
