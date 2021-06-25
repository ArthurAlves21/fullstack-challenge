import React, {useContext} from 'react';

import { Container, Title, Subtitle, Author } from './styles';
import { BookContext } from '../../../../Context/BookContext'

function TextBookTitle() {
  const {title, subtitle, author} = useContext(BookContext)

  let dots = '';
  if(subtitle){
    dots = ': '
  }
  return (
    <>
    <Container>
      <Title>{title + dots } <Subtitle>{subtitle}</Subtitle></Title>
      <Author>{author}</Author>
    </Container>
    </>
  );
}

export default TextBookTitle; 