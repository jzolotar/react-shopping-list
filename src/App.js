import { Fragment } from 'react';
import { v4 as uuid } from 'uuid';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container';
import Form from './components/Form';
import List from './components/List';
import ClearAll from './components/ClearAll';
import Alert from './components/Alert';
import { useState } from 'react';
function App() {
  //states
  const [name, setName] = useState('');
  const [alert, setAlert] = useState({
    show: false,
    text: '',
    status: '',
  });

  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  //handlers

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (!name) {
      editAlert(true, 'please enter some value', 'danger');
    }

    if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          } else {
            return item;
          }
        })
      );
      editAlert(true, 'item has been updated', 'success');
      setIsEditing(false);
      setEditID(null);
      setName('');
    }

    if (name && !isEditing) {
      const newItem = { id: uuid(), title: name };
      setList([...list, newItem]);
      editAlert(true, 'item has been added', 'success');
      setName('');
      setEditID(null);
    }
  };

  const onChangeHandler = (event) => {
    setName(event.target.value);
  };

  const onEditItemHandler = (id) => {
    const editingItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(editingItem.title);
  };
  const onRemoveItemHandler = (id) => {
    editAlert(true, 'item has been removed', 'danger');
    setList(list.filter((item) => item.id !== id));
  };

  const onClearItemsHandler = () => {
    editAlert(true, 'all items have been removed', 'danger');
    setList([]);
  };

  const editAlert = (show = false, text = '', status = '') => {
    setAlert({ show, text, status });
  };

  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        {alert.show && (
          <Alert alert={alert} removeAlert={editAlert} list={list} />
        )}
        <Form
          onChangeHandler={onChangeHandler}
          onSubmitHandler={onSubmitHandler}
          name={name}
          isEditing={isEditing}
        />
        {list.length > 0 && (
          <List
            list={list}
            onRemoveItemHandler={onRemoveItemHandler}
            onEditItemHandler={onEditItemHandler}
          />
        )}

        {list.length > 0 && (
          <ClearAll onClearItemsHandler={onClearItemsHandler} />
        )}
      </Container>
    </Fragment>
  );
}

export default App;
