import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Header from "../components/Header";
import { SIZE } from "../constants/size";
import Favoris from "../components/Favoris";
import { data } from "../data/music";
import { COLOR } from "../constants/color";
import Album from "../components/Album";
import Listen from "../components/Listen";
import AbsolutePlayer from "../components/AbsolutePlayer";

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <AbsolutePlayer />

      <Header />
      <ScrollView
        contentContainerStyle={{
          width: SIZE.width,
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View
          style={{
            width: SIZE.width,
            paddingHorizontal: 20,
            gap: 10,
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {data.map((item, index) => {
            return (
              <Favoris key={index} source={item.image} title={item.title} />
            );
          })}
        </View>

        <Album title="Albums tendance pour vous" />

        <Album title="Réécoutez vos anciens favoris" />

        <Listen title="Écoutés récemment" />

        <Album title="Les plus grands hits actuels" />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.bgColor,
  },
});
