import React, { useEffect, useState } from 'react'
import { CtApply, CtDots, CtImg, CtTestimonials, CtVideos, Dot, Img, ImgDeco, Txt, TxtName, TxtTitle, Video } from './Testimonials.styled';
import data from '../../assets/data/testimonials.json';
import deco2 from '../../assets/logos/Banner-geometrico-2.webp';
import Button from '../button/Button';

function Testimonials() {

    const [coder, setCoder] = useState(data.testimonials[0]);
    
    /* const handleClick = (index) => {
        setCoder(data.testimonials[index]);
    }; */

    useEffect(() => {
        setTimeout(() => {
            if(coder.id === data.testimonials.length - 1){
                setCoder(data.testimonials[0]);
            } else {
                setCoder(data.testimonials[coder.id + 1]);
            };
        }, 5000);
    }, [coder])

  return (
    <>
    <CtTestimonials>
        <TxtTitle>Testimonios</TxtTitle>
        <CtImg>
            <Img src={require(`/src/assets/ex-coders/${coder.image}`)} alt={`photo of ${coder.name}`} />
        </CtImg>
        <Txt>{coder.text}</Txt>
        <TxtName><strong>{coder.name}</strong>{`, ${coder.info}`}</TxtName>
        <CtDots>
            {data.testimonials.map((data, index)=>(
                <Dot key={index} /* onClick={()=>handleClick(index)} */ background={`${data.id === coder.id ? "var(--color-dark-grey)" : "none"}`} />
            ))}
        </CtDots>
    </CtTestimonials>
    <CtApply>
        <ImgDeco src={deco2} alt='decoration'/>
        <Button color='white' background='var(--color-dark)' hColor='var(--color-main)' hBackground='white'>¡Apúntate ahora!</Button>
        <CtVideos>
            <Video src="https://www.youtube.com/embed/itILwNXjEfw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
            <Video src="https://www.youtube.com/embed/fHF2YytNoQk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></Video>
        </CtVideos>
    </CtApply>
    
    </>
  )
}

export default Testimonials