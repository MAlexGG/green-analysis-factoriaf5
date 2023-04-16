import React, { useEffect, useState } from 'react'
import { CtDots, CtImg, CtTestimonials, Dot, Img, Txt, TxtName, TxtTitle } from './Testimonials.styled';
import data from '../../assets/data/testimonials.json';

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
  )
}

export default Testimonials