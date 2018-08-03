import React, { Component } from 'react';
import { AppRegistry, Image } from 'react-native';

export default class Bananas extends Component {
  render() {
    let pic = { uri: "https://sillysnap.s3.amazonaws.com/uploads/gallery/picture/113/thumb_coke_dog.gif"};
    return (
      <Image source={pic} style={{width: 173, height: 180}}/>
    );
  }
}

// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () => Bananas);
