import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Grid } from '@material-ui/core';
import './style.css';



const CardMoreTest = () => {



  return (





    <Container>
      <Grid container spacing={4} style={{ display: 'flex' }}>
        <Grid item xs={12} sm={6} md={4} lg={4} xlg={4}></Grid>
        <Card style={{ width: '300px', height: '25rem', marginTop:'3px', marginBottom:'50px' }}>
          <Card.Body>
            <Card.Header>Nome do projeto</Card.Header>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content.Some quick example text to build on the card title and make up the bulk of
              the card's content
            </Card.Text>
            <Card.Footer></Card.Footer>
          </Card.Body>
        </Card>
      </Grid >
    </Container>





  );
};




export default CardMoreTest;