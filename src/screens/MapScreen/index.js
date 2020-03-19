import React, { useState, useEffect } from 'react';
import {Image} from 'react-native'

import {Marker, Callout} from 'react-native-maps';
import { Map, Box, Country, ProvinceState, Confirmed, Recovered, Deaths, LastUpdate } from './styles';
import {  format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import AwaitFor from '../../components/AwaitFor'

import api from '../../services/api'

export default function MapScreen() {
  const [epidemic, setEpidemic] = useState(null)
  useEffect(() => {
    const loadInitPosition = async () => {
      
      const response = await api.get('/confirmed');
     
      setEpidemic(response.data)
    
    }

    loadInitPosition()
  }, [])
  if(!epidemic){
    return <AwaitFor/>;
  }
  return (
    <Map >
      {epidemic.map(corona=>(
        <Marker coordinate={{latitude:corona.lat,longitude:corona.long}} key={String(Math.random())}>
        
        <Callout>
          <Box>
      <Country>{corona.countryRegion}</Country>
      <ProvinceState>{corona.provinceState}</ProvinceState>
      <Confirmed>{corona.confirmed}</Confirmed>
      <Recovered>{corona.recovered}</Recovered>
      <Deaths>{corona.deaths}</Deaths>
      <LastUpdate>{format(corona.lastUpdate, "dd 'de' MMMM', às ' HH:mm'h'", { locale: pt })}</LastUpdate>
          </Box>
        </Callout>
      </Marker>
      ))}
    </Map>
  );
}
