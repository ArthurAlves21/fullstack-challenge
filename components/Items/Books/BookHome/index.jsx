import React from 'react';

import { Container, Image } from './styles';

function BookHome(props) {
  return (
    <>
      <Image background={props.img} alt={props.title}/>
    </>
  );
}

export default BookHome;