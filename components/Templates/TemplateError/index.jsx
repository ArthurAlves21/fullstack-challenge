import React from 'react';
import MenuHome from '../../Organisms/MenuHome';
import Link from 'next/link';

import { Container, Button } from './styles';

function TemplateError() {
  return (
    <>
    <Container>
      <h1>Sorry, we did not found your Book =(</h1>
      <Link href="/"><Button>← Go Back to Home</Button></Link>
    </Container>
    <MenuHome />
    </>
  );
}

export default TemplateError;