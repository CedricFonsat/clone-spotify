import {
  createBottomTabNavigator,
  BottomTabBar,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SearchScreen from "../screens/SearchScreen";
import LibraryScreen from "../screens/LibraryScreen";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { TabNavigationState } from "@react-navigation/native";
import Icon from "../utils/Icon";

const Tab = createBottomTabNavigator();

const RootStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: { position: "absolute", borderTopWidth: 0 },
        tabBarBackground: () => (
          <LinearGradient
            colors={["rgba(0,0,0, 0.9)", "rgba(0,0,0, 0.9)"]}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "Accueil",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} name="home" color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Recherche",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} name="search" color={color} />
          ),
        }}
        name="Search"
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Bibliotheque",
          tabBarActiveTintColor: "white",
          tabBarIcon: ({ color, size }) => (
            <Icon size={size} name="playlist" color={color} />
          ),
        }}
        name="Library"
        component={LibraryScreen}
      />
    </Tab.Navigator>
  );
};

export default RootStack;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "transparent",
  },
});
