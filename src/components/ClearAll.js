import { StyledClearBtn } from './styles/ClearAll.styled';
const ClearAll = ({ onClearItemsHandler }) => {
  return (
    <StyledClearBtn onClick={onClearItemsHandler}>
      Clear all items
    </StyledClearBtn>
  );
};

export default ClearAll;
