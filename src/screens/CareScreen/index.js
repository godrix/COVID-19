import React from 'react';
import {  ScrollView } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Tips from '../../components/Tips'

const slides = [
  {
    key: 'somasethun',
    title: 'O que são Coronavírus?',
    text: 'Coronavírus é uma família de vírus que pode causar danos em animais e em humanos.\nEm pessoas, pode resultar em infecções respiratórias que vão desde um resfriado até síndromes respiratórias agudas severas. O novo coronavírus (SARS-Cov-2) causa a doença denominada Covid-19, que teve início na China, em dezembro de 2019.',
    image: require('./assets/coronavirus.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'sometshun-dos',
    title: 'Quais são os sintomas?',
    text: 'Os sintomas do Covid-19 envolvem febre, cansaço e tosse seca. Parte dos pacientes pode apresentar dores, congestão nasal, coriza, tosse e diarreia.\nAlguns pacientes podem ser assintomáticos, ou seja, estarem infectados pelo vírus, mas não apresentarem sintomas. O Ministério da Saúde estima que os pacientes mais jovens são os mais passíveis de não apresentar qualquer sinal da doença.',
    image: require('./assets/fever.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somewthun1',
    title: 'Quais são os maiores problemas e os públicos mais vulneráveis?',
    text: 'A OMS calcula que 1 em cada 6 pacientes pode ter um agravamento do quadro, com dificuldades respiratórias sérias. No início de março, a taxa de letalidade era de 3,5%. Mas o Ministério da Saúde suspeita que pode ser menor, em razão de haver subnotificação dos casos em alguns países. Os públicos mais vulneráveis são idosos e pessoas com doenças crônicas (diabetes, pressão alta e doenças cardiovasculares).',
    image: require('./assets/aid.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'somethsdaun31',
    title: 'Como ocorre a transmissão?',
    text: 'O contágio ocorre a partir de pessoas infectadas. A doença pode se espalhar desde que alguém esteja a menos de 2 metros de distância de uma pessoa com a doença. A transmissão pode ocorrer por gotículas de saliva, espirro, tosse ou catarro, que podem ser repassados por toque ou aperto de mão, objetos ou superfícies contaminadas pelo infectado.',
    image: require('./assets/hands2.png'),
    backgroundColor: '#22bcb5',
  }
  ,
  {
    key: 'someadasthun2',
    title: 'O novo coronavírus pode ser transmitido pelo ar?',
    text: 'O novo coronavírus não é transmitido pelo ar a menos que um indivíduo chegue próximo a um paciente infectado a ponto de as formas de contaminação serem possíveis.',
    image: require('./assets/sick.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'sometasdashwcsceun3',
    title: 'Animais de estimação podem transmitir o novo coronavírus?',
    text: 'Não. Não há evidência de que animais de estimação como gatos e cachorros tenham sido infectados ou possam espalhar o vírus que causa a Covid-19.',
    image: require('./assets/animal2.png'),
    backgroundColor: '#22bcb5',
  }
  ,
  {
    key: 'someewcadasethun3',
    title: 'Quais são as medidas de prevenção ao Covid-19?',
    text: '- lavar as mãos frequentemente com água e sabonete por pelo menos 20 segundos, ou usar desinfetante para as mãos à base de álcool quando a primeira opção não for possível;\n- evitar tocar nos olhos, nariz e boca com as mãos não lavadas;\n- evitar contato próximo com pessoas doentes;\n- ficar em casa quando estiver doente;\n- usar um lenço de papel para cobrir boca e nariz ao tossir ou espirrar, e descartá-lo no lixo após o uso;\n- não compartilhar copos, talheres e objetos de uso pessoal;\n- limpar e desinfetar objetos e superfícies tocados com frequência.\n- manter ambientes bem ventilados e higienizar as mãos após tossir ou espirrar.',
    image: require('./assets/hands.png'),
    backgroundColor: '#22bcb5',
  },
  {
    key: 'sometasd74csceun3',
    title: 'Preciso usar máscara para me proteger?',
    text: 'A máscara não tem efeito algum para pessoas sem o vírus. Ela deve ser utilizada por quem apresenta sintomas da doença, pois previne que alguém infectado espalhe o vírus e venha a contaminar outras pessoas. O uso também é recomendado para pessoas que tenham contato com indivíduos com suspeita ou confirmação do novo coronavírus. Máscaras também devem ser usadas por profissionais de saúde que atuem em locais com pacientes com suspeitas ou sintomas. Após o uso, a orientação é descartar a máscara em local adequado e lavar as mãos.',
    image: require('./assets/mask.png'),
    backgroundColor: '#22bcb5',
  }
];
export default function CareScreen() {


  const _renderItem = ({ item }) => {
    return (
      <Tips img={item.image} title={item.title} text={item.text}></Tips>
    );
  }

  return (
    <ScrollView style={{marginTop:100}}>
      <AppIntroSlider renderItem={_renderItem} slides={slides} onDone={() => {
        console.log('fim')
      }} />
    </ScrollView>
  );
}

