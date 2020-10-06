import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/Errorboundry';

class App extends Component { //we create class in order to use state
    constructor() {
        super()
        this.state = { //when we have a state we call that smart component
            robots: [],
            searchfield: ''
        }
    }

    //lifecycle
    componentDidMount(){ //
        fetch('https://jsonplaceholder.typicode.com/users')//we bring data from a server on the internet
        .then(response => response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value }) //anytime you want to change state and update it use setState
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !robots.length ? //ternary operation a la place de if else
            <h1>Loading</h1> :
        (
            <div className='tc'>
                <h1 className='f1'>Robot Map friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} /> 
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    }
}

export default App;