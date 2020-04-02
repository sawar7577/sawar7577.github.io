import React from 'react';
import logo from './logo.svg';
import './App.css';


// class Portfolio extends React.Component {
//   constructor(props) {
//     super(props);
//     this
//   }
// }



class IndexColumn extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      indexItems: [
        'About',
        'Skills',
        'Education',
        'Contact',
      ]
    };
  }

  render() {
    return (
      <div className="Elements--column">
        <div className="table-header">
          Table of contents
        </div>
        {this.state.indexItems.map((item, index) => (
          <li>{item}</li>
        ))}
      </div>
    );
  }

}
  

function App() {
  return (
    <div className="App">
      <div data-reactroot="">
        <div>
          <div className="rmq-27dabc86">
            <div className="rmq-77791fc">
              <div className="rmq-dc160f08">
                Sawar Sagwal
              </div>
              <div className="rmq-d92f5945">
                Website for my portfolio and other stuff
              </div>
            </div>
            <div className="rmq-9b5d13cf">
              <div class="Elements--two_columns">
                <IndexColumn></IndexColumn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default App;
