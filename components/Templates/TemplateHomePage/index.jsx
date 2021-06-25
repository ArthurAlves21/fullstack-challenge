import React, {useState, useEffect, useContext} from 'react';
import HomeBookTexts from '../../Organisms/HomeBookTexts';
import MenuHome from '../../Organisms/MenuHome';
import InfiniteScroll from 'react-infinite-scroller';
import { Container, Content } from './styles';
import { SearchContext } from '../../../Context/SearchContext'
import { GetBookTexts } from '../../../Context/GetBookTexts';

function TemplateHomePage() { 

  let [count1, setCount1] = useState(6)
  let [count2, setCount2] = useState(6)
  let [content, setContent] = useState(true)

  const {search, data, data1} = useContext(SearchContext)

  function loadFunc(){
  if(count1 < data.length){
    setCount1(count1+1)
  }
  if(count2 < data1.length){
    setCount2(count2+1)
  }
}

const filtered =  data1.filter(item => {
  let lowerTitle = item.volumeInfo.title.toLowerCase()
  if(search){
    return lowerTitle.includes(search.toLowerCase())
  }else{
    return lowerTitle == lowerTitle
  }
})
   
useEffect(() => {
  console.log(search)
  console.log(filtered)
}, [search])

return (
  <> 
    <Container>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadFunc}
        hasMore={content}
        loader={<div className="loader" key={0}></div>}
        >
    
    <Content>

    {filtered.slice(0,count2).map((item, i) => {
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
        <GetBookTexts.Provider value={{title, author, thumbnail, id}}>
        <HomeBookTexts/>
        </GetBookTexts.Provider>
        </>
      )
    })}
    {data.slice(0,count1).map((item, i) => {
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
        <GetBookTexts.Provider value={{title, author, thumbnail, id}}>
        <HomeBookTexts/>
        </GetBookTexts.Provider>
        
        </>
      )
    })}
    </Content>
  </InfiniteScroll>
  </Container> 
  <MenuHome />
  </>
  );
}

export default TemplateHomePage;