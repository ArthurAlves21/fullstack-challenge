import React from 'react';

import { Hi, Name, Container } from './styles';

function TextGreetings(props) {
  return (
    <>
    <Container>
    <Hi>{props.greeting}</Hi>
    <Name> {props.name}</Name>
    </Container>
    </>
  );
}

export default TextGreetings;