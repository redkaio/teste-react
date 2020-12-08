import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardMoreTest from './CardMoreTest';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import './Switches.js';
import Switch from '@material-ui/core/Switch';
import Botao from './Botao';


function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </div>
  );
};







const App = () => {



  return (


    <Container>


      <div>
        Oprtunidades disponíveis <span style={{ float: 'right' }}>Ativar geolocalização {Switches()}</span>

      </div>

      <Row style={{ width: '100%' }} md={3} className='justify-content-center'>

        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <CardMoreTest
          cardHeader='Vaga de voluntariado'
          cardDescricao='Entrega de roupas e alimentos para desabrigados'
          cardSp='SP invisível'
          cardJoin='2 - 6 horas semanais'
          cardLocal='Natal - RN'
        />
        <Botao />

      </Row>
    </Container>




  );
};
ReactDOM.render(
  <App />,
  document.querySelector('#root')

);
