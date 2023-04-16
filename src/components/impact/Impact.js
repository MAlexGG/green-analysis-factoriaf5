import React from 'react'
import { CtCounter, CtCounters, CtCoders, CtImpact, ImgCoders, ImgDeco, Txt, TxtCoders, TxtTitle } from './Impact.styled';
import CountUp from 'react-countup';
import deco1 from '../../assets/logos/Banner-geometrico-1.png';
import coders from '../../assets/ex-coders/B-APRENDE-IMAGEN-1.jpg';

function Impact() {
  return (
    <>
    <CtImpact>
        <TxtTitle>Nuestro impacto en 4 años</TxtTitle>
        <CtCounters>
            <CtCounter>
                <CountUp
                start={0}
                end={810}
                enableScrollSpy= 'true'
                scrollSpyOnce = 'true'
                duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                        <span ref={countUpRef}/>
                        </div>
                    )}
                </CountUp>
                <Txt>PERSONAS FORMADAS</Txt>
            </CtCounter>

            <CtCounter>
                <CountUp
                start={0}
                end={45}
                suffix=' %'
                enableScrollSpy= 'true'
                scrollSpyOnce = 'true'
                duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                        <span ref={countUpRef}/>
                        </div>
                    )}
                </CountUp>
                <Txt>DE MUJERES</Txt>
            </CtCounter>

            <CtCounter>
                <CountUp
                start={0}
                end={80}
                suffix=' %'
                enableScrollSpy= 'true'
                scrollSpyOnce = 'true'
                duration={3}
                >
                    {({ countUpRef }) => (
                        <div>
                        <span ref={countUpRef}/>
                        </div>
                    )}
                </CountUp>
                <Txt>TASA DE ÉXITO</Txt>
            </CtCounter>
        </CtCounters>
        <ImgDeco src={deco1} alt='decoration'/>
    </CtImpact>
    <CtCoders>
        <TxtCoders>Hoy más que nunca las empresas necesitan talento digital diverso.</TxtCoders>
        <TxtCoders>El sector digital ofrece salarios competitivos, contratos estables y buenas perspectivas de desarrollo profesional.</TxtCoders>
        <ImgCoders src={coders} alt='coders working'/>
    </CtCoders>
    </>
  )
}

export default Impact