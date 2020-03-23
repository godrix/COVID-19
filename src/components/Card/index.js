import React from 'react';
import { View, StyleSheet } from 'react-native';

import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'
import { Container, ChildContainer, Title, LastUpdate, Value, Percent } from './styles';

import numeral from 'numeral';

export default function Card({ title, lastUpdate, value, valueTotal, load, color }) {
  const percent = (value/valueTotal*100).toFixed(1)
  return (
    <Container style={style.shadow} color={color}>
      {load ? (<ShimmerPlaceHolder autoRun={true} height={40} style={{marginLeft:10, marginTop:10}}/>) : (
        <Title>
          {title}
        </Title>)}
      <ChildContainer>
        {load ? (<ShimmerPlaceHolder autoRun={true} height={60} width={50} style={{marginBottom:15}}/>) : (
        <Value>
          {numeral(value).format('0,0')}
          {valueTotal?<Percent>({percent}%)</Percent>:''}
        
        </Value>)
        }

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

