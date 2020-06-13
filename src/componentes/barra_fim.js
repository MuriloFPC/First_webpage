import React from 'react'
import {Footer, Content,Column} from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'

const Fotter = () => (
    <Footer className = 'fotter'>
        <Column>
        <Content textAlign="centered">
         <FontAwesomeIcon icon={faEnvelope} size='lg' />
         <spam className="icones"> </spam>
            email@email.com.br
            <spam> </spam>
         <FontAwesomeIcon icon={faWhatsapp} size='lg' />
         <spam className="icones"> </spam>
               (00) 00000-0000
               <spam></spam>
         <FontAwesomeIcon icon={faPhone} size='lg' />
         <spam className="icones"> </spam>
               (00) 00000-0000
               <spam></spam>
         <FontAwesomeIcon icon={faFacebook} size='lg' />
         <spam className="icones"> </spam>
               <a href ="/"> Grupo X</a>
               <spam></spam>
         <FontAwesomeIcon icon={faInstagram} size='lg' />
                  <spam className="icones"> </spam>
                <a href ="/"> Grupo X</a>
  </Content>
        </Column>

</Footer>
    
    )
    export default Fotter;