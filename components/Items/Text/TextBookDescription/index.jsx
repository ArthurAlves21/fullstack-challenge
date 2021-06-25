import React from 'react';

import { Container, Description} from './styles';

function TextBookDescription(props) {

  return ( 
    <>
    <Container>
        <Description dangerouslySetInnerHTML={{__html:props.description}} />
    </Container>
    </>
  );
}

export default TextBookDescription;