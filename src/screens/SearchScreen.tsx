import {
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { HeaderSearch } from "../components/Header";
import { Path, Svg } from "react-native-svg";
import { SIZE } from "../constants/size";
import Search from "../components/Search";
import { COLOR } from "../constants/color";
import { browse, explorer } from "../data/search";
import { LinearGradient } from "expo-linear-gradient";
import { useSharedValue } from "react-native-reanimated";
import AbsolutePlayer from "../components/AbsolutePlayer";

type Props = {};

const SearchScreen = (props: Props) => {
  const scrollY = useSharedValue(0);

  return (
    <View style={styles.container}>
      <AbsolutePlayer />
      <HeaderSearch contentOffsetY={scrollY} />
      <Search />
      <ScrollView
        scrollEventThrottle={16}
        onScroll={(event: NativeSyntheticEvent<NativeScrollEvent>) => {
          scrollY.value = event.nativeEvent.contentOffset.y;
        }}
        horizontal={false}
        bounces={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: COLOR.textColor,
            fontWeight: "bold",
            fontSize: 18,
            marginVertical: 20,
            width: "100%",
            paddingHorizontal: 10,
          }}
        >
          Explorez vos genres
        </Text>
        <View
          style={{
            gap: 10,
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          {explorer.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: SIZE.width / 3.5,
                  height: SIZE.width / 2.1,
                  borderRadius: 8,
                  backgroundColor: "purple",
                  overflow: "hidden",
                }}
              >
                <LinearGradient
                  colors={["transparent", "#000"]}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    zIndex: 999,
                    justifyContent: "flex-end",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      flexDirection: "row",
                      alignItems: "flex-end",
                      justifyContent: "space-between",
                      paddingHorizontal: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <Text
                      style={{
                        width: "60%",
                        fontWeight: "bold",
                        color: COLOR.textColor,
                      }}
                    >
                      {item.title}
                    </Text>
                    <Text
                      style={{
                        backgroundColor: COLOR.greyLight,
                        paddingVertical: 1,
                        paddingHorizontal: 4,
                        fontSize: 10,
                        borderRadius: 8,
                      }}
                    >
                      E
                    </Text>
                  </View>
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      zIndex: -2,
                    }}
                    source={{
                      uri: item.cover,
                    }}
                    resizeMode="cover"
                  />
                </LinearGradient>
              </TouchableOpacity>
            );
          })}
        </View>

        <Text
          style={{
            color: COLOR.textColor,
            fontWeight: "bold",
            fontSize: 18,
            marginVertical: 20,
            width: "100%",
            paddingHorizontal: 10,
          }}
        >
          Parcourir tout
        </Text>

        <View
          style={{
            gap: 10,
            flexDirection: "row",
            flexWrap: "wrap",
            marginBottom: 10,
            justifyContent: "center",
          }}
        >
          {browse.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: SIZE.width / 2.3,
                  height: SIZE.width / 3.5,
                  borderRadius: 8,
                  backgroundColor: "purple",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  overflow: "hidden",
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    color: COLOR.textColor,
                    fontSize: 16,
                    fontWeight: "bold",
                    width: "60%",
                  }}
                >
                  {item.name}
                </Text>

                <View
                  style={{
                    width: SIZE.width / 5,
                    height: SIZE.width / 5,
                    position: "absolute",
                    bottom: -5,
                    right: -10,
                    transform: [{ rotate: "25deg" }],
                    borderRadius: 4,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    resizeMode="cover"
                    source={require("../../assets/image/oboy.png")}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: COLOR.bgColor,
  },
});
