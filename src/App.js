import React, { Component } from 'react';
import api from './api/pixabay';
import arrowAssetPath from './assets/images/arrow.svg';
import './App.scss';

class App extends Component {
  state = {
    imageList: [],
    imageListCarousel: void 0
  };
  componentDidMount() {
    api.getImages().then((data)=>{
      let carousel = data.map((item, key) => {
        return (
          <div className={ "slide" + ( key === 0 ? ' active' : '') } style={{backgroundImage: `url(${item.webformatURL})`}}></div>
        );
      })
      this.setState({
        imageList: data,
        imageListCarousel: carousel
      });
    }).catch((err)=>{
      throw new Error(err);
    })
  }
  render() {
    return (
      <div className = "slider-container">
        <div className = "slider">
          {this.state.imageListCarousel}
        </div>
        <div className = "slider-controls">
          <div className = "button-container">
            <div className = "btn prev" style={{backgroundImage: `url(${arrowAssetPath})`}} />
          </div>
          <div className = "button-container">
            <div className = "btn next" style={{backgroundImage: `url(${arrowAssetPath})`}} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
