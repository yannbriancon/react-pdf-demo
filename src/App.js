import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import PdfBlobProvider from './components/PdfBlobProvider';

class App extends React.Component{
  state: State = {count: 0, pdfId: null};

  uuidGenerator = require('uuid/v4');

  handleSubmit = () => {
    this.setState({count: this.state.count + 1, pdfId: this.uuidGenerator()})
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button
            onClick = {this.handleSubmit}
          >
            Download
          </button>
        </header>
        <PdfBlobProvider 
          email={'monEmail'} 
          nom={`monNom ${this.state.count}`} 
          prenom={'monPrenom'} 
          pdfId={this.state.pdfId}
        />
      </div>
    );
  }
}

export default App;
