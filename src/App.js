import { Fragment } from 'react';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container';
import Form from './components/Form';
import List from './components/List';
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Form />
        <List />
      </Container>
    </Fragment>
  );
}

export default App;
