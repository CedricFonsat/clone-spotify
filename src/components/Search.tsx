import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SIZE } from "../constants/size";
import { Path, Svg } from "react-native-svg";
import { COLOR } from "../constants/color";

type Props = {};

const Search = (props: Props) => {
  return (
    <View style={{
      backgroundColor: COLOR.bgColor,
      paddingVertical: 10
    }}>
      <TouchableOpacity
        style={{
          width: SIZE.width - 40,
          height: 50,
          borderRadius: 6,
          backgroundColor: "white",
          paddingHorizontal: 20,
          gap: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.946 16.397a9.458 9.458 0 001.993-5.822 9.5 9.5 0 10-9.5 9.5 9.46 9.46 0 006.122-2.235l4.793 4.793a1 1 0 101.414-1.415l-4.822-4.82zm-7.507 1.778a7.6 7.6 0 110-15.201 7.6 7.6 0 010 15.2z"
            fill="#000"
            stroke="#000"
            strokeWidth={0.5}
          />
        </Svg>
        <Text style={{ fontWeight: "600", color: "#000", fontSize: 16 }}>
          Que souhaitez-vous écouter ?
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({});
