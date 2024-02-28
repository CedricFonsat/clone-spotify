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
import { data } from "../data/music";
import { SIZE } from "../constants/size";
import { COLOR } from "../constants/color";

type Props = {
  title: string;
};

const Album = ({ title }: Props) => {
  return (
    <View
      style={{
        width: SIZE.width,
        height: 240,
        marginTop: 40,
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingHorizontal: 20,
          color: COLOR.textColor,
          marginBottom: 15,
        }}
      >
        {title}
      </Text>
      <SafeAreaView>
        <ScrollView
          horizontal
          contentContainerStyle={{
            gap: 10,
            paddingHorizontal: 20,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => {
            if (index === 0) return;
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: SIZE.width / 2.5,
                  height: 200,
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: SIZE.width / 2.5,
                    backgroundColor: "cyan",
                  }}
                >
                  <Image
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    source={item.image}
                    resizeMode="cover"
                  />
                </View>

                <View>
                  <Text
                    style={{
                      color: COLOR.textColor,
                    }}
                  >
                    {item.title.length > 20
                      ? item.title.slice(0, 20) + "..."
                      : item.title}
                  </Text>
                  <Text
                    style={{
                      color: "gray",
                    }}
                  >
                    Album · {item.artist}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({});
