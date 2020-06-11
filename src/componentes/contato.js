import React from 'react'
import {Field,Control,Input, Container,Button, Icon, Column,Textarea, Section } from 'rbx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'



const Contato = () => (
  <Section size="medium">
<Container className='Contato'>

<Column size={5} offset ={1}>
<Field>
  <Control iconLeft>
    <Input type="email" placeholder="E-mail"  required size={4}/>
    <Icon align="left">
      <FontAwesomeIcon icon={faEnvelope} />
    </Icon>
  </Control>
</Field>
<Field>
  <Control iconLeft>
    <Input  placeholder="Nome ou organização"  required/>
    <Icon align="left">
      <FontAwesomeIcon icon={faUser} />
    </Icon>
  </Control>
</Field>
</Column>

<Column size={10} offset ={1}>
<Field>
  <Control>
  <Textarea rows={5} placeholder="Conteudo" />

  </Control>
</Field>
</Column>

<Column size={5} offset ={1}>
<Button color="primary" outlined>Enviar</Button>
</Column>
</Container> 
</Section>

)
export default Contato;