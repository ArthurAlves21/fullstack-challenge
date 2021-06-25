import React from 'react';

import { Container, Title, Subtitle, Author } from './styles';

function TextBookTitle(props) {
  let dots = '';
  if(props.subtitle){
    dots = ': '
  }
  return (
    <>
    <Container>
      <Title>{props.title + dots } <Subtitle>{props.subtitle}</Subtitle></Title>
      <Author>{props.author}</Author>
    </Container>
    </>
  );
}

export default TextBookTitle; 