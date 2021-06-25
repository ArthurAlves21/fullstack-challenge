import React from 'react';

import { Container } from './styles';

function BookMain(props) {
  return (
    <>
    <Container>
    <img src={props.image} alt={props.title} />
    </Container>
    </>
  );
}
 
export default BookMain;