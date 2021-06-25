import React from 'react';

import { Container, Text, ImageContainer } from './styles';

function ImageLabel(props) {
  return (
    <>
      <Text>{props.title}</Text>
    </>
  );
}

export default ImageLabel;