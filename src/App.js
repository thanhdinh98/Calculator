import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

import CalWrapper from './containers/CalWrapper';

class App extends Component{
    render(){
        return(
            <div>
                <CalWrapper/>
            </div>
        );
    }
}

export default App;