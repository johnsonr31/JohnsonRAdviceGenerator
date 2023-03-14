import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// let adviceId = 0;


function Advice ()
{
    let adviceData = '';
    const [ advice, setAdvice ] = useState('');
    async function GetAdvice () 
    {
        const promise = await fetch('https://api.adviceslip.com/advice');
        const data = await promise.json();
        adviceData = data.slip;
        // adviceId = data.slip.id;
        setAdvice(adviceData);
        console.log(data.slip);
        // console.log(`Advice number ${adviceId} is : ${adviceData}`);
    }
    useEffect(() => {
        GetAdvice();
      }, []);
            return (
                <div>
                    <Container>
                        <Row>
                            <Col>
                                <p className='advice-id'>Advice #{advice.id}</p>
                                <p className='advice'>"{advice.advice}"</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
}

export default Advice