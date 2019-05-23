import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

class HelloWorld extends Component {
    render() {
        return (
            <div>
                <h1>Hello, There!</h1>
                <h1>This is <a href="https://reactjs.org/">ReactJS</a></h1>
            </div>
        )
    }
}

export default hot(module)(HelloWorld);
