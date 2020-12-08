import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { CardColumns } from 'react-bootstrap';
import { Grid } from '@material-ui/core';
import CardTest from './CardTest';
import CardMoreTest from './CardMoreTest';
import ApprovalCard from './ApprovalCard';

// function getButtonText() {
//     return 'Click on me';
// };


const App = () => {
  // const buttonText = 'Click me';


  return (

    <ApprovalCard>
    <CardMoreTest />
    <CardMoreTest />
    <CardMoreTest />
    </ApprovalCard>
    
    
    
    

  );
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')

);