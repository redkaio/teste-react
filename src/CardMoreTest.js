import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { CardColumns } from 'react-bootstrap';
import { Grid } from '@material-ui/core';

// function getButtonText() {
//     return 'Click on me';
// };


const CardMoreTest = () => {
  // const buttonText = 'Click me';


  return (


    <Container>
      <Grid container spacing={4} style={{ display: 'flex' }} >

          
        <Grid item xs={12} sm={12} md={4} lg={4} xlg={4}>
          <Card style={{ height: '25rem' }}>
            <div style={{ height: '10%', backgroundColor: 'red' }}></div>
            <div style={{ width: '70%', height: '35%', backgroundColor: 'blue' }}></div>
            <div style={{ width: '100%', height: '10%', backgroundColor: 'green' }}></div>
            <div style={{ width: '50%', height: '35%', backgroundColor: 'pink' }}></div>
            <div style={{ widht: '100%', height: '10%', backgroundColor: 'yellow' }}></div>
          </Card>
        </Grid>

       

    
      
      </Grid>
    </Container>

  );
};




export default CardMoreTest;