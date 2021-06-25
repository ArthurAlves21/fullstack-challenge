import React from 'react';

import TextBookTitle from '../../Items/Text/TextBookTitle';
import TextBookDescription from '../../Items/Text/TextBookDescription';

import {Container} from './styles';


function BookPageTexts() {

  return (
    <>
      <Container>
        <TextBookTitle/>
        <TextBookDescription /> 
      </Container> 
    </>
  );
}

export default BookPageTexts;