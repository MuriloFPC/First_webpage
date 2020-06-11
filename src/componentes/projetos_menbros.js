import React, { useRef } from "react";
import { Column, Section, Title, Container } from 'rbx';
import Logo from "../imagens/logo.png";




function Inicio () {
  const myRef = useRef(null)

      return (
      <Section ref ={myRef} size="medium" className="home">
        <Container>
          <Column.Group>
            <Column size={4}>
              <Title size={2} spaced className="has-text-black">
                PROJETOS
  </Title>
              <Title size={5} spaced className="has-text-black" subtitle>
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.<br /><br />
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
  </Title>
              <p>
                <strong>Register for free Now</strong>
              </p>
            </Column>
            <Column size={3} offset={3}>
              MEMBROS
              <img src={Logo}/>
            </Column>
          </Column.Group>
        </Container>
      </Section>
      )
    }
  
  export default Inicio ;