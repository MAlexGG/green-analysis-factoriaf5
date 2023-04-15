import React from 'react'
import { CtCounter, CtCounters, CtImpact, Txt, TxtTitle } from './Impact.styled';
import CountUp from 'react-countup';

function Impact() {
  return (
    <CtImpact>
        <TxtTitle>Nuestro impacto en 4 años</TxtTitle>
        <CtCounters>
            <CtCounter>
                <CountUp
                start={0}
                end={810}
                enableScrollSpy= 'true'
                scrollSpyOnce = 'true'
                duration={2.75}
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
                duration={2.75}
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
                duration={2.75}
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
        

    

    </CtImpact>
  )
}

export default Impact