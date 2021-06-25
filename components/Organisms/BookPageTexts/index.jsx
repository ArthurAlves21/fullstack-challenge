import React from 'react';

import TextBookTitle from '../../Items/Text/TextBookTitle';
import TextBookDescription from '../../Items/Text/TextBookDescription';

import {Container} from './styles';


function BookPageTexts(props) {

  return (
    <>
      <Container>
        <TextBookTitle title={props.title} author={props.author} subtitle={props.subtitle}/>
        <TextBookDescription description={props.description} /> 
      </Container> 
    </>
  );
}

export default BookPageTexts;