import React from 'react';

import { Container, Icon, Text, InnerContent } from './styles';
import Link from 'next/link';

function MenuButtonBook(props) {
  return (
    <Link href={props.link}>
      <Container border={props.border}>
      <InnerContent>
      <Icon>{props.icon}</Icon>
      <Text>{props.text}</Text> 
      </InnerContent>
    </Container>
    </Link>
  );;
}

export default MenuButtonBook;