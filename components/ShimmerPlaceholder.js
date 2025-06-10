import React from "react";
import { View } from "react-native";
import styles from "../styles/styles";

const ShimmerPlaceholder = () => (
  <View style={styles.shimmerContainer}>
    <View style={styles.shimmerHeader} />
    <View style={styles.shimmerLine} />
    <View style={[styles.shimmerLine, { width: "10%" }]} />
  </View>
);

export default ShimmerPlaceholder;
