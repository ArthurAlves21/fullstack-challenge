import React from 'react';

import { Container, Icon, Text } from './styles';
import Link from 'next/link';

function MenuButtonHome(props) {

  console.log(props);

  return (
    <Link href={props.link}><Container>
      <Icon selected={props.IsSelected}>{props.icon}</Icon>
      <Text selected={props.IsSelected}>{props.text}</Text>  
    </Container></Link> 
  );
}

export default MenuButtonHome; 