import React, {useEffect} from 'react';
import BookHome from '../../Items/Books/BookHome';
import TextBookHome from '../../Items/Text/TextBookHome';
import Link from 'next/link';

import { Container } from './styles';

function HomeBookTexts(props) {

  return (
    <>
    <Container>
    <a href={`/`+props.link}>
    <BookHome img={props.img} alt={props.title}/>
    </a>
    <TextBookHome title={props.title} author={props.author}/>
    </Container> 
    </>
  ); 
}

export default HomeBookTexts; 