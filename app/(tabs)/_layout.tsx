import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="calculator"
        options={{
          title: "Explore",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
