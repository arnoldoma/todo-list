import { Container, Row, Col } from 'react-bootstrap';
import FormApp from './Components/FormApp';
import ListApp from './Components/ListApp';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <FormApp />
          </Col>
          <Col>
            <ListApp />
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default App;
