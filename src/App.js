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
  onItemClick (event) {
    let actionId = event.currentTarget.dataset.actionId;

    if(actionId === "prev"){
      console.log("prev clicked");
      // add code to move slider - 1
    }else if(actionId === "next"){
      console.log("next clicked");
      // add code to move slider + 1
    }
  }
  render() {
    return (
      <div className = "slider-container">
        <div className = "slider">
          {this.state.imageListCarousel}
        </div>
        <div className = "slider-controls">
          <div className = "button-container">
            <div onClick={this.onItemClick} data-action-id="prev" className = "btn prev" style={{backgroundImage: `url(${arrowAssetPath})`}}>
              <span>Prev</span>
            </div>
          </div>
          <div className = "button-container">
            <div onClick={this.onItemClick} data-action-id="next" className = "btn next" style={{backgroundImage: `url(${arrowAssetPath})`}}>
              <span>Next</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
