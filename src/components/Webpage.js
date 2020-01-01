import React from 'react';
import FillerText from './FillerText';

export class Webpage extends Component {
  render() {
    return (
      <h1>{ "The world's coolest webpage" }</h1>
      <FillerText />
      <FillerText />
    )
  }
}
