import React from 'react';
import BookMain from '../../Items/Books/BookMain';
import {Container, Background} from './styles.js'
import OvalDarkBlue from '../../Items/Images/OvalDarkBlue/index'
import OvalDashed from '../../Items/Images/OvalDashed/index'
import OvalEmpty from '../../Items/Images/OvalEmpty/index'
import OvalPink from '../../Items/Images/OvalPink/index'

function BookPageHero(props) {

  return (
    <>
    <Container>
      <Background>
        <img className="ball" src="/images/Oval.png"/>
        <OvalDarkBlue />
        <OvalDashed />
        <OvalEmpty />
        <OvalPink />
       <BookMain image={props.thumbnail} alt={props.title}/>
      </Background>
    </Container>
    </> 
  );
}

export default BookPageHero;