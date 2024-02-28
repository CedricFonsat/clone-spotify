import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../constants/color'
import { useNavigation } from '@react-navigation/native'
import { HeaderPlayer } from '../components/Header'
import { SIZE } from '../constants/size'
import Icon from '../utils/Icon'

type Props = {}

const PlayerScreen = (props: Props) => {
    const navigation: any =  useNavigation();

  return (
    <View style={styles.container}>
      <HeaderPlayer/>

      <View style={{
        width: SIZE.width,
        alignItems: 'center',
        paddingHorizontal: 20,
      }}>
        
        <TouchableOpacity
        onPress={() => {
            navigation.goBack();
        }}
        style={{
            width: SIZE.width - 50,
            height: SIZE.width - 50,
            backgroundColor: COLOR.gray,
            borderRadius: 10,
            overflow: 'hidden',
            marginVertical: 40
        }}>
            <Image style={{ width: "100%", height: "100%"}}
            resizeMode='cover'
            source={require('../../assets/image/lesram.png')}
            />
        </TouchableOpacity>

        <View style={{
            flexDirection: 'row',
            width: SIZE.width - 50,
            justifyContent:'space-between',
            alignItems: 'center',
            marginVertical: 10,
        }}>
            <View>
                <Text style={{ fontWeight: 'bold', color: COLOR.textColor, fontSize: 20 }}>Patek chic</Text>
                <Text style={{ color: COLOR.greyLight}}>Lesram</Text>
            </View>
            <Icon size={25} name='add-circle'/>
        </View>

       <View>
       <View style={{
             width: SIZE.width - 50,
             height: 5,
             backgroundColor: COLOR.greyLight,
             marginBottom: 5,
             borderRadius: 20,
             overflow: 'hidden',
             position: 'relative',
        }}>
            <View  style={{
                height: "100%",
                width: "30%",
                backgroundColor: 'white'
            }}/>

            

        </View>
        <View style={{
            width: 15,
            height: 15,
            backgroundColor: 'white',
            borderRadius: 20,
            position: 'absolute',
            bottom: 0,
            left: 100
        }}/>
       </View>

       <View style={{
        width: SIZE.width - 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10
       }}>
        <Text style={styles.textSlider}>1:14</Text>
        <Text style={styles.textSlider}>-2:00</Text>
       </View>


       <View style={{
        width: SIZE.width - 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
       }}>
        <Icon size={25} name='shuffle' />
        <Icon size={25} name='previous' />

        <Icon size={55} name='pause' />

        <Icon size={25} name='next' />
        <Icon size={25} name='repeat' />

       </View>

       <View style={{
        width: SIZE.width - 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20
       }}>
           <View style={{
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
            height: 40,
           }}>
           <Icon size={20} name='share-device' color={COLOR.textGreen} />
           <Text style={{
            color: COLOR.textGreen,
            fontWeight: 'bold',
            fontSize: 12
           }}>Macbook Air de Cedric</Text>
           </View>

           <View style={{
            flexDirection: 'row',
            gap: 20
           }}>
           <Icon size={20} name='share' />
           <Icon size={20} name='queue' />
           </View>
       </View>

       <View style={{
        width: SIZE.width - 50,
        height: SIZE.width - 50,
        backgroundColor: COLOR.gray,
        padding: 20,
        borderRadius: 20,
        overflow: 'hidden',
        marginVertical: 20
       }}>
        <Text style={{
            fontWeight: 'bold',
            color: COLOR.textColor,
        }}>Crédits</Text>
       </View>

      </View>
    </View>
  )
}

export default PlayerScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#341814',
    },
    textSlider:{
        color: COLOR.textColor,
        fontSize: 12
    }
})