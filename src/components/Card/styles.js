import styled from 'styled-components/native';
import Colors  from '../../constants/Colors'

export const Container = styled.View.attrs({
  style:{
    shadowColor: "#000",
    shadowOffset: { width:0, height:2,},
    shadowOpacity: 0.25,shadowRadius:3.84,
    elevation:5,
  }
})`
  background: ${props => props.color};
  margin:10px;
  opacity:0.9;
  border-radius:5px;
`;

export const ChildContainer = styled.View`
flex-direction:column;
justify-content:space-between;
align-items:center;
padding:5px;
`;

export const Title = styled.Text`
font-size:40px;
padding:0;
margin-left:10px;
color: ${Colors.noticeText};
`;

export const LastUpdate = styled.Text`
font-family: 'space-mono';
padding:0;
margin:0;
color: ${Colors.noticeText};
`;

export const Value = styled.Text`

font-size:60px;
text-align:center;
font-weight:bold;
color: ${Colors.noticeText};
`;

