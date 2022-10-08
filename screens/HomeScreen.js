import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import SmsAndroid from 'react-native-sms-android'

const HomeScreen = () => {

  const send = () =>{
    console.log(SmsAndroid)
  }
  return( 
    <>
      <View>
        <Text>hola</Text>
        <TouchableOpacity onPress={()=>{send()}
        }>
          <Text>send message</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}

export default HomeScreen;