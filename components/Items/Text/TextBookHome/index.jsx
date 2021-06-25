import React from 'react';

import { AuthorName, Container, Title } from './styles';

function trimTitle (title){
  if(title.length > 14){
    return title.substring(0, 12)+'...';
  }else{
    return title;
  }
}
  function trimAuthor (author){
    if(author.length > 12){
      return author.substring(0, 9)+'...';
    }else{
      return author;
    }
 }

function TextBookHome(props) {


  return (
    <>
      <Container>
        <Title>{trimTitle(props.title)}</Title>
        <AuthorName>by {trimAuthor(props.author)}</AuthorName>
      </Container>
    </>
  );
}

export default TextBookHome;