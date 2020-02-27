import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './styles/global.css'
import Contador from './componentes/Contador';

// export default class App extends React.Component { podemos usar o export aqui mesmo 
class App extends Component {
  render(){
    return <Contador/>;
  }
}

export default App;