import React from 'react';
import { Image } from 'react-native';
import img from './hands.png'
import { Container, Message, Loading } from './styles';

export default function AwaitFor() {
  return (
    <Container>
      <Image source={img} style={{height:100, width:100}}></Image>
      <Loading>Carregando...</Loading>
      <Message>Enquanto isso... lave bem as mãos</Message>
    </Container>
  );
}
