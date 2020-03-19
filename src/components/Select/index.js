import React from 'react';

import RNPickerSelect from 'react-native-picker-select';

import { Container } from './styles';

export default function Select({items, onValueChange, placeholder}) {
  const place = {
    label: placeholder,
    value: null,
    color: '#aaa',
  };
  return (
    <Container>
      <RNPickerSelect items={items} onValueChange={onValueChange} placeholder={place}></RNPickerSelect>
    </Container>
  );
}
