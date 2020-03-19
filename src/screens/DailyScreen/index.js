
import React,{useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import Colors from '../../constants/Colors'
import {  format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import api from '../../services/api'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Timeline from 'react-native-timeline-flatlist'

export default function DailyScreen()  {
  const [getReport, setreport] = useState([])
  useEffect(()=>{
    const handleDaily = async ()=>{
      const response = await api.get('daily')

     const report = response.data.map(ele=>{
        return   { time: ele.totalConfirmed, title: format(ele.reportDate, "dd 'de' MMMM', às ' HH:mm'h'", { locale: pt }), description: `São ${ele.mainlandChina} na China e ${ele.otherLocations} em outras localidades, de um total de ${ele.totalConfirmed} confirmados com Covid-19  e ${ele.totalRecovered || 0} se recuperaram` , circleColor: Colors.tintColor, lineColor: Colors.tintColor }
      })

      setreport(report)
    }
    handleDaily();
  },[])
  

  


    return (
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={getReport}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 }
          }}
          innerCircle={'dot'}
        />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    backgroundColor: 'white'
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
