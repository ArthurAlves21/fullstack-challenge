import React, {useContext} from 'react';

import { Image } from './styles';
import {GetBookTexts} from '../../../../Context/GetBookTexts'


function BookHome() {
  const {thumbnail, title} = useContext(GetBookTexts)
  return (
    <>
      <Image background={thumbnail} alt={title}/>
    </>
  );
}

export default BookHome;