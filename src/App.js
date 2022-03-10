import { Fragment } from 'react';
import { GlobalStyles } from './components/styles/Global';
import { Container } from './components/styles/Container';
import Form from './components/Form';
import List from './components/List';
import ClearAll from './components/ClearAll';
import Alert from './components/Alert';
function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Container>
        <Alert />
        <Form />
        <List />
        <ClearAll />
      </Container>
    </Fragment>
  );
}

export default App;
