import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Stars = (props) => {
  return (
    <View>
      <View style={styles.star}>
        {Array(props.star)
          .fill()
          .map((_, index) => (
            <Ionicons name="star" size={15} color={'white'}/>
          ))}
      </View>
    </View>
  );
};

export default Stars;

const styles = StyleSheet.create({
  star: {
    flexDirection: "row",
  },
});
