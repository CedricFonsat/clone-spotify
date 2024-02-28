import { Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SIZE } from '../constants/size'
import { COLOR } from '../constants/color'

type Props = {
    source: ImageSourcePropType;
    title: string;
}

const Favoris: React.FC<Props> = ({ source, title }) => {
  return (
    <TouchableOpacity
    style={{
        width: SIZE.width / 2.3,
        height: 60,
        backgroundColor: COLOR.gray,
        borderRadius: 6,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center'
    }}
    >
     <Image
     style={{
        height: "100%",
        width: 60,
        backgroundColor: 'purple'
     }}
     resizeMode='cover'
     source={source}
     />
      <Text style={{
        marginLeft: 10,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        color: COLOR.textColor,
        fontSize: 11,
        width: "50%"
      }}>
        {title.length > 20 ? title.slice(0, 20) + '...' : title}
      </Text>
    </TouchableOpacity>
  )
}

export default Favoris

const styles = StyleSheet.create({})