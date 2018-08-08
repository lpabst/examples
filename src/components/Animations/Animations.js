import React, { Component } from 'react';
import './Animations.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
        backgroundColor: '#00f',
        rotateDeg: 0,
        left: 0,
        animation: 'none',
        popOverWidth: 0,
        alpha: 1,
    }
  }

  updateBackground(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    this.setState({
      backgroundColor: `rgb(${r},${g},${b})`
    })
  }

  updateRotateDeg(){
    let rotateDeg = this.state.rotateDeg === 0 ? 180 : 0;
    this.setState({rotateDeg});
  }

  updateLeftPos(){
    let left = this.state.left === 0 ? 20 : 0;
    this.setState({left});
  }

  updateDangle(){
    let animation = this.state.animation === 'none' ? 'dangle 0.6s ease-in-out forwards infinite' : 'none';
    this.setState({animation});
  }

  popOver(){
    let popOverWidth = this.state.popOverWidth === 0? 58 : 0;
    this.setState({popOverWidth});
  }

  updateAlpha(){
    let alpha = this.state.alpha === 0 ? 1 : 0;
    this.setState({alpha});
  }

  render() {
    return (
      <div className='sectionWrapper'>

        <p className='sectionHeader'>Simple Animations</p>
        
        <div className='exampleWrapper'>
          <div style={{background: this.state.backgroundColor}} className='targetDiv'></div>
          <div onClick={() => {this.updateBackground()}} className='buttonDiv'>Random Color</div>
        </div>
        
        <div className='exampleWrapper'>
          <div style={{transform: 'rotateX(' + this.state.rotateDeg + 'deg)'}} className='targetDiv'>
            <p className="targetDivWords">1</p>
            <p className="targetDivWords">2</p>
            <p className="targetDivWords">3</p>
          </div>
          <div onClick={() => {this.updateRotateDeg()}} className='buttonDiv'>Flip Vertically</div>
        </div>
        
        <div className='exampleWrapper'>
          <div style={{position: 'relative', left: this.state.left}} className='targetDiv'></div>
          <div onClick={() => {this.updateLeftPos()}} className='buttonDiv'>Slide</div>
        </div>
        
        <div className='exampleWrapper'>
          <div style={{animation: this.state.animation}} className='targetDiv'></div>
          <div onClick={() => {this.updateDangle()}} className='buttonDiv'>Dangle</div>
        </div>
        
        <div className='exampleWrapper'>
          <div className='targetDiv'>
            <div style={{width: this.state.popOverWidth}} className='popOverDiv'>
              <p className='targetDivWords'>pop</p>
              <p className='targetDivWords'>over</p>
            </div>
          </div>
          <div onClick={() => {this.popOver()}} className='buttonDiv'>Pop-Over</div>
        </div>
        
        <div className='exampleWrapper'>
          <div className='targetDiv'>
            <p className='targetDivWords'>Fade</p>
            <p className='targetDivWords'>In/</p>
            <p className='targetDivWords'>Out</p>
            <div style={{background: `rgba(90,90,90, ${this.state.alpha}`}} className='fadeOutDiv'></div>
          </div>
          <div onClick={() => {this.updateAlpha()}} className='buttonDiv'>Fade In/Out</div>
        </div>
          
      </div>
    );
  }
}

export default Home;