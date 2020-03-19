import React from 'react';
import { View } from 'react-native';

import { Container, Image, Title, Paragraph } from './styles';

export default function Tips({img, title, text}) {
  return (
    <Container>
      <Image source={img}></Image>
  <Title>{title}</Title>
  <Paragraph>{text}</Paragraph>
    </Container>
  );
}
