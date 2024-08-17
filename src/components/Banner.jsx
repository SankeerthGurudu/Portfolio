import React from 'react'
import { useState, useEffect } from 'react'
// import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from "../assets/img/header-img.svg"
import {Container,Row,Col} from 'react-bootstrap';

const Banner = () => {
    const [loopNum, setloopNum] = useState(0); //to keep track of the current index in the 'toRotate' array;
    const [isDeleting, setisDeleting] = useState(false) //tracks whether the component is in the process of deleting characters from the text
    const toRotate=["Web Developer","Competitive Programmer","Problem Solver"]
    const [text, settext] = useState(''); //holds the current text being displayed
    const [delta, setdelta] = useState(300-Math.random()*100); // represents the interval in milliseconds between each update of the 'text'.
    const period=2000; // the time to pause after typing full word before starting the deletion process

    useEffect(() => {
      let ticker=setInterval(() => {
        tick();
      },delta);
    
      return ()=>{clearInterval(ticker)};
    }, [text])

    const tick=()=>{
        let i= loopNum%toRotate.length;
        let fullText=toRotate[i];
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1);
        settext(updatedText);

        if(isDeleting){
            setdelta(prevDelta=> prevDelta/2);
        }

        if(!isDeleting && updatedText==fullText){
            setisDeleting(true);
            setdelta(period);
        }else if(isDeleting && updatedText ==''){
            setisDeleting(false);
            setloopNum(loopNum+1);
            setdelta(500);
        }
    }


    return (

        <section className='banner' id='home'>
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={7}>
                        <span className='tagline'>Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Sankeerth `}<span className='wrap'>{text}</span></h1>
                        <p>Currently Pursuing B.Tech from Bharati Vidyapeeth University(BVDU-DET)</p>
                        <button onClick={() => console.log('connect')}>Let's connect  </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header IMg" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner
