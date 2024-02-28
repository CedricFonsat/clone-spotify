import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { data } from '../data/music'

type Props = {
  title : string;
}

const Listen = ({ title }: Props) => {
  return (
    <View style={{
        width: '100%',
       // height: 120,
       // backgroundColor: 'red',
        marginTop: 40
    }}>
      <Text
      style={{
        fontWeight: "bold",
        fontSize: 20,
        paddingHorizontal: 20,
        color: "white",
        marginBottom: 15
      }}
      >{title}</Text>

      <SafeAreaView>
        <ScrollView
        style={{
            paddingHorizontal: 20,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        >
            {data.map((item, index) => {
                return (
                    <View 
                    key={index}
                    style={{
                        width: SIZE.width / 3.5,
                        height: 140,
                       // backgroundColor: 'cyan',
                        justifyContent: 'space-between',
                        marginRight: 10
                     }}>
                        <TouchableOpacity style={{ 
                            width: "100%",
                            height: SIZE.width / 3.5,
                            backgroundColor: 'purple'
                        }}>
                            <Image
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            source={item.image}
                            resizeMode="cover"
                            />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'white'}}>
                        {item.title.length > 20 ? item.title.slice(0, 10) + '...' : item.title}
                        </Text>
                     </View>
                )
            })}
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Listen

const styles = StyleSheet.create({})