import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { Grid } from '@material-ui/core';
import './style.css';
import BotaoJoin from './BotaoJoin.js';



const CardMoreTest = props => {



  return (





    <Container>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4} lg={4} xlg={4}></Grid>
        <Card style={{ width: '300px', height: '25rem', marginTop: '3px', marginBottom: '50px' }}>
          <Card style={{ width: '100%', height: '100%' }}>
            <div className='card-header'>{props.cardHeader}</div>
            <div className='split'>
              <div className='f-half'>{props.cardDescricao}</div>
              <div className='l-half'>Icone</div>
            </div>
            <div className='card-sp'>{props.cardSp}</div>
            <div className='split'>
              <div className='f-half'>{props.cardJoin}</div>
              <div className='l-half'><BotaoJoin /></div>
            </div>
            <div className='card-footer'>{props.cardLocal}</div>

          </Card>
        </Card>
      </Grid >
    </Container>





  );
};




export default CardMoreTest;