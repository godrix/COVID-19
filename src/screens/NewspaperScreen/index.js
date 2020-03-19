import * as React from 'react';
import { FlatList} from 'react-native';
import { Container } from './styles';
import * as WebBrowser from 'expo-web-browser';
//import { FlatList } from 'react-native-gesture-handler';
import AwaitFor from '../../components/AwaitFor';
import Newspaper from '../../components/NewPaper';
import api from '../../services/api'

export default function NewspaperScreen() {
  const [newsPaper, setNewsPaper] = React.useState([])
  React.useEffect(()=>{
    const handleNewspaper = async ()=>{
      const response = await api.get('http://newsapi.org/v2/everything?q=coronavirus%20no%20brasil&Language=pt&sortBy=publishedAt&apiKey=ffb7fcda1b2348bfba31aaf79a06854f');

      setNewsPaper(response.data.articles)
    }
    handleNewspaper()
  },[])
  return !newsPaper ? (<AwaitFor/>): (<Container><FlatList
    data={newsPaper}
    renderItem={({item}) => <Newspaper
    icon="newspaper"
    label={item.title}
    img={item.urlToImage}
    onPress={() => WebBrowser.openBrowserAsync(item.url)}
  />}
  keyExtractor={item => item.publishedAt}
  /></Container>)
}


