import React from 'react'
import { CtInstagram, CtNews, ImgButton, ImgInstagram } from './News.styled';
import data from '../../assets/data/instagram.json';
import Button from '../button/Button';
import icoIg from '../../assets/socialmedia/instagram.svg';

function News() {

  return (
    <>
    <CtNews>
      {data.instagram.map((ig, index) => (
        <CtInstagram key={index} href={ig.url} target='_blank'>
          <ImgInstagram src={require(`/src/assets/instagram/${ig.image}`)} alt={ig.alt}/>
        </CtInstagram>
      ))}
      
               
    </CtNews>
    <Button color='white' background='#408bd1' hColor='white' hBackground='#359dff'>
      <ImgButton src={icoIg}/>
      Sigue en Instagram
    </Button>
  </>
  )
}

export default News   