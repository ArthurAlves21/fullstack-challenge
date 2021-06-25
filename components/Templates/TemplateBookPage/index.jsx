import React, {useEffect} from 'react';

import BookPageHero from '../../Organisms/BookPageHero';
import BookPageTexts from '../../Organisms/BookPageTexts';
import MenuBook from '../../Organisms/MenuBook';
import { Container } from './styles';

function TemplateBookPage() {
  return (
    <>
    <Container>
      <BookPageHero />
      <BookPageTexts /> 
      <MenuBook />
    </Container>
    </>
  ); 
}

export default TemplateBookPage; 