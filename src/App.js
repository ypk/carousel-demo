import React, { Component } from 'react';
import api from './api/pixabay';

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
          <div className="slide" style={{backgroundImage: `url(${item.webformatURL})`}}></div>
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
      <div className = "slider">
        {this.state.imageListCarousel}
      </div>
    );
  }
}

export default App;
