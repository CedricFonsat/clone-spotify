import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { data } from '../data/music'
import Icon from '../utils/Icon'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const AbsolutePlayer = (props: Props) => {

 const navigation: any = useNavigation();

  return (
    <TouchableOpacity
    onPress={() => {
      navigation.navigate('Player');
    }}
    style={{
      ...StyleSheet.absoluteFillObject,
      width: SIZE.width,
      height: 80,
      zIndex: 1,
      top: SIZE.height - 142,
      alignItems: 'center'
    }}
    >
    <View style={{
        height: 60,
        width: SIZE.width - 20,
        backgroundColor: '#341814',
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 4,
        paddingHorizontal: 10,
        flexDirection: 'row'
    }}>
      
      <View style={{
        flexDirection: 'row',
        alignItems: 'center'
      }}>
           <View style={{
            width: 40,
            height: 40,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 10
           }}>
             <Image
              style={{ width: "100%", height: "100%" }}
              resizeMode='cover'
              source={require('../../assets/image/lesram.png')}
             />
           </View>
           <View>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Patek chic</Text>
            <Text style={{ color: 'gray'}}>Lesram</Text>
           </View>
      </View>

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20
      }}>
        <Icon size={30} name='device' />
        <Icon size={30} name='play'  /> 
      </View>

      <View style={{
         width: SIZE.width - 20,
         height: 3,
         backgroundColor: '#5b4541',
         position: 'absolute',
         zIndex: 99,
         bottom: -3
      }} >
        <View style={{
            width: 100,
            height: 3,
            backgroundColor: 'white',
        }} />

      </View>





    </View>
    </TouchableOpacity>
  )
}

export default AbsolutePlayer

const styles = StyleSheet.create({})