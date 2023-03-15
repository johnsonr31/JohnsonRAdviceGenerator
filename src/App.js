import './App.css';
import Advice from './Components/Advice/AdviceComponent';
// import AdviceMobile from './Components/AdviceMobile/AdviceMobileComponent';
import { Container, Col, Row } from 'react-bootstrap';

// GetAdvice();

function App() {
  return (
    <div>
      <Container className='advice-block'>
        <Row>
          <Col>
            <Advice />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
