import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
import Card from '../Components/Card'

const DATA =[  //id titulo imagen numero de tel 
  {
    id: '1',
    titulo: 'Hamlin Hamlin & McGill',
    imagen: 'https://cdn.shopify.com/s/files/1/0262/2091/products/HHM-indigo_1024x1024.jpg?v=1652469404',
    telefono: '011 4866-2043',
  },

  {
    id: '2',
    titulo: 'Kim Wexler ',
    imagen: 'https://bolavip.com/__export/1659549953561/sites/bolavip/img/2022/08/03/better_call_saul_rhea_seehorn_crop1659549832917.jpg_1159711837.jpg',
    telefono: '011 3685-9665', 
  },
  {
    id: '3',
    titulo: 'Saul Goodman',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpDF3Q-FC2d0Vr0osLH0KZzx2_nR2Jn3UlFg&usqp=CAU',
    telefono: '011 4959-3721',
  },
  {
    id: '4',
    titulo: 'Chuck McGill',
    imagen: 'https://hips.hearstapps.com/esq.h-cdn.co/assets/17/25/480x480/square-1497977852-saul.jpg?resize=640:*',
    telefono: '011 4959-3721',
  },
  {
    id: '5',
    titulo: 'Huell Babinox',
    imagen: 'data:image/jpeg;base64,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',
    telefono: '011 4959-3721',
  },
];

const HomeScreen = () => {

  const renderItem = ({ item }) => (
    
    <View style={{height:150, marginVertical:5, marginHorizontal:5}}>
      <Card
      data={item}
        />

    </View>
    
  );

  const send = () =>{
    console.log(SmsAndroid)
  }
  return( 
    <>
      <View style={styles.container}>
        <Text>New mexico services</Text>
  
        <FlatList
        data={DATA}
        style={{width:'100%', height:300}}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
  },item:{
    flex:1,
    width:'100%',
    height:100
  }
});

export default HomeScreen;