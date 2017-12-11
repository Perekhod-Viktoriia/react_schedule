import React, {Component} from 'react';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {name: '', surname: '', dateOfBirthday: ''};
        this.handleChange = this.handleChange.bind(this);
    }

    /**
     * writes values to an object
     * @param event
     */
    handleChange(event) {
        let state = {};
        state[event.target.name] = event.target.value;

        this.setState(state);
    }

    /**
     * считает количество лет
     * @returns {string}
     */
    getAge() {
        let now = new Date();
        let yearNow = now.getFullYear();
        let year = this.state.dateOfBirthday.slice(0, 4);

        let dateToCompare = new Date(this.state.dateOfBirthday);
        dateToCompare.setFullYear(yearNow);

        let timeDiff = dateToCompare.getTime() - now.getTime();
        let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

        if (yearNow < year) {
            return 'Not valid';
        } else if (diffDays > 0) {
            return `You age , ${ yearNow - year - 1}`
        } else {
            return `You age , ${ yearNow - year}`;
        }
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <input name="name" placeholder={'Имя'} className="Inputs" value={this.state.name} onChange={this.handleChange}/>
                <br/>
                <input name="surname" placeholder={'Фамилия'} className="Inputs" value={this.state.surname} onChange={this.handleChange}/>
                <br/>
                <input name="dateOfBirthday" className="Inputs" type="date" value={this.state.dateOfBirthday}
                       onChange={this.handleChange}/>

            </header>
            <div className="App-intro">
                Hello! {this.state.surname} {this.state.name}
                <br/>
                {this.getAge()}
            </div>
        </div>;
    }
}

export default App;
