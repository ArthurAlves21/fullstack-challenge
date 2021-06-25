import React, {useContext} from 'react';
import BookHome from '../../Items/Books/BookHome';
import TextBookHome from '../../Items/Text/TextBookHome';
import { Container } from './styles';
import {GetBookTexts} from '../../../Context/GetBookTexts'

function HomeBookTexts() {
  const {id} = useContext(GetBookTexts)
  return (
    <>
    <Container>
    <a href={`/`+id}>
    <BookHome/>
    </a>
    <TextBookHome/>
    </Container> 
    </>
  ); 
} 

export default HomeBookTexts; 