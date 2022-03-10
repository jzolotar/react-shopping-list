import { BiEdit } from 'react-icons/bi';
import { BiTrash } from 'react-icons/bi';
import { StyledList } from './styles/List.styled';

const List = () => {
  return (
    <StyledList>
      <li>
        <p>Task name</p>
        <div>
          <button className='edit'>
            <BiEdit />
          </button>
          <button className='remove'>
            <BiTrash />
          </button>
        </div>
      </li>
    </StyledList>
  );
};

export default List;
