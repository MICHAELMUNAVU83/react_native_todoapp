import React from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function index() {
  const actionToDo = () => {
    alert("Hello World");
  };
  return (
    <SafeAreaView>
      <View className="w-[100%] flex justify-center items-center h-[80vh]">
        <Text className="text-3xl font-bold text-center">Todoist</Text>
        <Text className="text-lg text-center">
          Your everyday app for managing your tasks
        </Text>
        <Image
          source={require("../../assets/images/favicon.png")}
          style={{ width: 200, height: 200 }}
        />
        <TouchableOpacity
          onPress={actionToDo}
          className="bg-blue-500 mt-8 p-4 rounded-lg items-center"
        >
          <Text className="text-white font-bold">Press me!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
