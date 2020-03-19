import React from 'react';
import { View, StyleSheet } from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { Container, ChildContainer, Title, LastUpdate, Value } from './styles';

export default function Card({ title, lastUpdate, value, load, color }) {
  return (
    <Container style={style.shadow} color={color}>
      {load ? (<ShimmerPlaceHolder autoRun={true} height={40} style={{marginLeft:10, marginTop:10}}/>) : (
        <Title>
          {title}
        </Title>)}
      <ChildContainer>
        {load ? (<ShimmerPlaceHolder autoRun={true} height={60} width={50} style={{marginBottom:15}}/>) : (<Value>
          {value}
        </Value>)}

        {load ? (<ShimmerPlaceHolder autoRun={true} />) : (<LastUpdate>
          {lastUpdate}
        </LastUpdate>)}
      </ChildContainer>
    </Container>
  );
}

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.25, shadowRadius: 3.84,
    elevation: 5
  }
})
