import React, {useContext} from 'react';

import { Container, Description} from './styles';
import { BookContext } from '../../../../Context/BookContext'


function TextBookDescription(props) {
  const {description} = useContext(BookContext)
  return ( 
    <>
    <Container>
        <Description dangerouslySetInnerHTML={{__html:description}} />
    </Container>
    </>
  );
}

export default TextBookDescription;