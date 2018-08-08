import React, { Component } from 'react';
import './Slider.css'


class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            imageUrls: [
                'https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&h=350', 
                'https://cdn.pixabay.com/photo/2018/01/21/19/57/tree-3097419__340.jpg', 
                'https://assets.rbl.ms/6461854/980x.jpg', 
                'https://www.nature.org/cs/groups/webcontent/@web/@rhodeisland/documents/media/hpsp-bradford-dam.jpg', 
                'https://mothernature.com/wp-content/uploads/2018/03/mystery-of-purple-lights-in-sky-solved-with-help-from-citizen-scientists-1200x800_c.jpg'
            ],
            currentImage: 0,
        }

    }

    updateSliderImage(indexModifier){
        let currentImage = this.state.currentImage + indexModifier;

        if (currentImage < 0) currentImage = 0;
        if (currentImage >= this.state.imageUrls.length) currentImage = this.state.imageUrls.length-1;

        this.setState({currentImage});
    }

    render() {
        return (
            <section className='sectionWrapper'>
                <div className='sliderImageWindow'>
                    <div className='sliderImageWrapper' style={{width: this.state.imageUrls.length*400, left: this.state.currentImage*-400}} >
                        { this.state.imageUrls.map( (url, i) => {
                            return <img src={url} alt="slider" className="sliderImage" />
                        })}
                    </div>
                </div>
                <div className='sliderControls'>
                    <button className='sliderBtn' onClick={() => this.updateSliderImage(-1)} >Back</button>
                    <button className='sliderBtn' onClick={() => this.updateSliderImage(1)} >Next</button>
                </div>
            </section>
        );
    }
}


export default Slider;