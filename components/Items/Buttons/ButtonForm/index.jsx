import React from 'react';

import { Container, ButtonSubmit } from './styles';

function ButtonForm(props) {
  return (
    <>
    <Container>
    <ButtonSubmit input type="submit" value={props.button}/>
    </Container>
    </>
  );
}

export default ButtonForm;