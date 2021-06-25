import React, {useEffect, useState} from 'react';
import HomeBookTexts from '../../Organisms/HomeBookTexts';
import MenuHome from '../../Organisms/MenuHome';

import { Container, Content } from './styles';

function TemplateHomePage({data, data1, onClick}) { 

  console.log(data1);

  return (
  <> 
  
  <Container>
    <Content>
    {data1.map((item, i) => {
      let thumbnail = '/bookcover.jpg';
      let author = 'John Doe';
      let title = 'Original Book';
      let id = 'wJ7ijwEACAAJ';
      
      try{
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }catch(e){
        thumbnail = '/bookcover.jpg';
      }
      try{
        author = item.volumeInfo.authors[0];
      }catch(e){
        author = 'John Doe';
      }
      try{
        title = item.volumeInfo.title;
      }catch(e){
        title = 'Original Book';
      }
      try{
        id= item._id
      }catch(e){
        id = 'wJ7ijwEACAAJ';
      }
      
      return(
        <>
        <HomeBookTexts title={title} author={author} img={thumbnail} link={id}/>
        </>
      )
    })}
    {data.map((item, i) => {
      let thumbnail = '/bookcover.jpg'; 
      let author = 'John Doe';
      let title = 'Original Book';
      let id = 'wJ7ijwEACAAJ';
      
      try{
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }catch(e){
        thumbnail = '/bookcover.jpg';
      }
      try{
        author = item.volumeInfo.authors[0];
      }catch(e){
        author = 'John Doe';
      }
      try{
        title = item.volumeInfo.title;
      }catch(e){
        title = 'Original Book';
      }
      try{
        id= item.id
      }catch(e){
        id = 'wJ7ijwEACAAJ';
      }
      
      return(
        <>
        <HomeBookTexts title={title} author={author} img={thumbnail} link={id}/>
        </>
      )
    })}
    </Content>
  </Container> 
  <MenuHome />
  </>
  );
}

export default TemplateHomePage;