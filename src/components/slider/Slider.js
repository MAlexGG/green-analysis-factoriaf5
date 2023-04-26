import React from 'react';
import { CtSlider, Video } from './Slider.styled';
import VideoHomePage from '../../assets/videos/VideoInicio.mp4';

function Slider() {
  return (
    <CtSlider>
      <Video autoPlay loop muted>
        <source src={VideoHomePage} type="video/mp4"/>
      </Video>
    </CtSlider>
  )
}

export default Slider