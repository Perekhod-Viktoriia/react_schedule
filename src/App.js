import React, {Component} from 'react';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <input name="name" className="Inputs" id={"name"}/>
                    <input name="surname" className="Inputs" id={"surname"}/>

                </header>
                <p className="App-intro">
                    Hello!, dear {document.getElementById("name")}
                    <h2>It is {new Date().toLocaleTimeString()}.</h2>
                </p>
            </div>
        );
    }
}

export default App;
