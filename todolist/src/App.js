import { Container, Col} from 'react-bootstrap';
import FormApp from './Components/FormApp';

function App() {
  return (
    <div className="App">
      <Container expand="lg"> 
        <h1 className="text-center">Aplicacion Todo List</h1>
        <br />
        <Col className="me-auto">
            <FormApp />
        </Col>
      </Container>
    </div>
  );
}

export default App;
