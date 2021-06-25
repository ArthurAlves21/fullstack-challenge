import React from 'react';

import { Container, Icon, Text, InnerContent } from './styles';
import Link from 'next/link';

function MenuButtonBook(props) {
  return (
    <Link href={props.link}><Container>
      <InnerContent>
      <Icon id="icon">{props.icon}</Icon>
      <Text id="text">{props.text}</Text> 
      </InnerContent>
    </Container></Link>
  );;
}

export default MenuButtonBook;