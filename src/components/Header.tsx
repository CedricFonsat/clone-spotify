import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLOR } from "../constants/color";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { SIZE } from "../constants/size";
import Icon from "../utils/Icon";

type Props = {};

const Header = (props: Props) => {
  return (
    <View
      style={{
        width: "100%",
        height: 120,
        justifyContent: "flex-end",
        paddingBottom: 10,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 35,
          flexDirection: "row",
          gap: 10,
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 35,
            height: 35,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            backgroundColor: COLOR.greenLight,
          }}
        >
          <Text style={{ fontSize: 22}}>C</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            backgroundColor: COLOR.textGreen,
            paddingVertical: 3,
              paddingHorizontal: 15,
          }}
        >
          <Text
          >
            Tout
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            backgroundColor: COLOR.gray,
          }}
        >
          <Text
            style={{
              paddingVertical: 3,
              paddingHorizontal: 15,
              color: COLOR.textColor,
            }}
          >
            Musique
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 100,
            backgroundColor: COLOR.gray,
          }}
        >
          <Text
            style={{
              paddingVertical: 3,
              paddingHorizontal: 15,
              color: COLOR.textColor,
            }}
          >
            Podcasts
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

type SearchProps = {
  contentOffsetY: any;
};

export const HeaderSearch: React.FC<SearchProps> = ({ contentOffsetY }) => {
  const animatedHeight = useAnimatedStyle(() => {
    return {
      height: interpolate(
        contentOffsetY.value,
        [0, 40],
        [100, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <>
      <View
        style={{
          height: 50,
          width: SIZE.width,
          backgroundColor: COLOR.bgColor,
          zIndex: 1,
        }}
      />
      <Animated.View
        style={[
          animatedHeight,
          {
            width: "100%",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingBottom: 10,
            flexDirection: "row",
            paddingHorizontal: 20,
          },
        ]}
      >
        <View
          style={{
            height: 35,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              backgroundColor: COLOR.greenLight,
            }}
          >
             <Text style={{ fontSize: 22}}>C</Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 24,
              color: COLOR.textColor,
              fontWeight: "bold",
            }}
          >
            Rechercher
          </Text>
        </View>

        <View
          style={{
            width: 25,
            height: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Icon size={25} name="camera" />
        </View>
      </Animated.View>
    </>
  );
};

export const HeaderLibrary = () => {
  return (
    <>
      <View
        style={{
          height: 50,
          width: SIZE.width,
          backgroundColor: COLOR.bgColor,
          zIndex: 1,
        }}
      />
      <Animated.View
        style={{
          width: "100%",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingBottom: 10,
          flexDirection: "row",
          paddingHorizontal: 20,
        }}
      >
        <View
          style={{
            height: 35,
            flexDirection: "row",
            gap: 10,
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 35,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100,
              backgroundColor: COLOR.greenLight,
            }}
          >
             <Text style={{ fontSize: 22}}>C</Text>
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 24,
              color: COLOR.textColor,
              fontWeight: "bold",
            }}
          >
            Bibliothèque
          </Text>
        </View>

        <View
          style={{
            width: 25,
            height: 25,
            justifyContent: "flex-end",
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
          }}
        >
          <Icon size={25} name="search" />
          <Icon size={25} name="add" />
        </View>
      </Animated.View>
    </>
  );
};

export const HeaderPlayer = () => {
  return (
    <View
      style={{
        height: 60,
        width: SIZE.width,
        flexDirection: "row",
        alignItems: "flex-end",
      }}
    >
      <View
        style={{
          height: 35,
          flexDirection: "row",
          alignItems: "center",
          width: SIZE.width,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Icon size={30} name="down" />
        <Text
          style={{
            fontSize: 11,
            color: COLOR.textColor,
            fontWeight: "bold",
          }}
        >
          Titres likés
        </Text>
        <Icon size={30} name="options" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
