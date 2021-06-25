import React from 'react';

import { Description, Container } from './styles';

function TextDescription(props) {
  return (
    <>
    <Container>
    <Description>{props.description}</Description>
    </Container>
    </>
  );
}

export default TextDescription;