import { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";

export default function calculator() {
  const [result, setResult] = useState(0);

  const incrimemt = () => {
    setResult(result + 1);
  };
  return (
    <SafeAreaView className="bg-gray-100 flex justify-center items-center h-[85vh]">
      <Text className="text-4xl ">Incrimentor</Text>

      <Text className="text-6xl font-semibold">{result}</Text>

      <TouchableOpacity
        className="bg-blue-500  p-3 rounded-md"
        style={{ color: "#fff" }}
        onPress={incrimemt}
      >
        <Text className="text-white">Increment</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
