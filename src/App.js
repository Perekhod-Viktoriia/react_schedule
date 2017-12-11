import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', dateOfBirthday: '', age: ''};

        this.handleChange = this.handleChange.bind(this);
        // this.getAge = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (event.target.name === 'name') {
            this.setState({name: event.target.value});
        } else if (event.target.name === 'surname') {
            this.setState({surname: event.target.value});
        } else if (event.target.name === 'birthday') {
            this.setState({dateOfBirthday: event.target.value});
        }
    }

    getAge() {
        let now = (new Date()).getFullYear();
        let year = this.state.dateOfBirthday.slice(0, 4);
        return now - year;
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <input name="name" className="Inputs" value={this.state.name} onChange={this.handleChange}/>
                <br/>
                <input name="surname" className="Inputs" value={this.state.surname} onChange={this.handleChange}/>
                <br/>
                <input name="birthday" className="Inputs" type="date" value={this.state.dateOfBirthday}
                       onChange={this.handleChange}/>

            </header>
            <div className="App-intro">
                Hello!, dear {this.state.surname} {this.state.name}
                <br/>
                You age {this.getAge()}
            </div>
        </div>;
    }
}

export default App;
