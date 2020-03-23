import React, { useState, useEffect } from 'react';

import { parseISO, format } from 'date-fns'
import pt from 'date-fns/locale/pt'
import api from '../../services/api'



import { Container } from './styles';

import Card from '../../components/Card';
import Select from '../../components/Select';


export default function HomeScreen() {
  const [getConfirmed, setConfirmed] = useState({})
  const [getRecovered, setRecovered] = useState({})
  const [getDeaths, setDeaths] = useState({})
  const [getlastUpdate, setLastUpdate] = useState('');
  const [getCountries, setContries] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    (async () => {
      const response = await api.get('/');
      const responseCountry = await api.get('countries');

      const { countries } = responseCountry.data;
      const { confirmed, recovered, deaths, lastUpdate } = response.data

      let filterCountries = []

      for (var property in countries) {
        filterCountries = [...filterCountries, { label: property, value: countries[property] }]

      }

      setContries(filterCountries)
      setConfirmed(confirmed)
      setRecovered(recovered)
      setDeaths(deaths)
      const formattedDate = format(parseISO(lastUpdate), "dd 'de' MMMM', às ' HH:mm'h'", { locale: pt });
      setLastUpdate(formattedDate);
      setLoad(false)
    })()
  }, [])

  const handleStatusCountry = async (country) => {
    setLoad(true)
    try {
   
      const response = await api.get(country === null ? '/' : `countries/${country}`);

      const { confirmed, recovered, deaths } = response.data;

      setConfirmed(confirmed)
      setRecovered(recovered)
      setDeaths(deaths)

    } catch (error) {
      setConfirmed({
        value: 0,
      }
      )
      setRecovered({
        value: 0,
      })
      setDeaths({
        value: 0,
      }
      ,
      )
    }



    setLoad(false)
  }

  return (
    <Container>
      <Card title='Confirmados'
        lastUpdate={getlastUpdate}
        value={getConfirmed.value}
        load={load}
        color='#d63031'
      />
      <Card title='Recuperados'
        lastUpdate={getlastUpdate}
        value={getRecovered.value}
        valueTotal={getConfirmed.value}
        load={load}
        color='#27ae60'
      />
      <Card title='Óbitos'
        lastUpdate={getlastUpdate}
        value={getDeaths.value}
        valueTotal={getConfirmed.value}
        load={load}
        color='#2d3436'
      />

      <Select
        items={getCountries}
        onValueChange={(value) => {handleStatusCountry(value)
        console.log(value)
        }}
        placeholder="Global"
      />

    </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};
