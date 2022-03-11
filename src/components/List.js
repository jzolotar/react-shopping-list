import { BiEdit } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import { StyledList } from './styles/List.styled';

const List = ({ list, onRemoveItemHandler, onEditItemHandler }) => {
  return (
    <StyledList>
      {list.map((item) => {
        const { id, title } = item;
        return (
          <li id={id}>
            <p>{title}</p>
            <div>
              <button
                onClick={() => onEditItemHandler(item.id)}
                className='edit'
              >
                <BiEdit />
              </button>
              <button
                onClick={() => onRemoveItemHandler(item.id)}
                className='remove'
              >
                <BiTrash />
              </button>
            </div>
          </li>
        );
      })}
    </StyledList>
  );
};

export default List;
