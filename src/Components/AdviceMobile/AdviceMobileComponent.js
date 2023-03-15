import { Container, Row, Col } from 'react-bootstrap';
import { useEffect, useState } from 'react';

// let adviceId = 0;

function AdviceMobile ()
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

    function DiceIcon () 
{
    return (
        <div onClick={GetAdvice} className="dice-icon-background glow-button">
            <svg className='dice-icon' width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
        </div>
    )
}
    useEffect(() => {
        GetAdvice();
      }, []);
            return (
                <div>
                    <Container>
                        <Row>
                            <Col className='advice-paragraphs'>
                                <p className='advice-id'>Advice #{advice.id}</p>
                                <p className='advice'>"{advice.advice}"</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
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

export default AdviceMobile