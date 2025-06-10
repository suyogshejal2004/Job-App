import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";

import JobsScreen from "../screens/JobsScreen";
import JobDetailsScreen from "../screens/JobDetailsScreen";
import BookmarksScreen from "../screens/BookmarksScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const commonStackOptions = {
  headerStyle: { backgroundColor: "#FFFFFF", elevation: 0, shadowOpacity: 0 },
  headerTintColor: "#141D2F",
  headerTitleStyle: { fontWeight: "bold", fontSize: 20 },
  headerBackTitleVisible: false,
};

const JobsStack = () => (
  <Stack.Navigator screenOptions={commonStackOptions}>
    <Stack.Screen
      name="JobsList"
      component={JobsScreen}
      options={{ title: "Find Your Next Job" }}
    />
    <Stack.Screen
      name="JobDetails"
      component={JobDetailsScreen}
      options={{ title: "", headerTransparent: false }}
    />
  </Stack.Navigator>
);

const BookmarksStack = () => (
  <Stack.Navigator screenOptions={commonStackOptions}>
    <Stack.Screen
      name="BookmarksList"
      component={BookmarksScreen}
      options={{ title: "Saved Jobs" }}
    />
    <Stack.Screen
      name="JobDetails"
      component={JobDetailsScreen}
      options={{ title: "", headerTransparent: true }}
    />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size, focused }) => {
        const iconName = route.name === "Jobs" ? "work" : "bookmark";
        const iconSize = focused ? size + 4 : size;
        return <MaterialIcons name={iconName} size={iconSize} color={color} />;
      },
      tabBarActiveTintColor: "#4A90E2",
      tabBarInactiveTintColor: "#AAB8C2",
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "#FFFFFF",
        borderTopWidth: 1,
        borderTopColor: "#F0F0F0",
        height: 65,
        paddingBottom: 5,
        paddingTop: 5,
      },
      tabBarLabelStyle: {
        fontWeight: "700",
        fontSize: 12,
      },
    })}
  >
    <Tab.Screen name="Jobs" component={JobsStack} />
    <Tab.Screen name="Bookmarks" component={BookmarksStack} />
  </Tab.Navigator>
);

export default AppNavigator;
