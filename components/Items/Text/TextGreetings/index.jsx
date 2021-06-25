import React, {useContext} from 'react';
import { AuthContext } from '../../../../Context/AuthContext';

import { Hi, Name, Container } from './styles';

function TextGreetings(props) {
  const {user} = useContext(AuthContext)
  return (
    <>
    <Container>
    <Hi>{props.greetings}</Hi>
    <Name> {user}</Name>
    </Container>
    </>
  );
}

export default TextGreetings;