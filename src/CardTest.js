import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
// import { CardColumns } from 'react-bootstrap';
import { Grid } from '@material-ui/core';

// function getButtonText() {
//     return 'Click on me';
// };


const CardTest = () => {
  // const buttonText = 'Click me';


  return (


    


        <Grid item xs={12} sm={6} md={4} lg={4} xlg={4}>
          <Card style={{ width: '100%', height: '100%' }}>
            <div style={{ width: '100', height: '10%', backgroundColor: 'red' }}></div>
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

export default CardTest;