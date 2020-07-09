import React, {Component} from 'react';
import './index.css'

const list = [{
  rio_de_janeiro: {min: '18°', max: '27°'},
  sao_paulo: {min: '31°', max: '17°'},
  belo_horizonte: {min: '18°', max: '27°'},
  brazilia: {min: '18°', max: '27°'},
  belem: {min: '18°', max: '27°'},
  salvador: {min: '18°', max: '27°'},
  curitiba: {min: '18°', max: '27°'},
  fortaleza: {min: '18°', max: '27°'},
  joao_pessoa: {min: '18°', max: '27°'},
}]

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1>Previsão do tempo</h1>
        </header>
        <Search />
        <section className="section">
          <h2>Capitais</h2>
          <div className="table-container">
            <Table list={list}/>
          </div>
        </section>
      </div>
    )
  };
}


const Search = () =>
  <div className="search">
    <input type="text" placeholder="insira o nome da cidade" />
    <Button><i class="fas fa-search"></i></Button>
  </div>


const Button = ({ children, className }) =>   
  <button className={className}>
    {children}
  </button>


const Table = ({ list, className}) =>
  <table>
    <tr className={className}>
        <th>min</th>
        <th>max</th>
    </tr>
      <tr>
          <td>{list.sao_paulo}</td>
          <td>27°</td>  
          <td>Rio de Janeiro</td>
      </tr>
  </table>

export default App;
