import React, {useContext} from 'react';

import { AuthorName, Container, Title } from './styles';
import {GetBookTexts} from '../../../../Context/GetBookTexts'
import trimTitle from '../../functions/trimTitle';
import trimAuthor from '../../functions/trimAuthor';


function TextBookHome() {
  const {author, title} = useContext(GetBookTexts)

  return (
    <>
      <Container>
        <Title>{trimTitle(title)}</Title>
        <AuthorName>by {trimAuthor(author)}</AuthorName>
      </Container>
    </>
  );
}

export default TextBookHome;