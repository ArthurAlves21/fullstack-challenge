import React, {useEffect} from 'react';

import BookPageHero from '../../Organisms/BookPageHero';
import BookPageTexts from '../../Organisms/BookPageTexts';
import MenuBook from '../../Organisms/MenuBook';

import { Container } from './styles';

function TemplateBookPage(props) {
  return (
    <>
    <Container>
      <BookPageHero thumbnail={props.thumbnail} title={props.title} />
      <BookPageTexts title={props.title} description={props.description} author={props.author} subtitle={props.subtitle}/> 
      <MenuBook previewLink={props.previewLink} canonicalVolume={props.canonicalVolume} />
    </Container>
    </>
  ); 
}

export default TemplateBookPage; 