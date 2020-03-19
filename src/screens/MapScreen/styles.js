import styled from 'styled-components/native';
import MapView from 'react-native-maps';
export const Map = styled(MapView)`
  flex:1;
`;

export const Box = styled.View`
width:120px;
padding: 5px;

text-align:center;
justify-content:center;
`;




export const Country = styled.Text`
font-weight:bold;
font-size:21px;
`;

export const ProvinceState = styled.Text`
font-weight:bold;
font-size:16px;
color:#555;
`;



export const Confirmed = styled.Text`
background:red;
color:#fff;
font-weight:bold;
font-size:18px;
width:80px;
border-radius:5px;

text-align:center;
`;
export const Recovered = styled.Text`
background:green;
color:#fff;
font-weight:bold;
font-size:18px;
width:80px;
border-radius:5px;
text-align:center;
`;
export const Deaths = styled.Text`
background:black;
color:#fff;
font-weight:bold;
font-size:18px;
width:80px;
border-radius:5px;
text-align:center;

`;
export const LastUpdate = styled.Text`
font-size:10px;
`;