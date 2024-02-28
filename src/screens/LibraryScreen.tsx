import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { HeaderLibrary } from "../components/Header";
import { COLOR } from "../constants/color";
import Icon from "../utils/Icon";
import { SIZE } from "../constants/size";
import AbsolutePlayer from "../components/AbsolutePlayer";

type Props = {};

const categories = [
  {
    id: 1,
    name: "Playlists"
  },
  {
    id: 2,
    name: "Podcasts"
  },
  {
    id: 3,
    name: "Albums"
  },
  {
    id: 4,
    name: "Artistes"
  },
  {
    id: 5,
    name: "Téléchargé"
  }
]

const LibraryCategory = () => {
  return (
    <SafeAreaView
      style={{
        height: 70,
      }}
    >
      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 20,
          height: 50,
          gap: 10,
          paddingVertical: 20,
        }}
      >
        {categories
          .map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  paddingHorizontal: 20,
                  height: 30,
                  borderRadius: 100,
                  backgroundColor: COLOR.gray,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: COLOR.textColor,
                    fontWeight: "600",
                  }}
                >
                 {item.name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </SafeAreaView>
  );
};

const LibraryScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <AbsolutePlayer/>
      <HeaderLibrary />
      <LibraryCategory />
      <SafeAreaView>
      <ScrollView contentContainerStyle={{
        gap: 15,
        marginTop: 20
      }}>

   
      <View
        style={{
          width: SIZE.width,
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: 'center',
            gap: 10,
          }}
        >
          <Icon size={25} name="order" />
          <Text
            style={{
              color: "white",
            }}
          >
            Récents
          </Text>
        </View>

        <Icon size={25} name="grid" />
      </View>

     
         {Array(11).fill('none').map((_, index) => {
          return (
            <View 
            key={index}
            style={{
              width: SIZE.width,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 15,
              paddingHorizontal: 20,
            }}>
              <Image
              style={{
                width: SIZE.width / 5,
                height: SIZE.width / 5,
                backgroundColor: COLOR.gray
              }}
              source={require('../../assets/image/lesram.png')}
              />
      
              <View style={{
                gap: 5
              }}>
                <Text style={{
                  color: COLOR.textColor,
                  fontWeight: "bold",
                  fontSize: 16,
                }}>Titres likés</Text>
                <View style={{
                  flexDirection: 'row',
                  gap: 5,
                  alignItems: 'center'
                }}>
                <Icon size={10} name="download" />
                <Text style={{ fontSize: 12, color: COLOR.greyLight}}>
                  Playlist - 360 titres
                  </Text>
                  </View>
              </View>
            </View>
          )
         })}
      </ScrollView>
     </SafeAreaView>

    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.bgColor,
  },
});
