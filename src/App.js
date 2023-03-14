import './App.css';
import Advice from './Components/Advice/AdviceComponent';
import DiceIcon from './Components/DiceIcon/DiceIconComponent';
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
        <Row>
          <Col>
            <svg className='divider-desktop' width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
          </Col>
        </Row>
        <Row>
          <Col>
            <DiceIcon />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
