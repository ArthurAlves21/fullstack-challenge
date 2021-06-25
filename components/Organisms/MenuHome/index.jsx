import React, {useState, useEffect} from 'react';
import MenuButtonHome from '../../Items/Menu/MenuButtonHome';
import {useRouter} from 'next/router'
import { Container, Home, Man, PlusSign  } from './styles';

function MenuHome() {
const [selected, setSelected] = useState({home: true, book: false, profile: false})


  const home = <Home />;
  const man = <Man />;
  const plusSign = <PlusSign />;


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
      <MenuButtonHome icon={home} text={'Home'} link={'/'} IsSelected={selected.home}/>
      <MenuButtonHome icon={plusSign} text={'Add Boo'} link={'/create-book'} IsSelected={selected.book}/>
      <MenuButtonHome icon={man} text={'Profile'} link={'/profile'} IsSelected={selected.profile}/>
    </Container>
    </>
  );
} 

export default MenuHome;