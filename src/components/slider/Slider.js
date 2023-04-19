import React from 'react';
import { CtSlider, Video } from './Slider.styled';
import VideoHomePage from '../../assets/videos/multimedia-1-home-factoriaf5-web_UJHvoRbY.mp4';

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