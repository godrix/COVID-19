import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components';

export const Container = styled(RectButton)`
  
  background:#fafafa;
  height:150px;

`;

export const ContainerMain = styled.View`
 margin-top:15px;
`;

export const Image = styled.Image`
  width:100%;
  height:100%;
`;


export const Row = styled.View`
  flex-direction:row;
  align-items:center;
  position:absolute;
  bottom:0;
  padding:5px;
  background:rgba(0,0,0,0.8);
  padding-top:5px;
  padding-bottom:5px;
  width:100%;
`;
export const IconContainer = styled.View`
margin-right:5px;
`;
export const OptionText = styled.Text`
font-size:14px;
color:rgba(255,255,255,0.8);
`;
export const OptionTextContainer = styled.View``;


