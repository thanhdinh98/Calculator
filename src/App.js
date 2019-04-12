import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import "bootstrap/dist/css/bootstrap.min.css";

import CalWrapper from './containers/CalWrapper';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <CalWrapper/>
            </Provider>
        );
    }
}

export default App;