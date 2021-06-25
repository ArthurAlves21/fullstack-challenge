import React, {useContext} from 'react';

import { Container } from './styles';
import { BookContext } from '../../../../Context/BookContext'
function BookMain() {
  const {thumbnail, title} = useContext(BookContext)
  return (
    <>
    <Container>
    <img src={thumbnail} alt={title} />
    </Container>
    </>
  );
}
 
export default BookMain;