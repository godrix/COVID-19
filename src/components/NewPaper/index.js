import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Container, ContainerMain, Image, Row, IconContainer, OptionText, OptionTextContainer } from './styles';

export default function NewsPaper({ icon, label, onPress, img }) {
  
  return (
    <Container onPress={onPress}>
      <ContainerMain>
      <Image source={{uri: img }} />
      <Row>
        <IconContainer >
          <MaterialCommunityIcons name={icon} size={30} color="rgba(255,255,255,0.6)" />
        </IconContainer>
        <OptionTextContainer>
          <OptionText>{label}</OptionText>
        </OptionTextContainer>
      </Row>
      </ContainerMain>
    </Container>
  );
}