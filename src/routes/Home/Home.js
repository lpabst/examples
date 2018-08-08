import React, { Component } from 'react';
import './Home.css';

import Animations from './../../components/Animations/Animations';
import AutocompleteSuggestions from './../../components/AutocompleteSuggestions/AutocompleteSuggestions';
import Slider from './../../components/Slider/Slider';

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }

    }

    componentDidMount(){
        
    }

    render() {
        return (
            <section className='routeWrapper'>

                <Animations />
                <AutocompleteSuggestions />
                <Slider />
            
            </section>
        );
    }
}


export default Home;