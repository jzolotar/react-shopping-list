import { StyledForm } from './styles/Form.styled';

const Form = ({ onSubmitHandler, onChangeHandler, name, isEditing }) => {
  return (
    <StyledForm onSubmit={onSubmitHandler}>
      <h1>SHOPPING LIST</h1>
      <div>
        <input
          autoFocus
          onChange={onChangeHandler}
          type='text'
          placeholder='e.g. milk'
          value={name}
        />
        <button type='submit'>{isEditing ? 'Edit' : 'Add'}</button>
      </div>
    </StyledForm>
  );
};

export default Form;
