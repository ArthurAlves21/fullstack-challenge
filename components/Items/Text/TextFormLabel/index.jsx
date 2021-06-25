import React from 'react';

import { Container, Text } from './styles';

function TextFormLabel(props) {
  return (
    <>
      <Text>{props.title}</Text>
    </>
  );
}

export default TextFormLabel;