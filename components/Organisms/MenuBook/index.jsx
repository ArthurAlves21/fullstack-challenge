import React, {useState, useEffect} from 'react';
import MenuButtonBook from '../../Items/Menu/MenuButtonBook';

import { Container, Phone, Book, Share  } from './styles';

function MenuHome(props) {
const [selected, setSelected] = useState({home: false, book: false, profile: false})


  const phone = <Phone />;
  const book = <Book />;
  const share = <Share />;


  useEffect(() => {
    switch(window.location.pathname){
      case "/":
        setSelected({home: true});
      break;
      case "/create-book":
        setSelected({book: true});
      break;
      case "/profile":
        setSelected({profile: true});
      break;    
    }
  }, [])


  return (
    <>
    <Container>
      <MenuButtonBook icon={book} text={'Read'} link={props.previewLink} IsSelected={selected.home}/>
      <MenuButtonBook icon={phone} text={'Listen'} link={props.canonicalVolume} IsSelected={selected.book} />
      <MenuButtonBook icon={share} text={'Share'} link={'/'} IsSelected={selected.profile}/>
    </Container>
    </>
  );
} 

export default MenuHome;