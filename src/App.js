import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "./components/Header";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => {
    let tempStep = step+1;
    setStep(tempStep)
    console.log('hhhhhhhh')
  //  setStep()
  };
  const backStep = () => {
    let tempStep = step-1;
    setStep(tempStep)
   };
  return (
    <Router>
    <div className="App">
      <div className="main">
        <Container>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Switch>
            <Route component={Step1} exact path="/" />

            <Route component={Step2} exact path="/step2" />


            <Route component={Step3} exact path="/step3" />
              
          </Switch>
          
        </Container>
      </div>
    </div>
    </Router>
  );
}

const stepShifter = (key, nextStep, backStep) => {
  
  switch (key) {
    case 1:
      return <Step1 nextStep={nextStep()} />;
      break;
    case 1:
      return <Step2 nextStep={nextStep} backStep={backStep} />;
      break;
    case 1:
      return <Step3  nextStep={nextStep}  backStep={backStep} />;
      break;

    default:
      return <Step1 />;
      break;
  }
};

export default App;
