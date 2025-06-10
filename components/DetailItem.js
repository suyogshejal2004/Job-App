import React from "react";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/styles";

const DetailItem = ({ icon, label, value }) => {
  if (!value || value.trim() === "-") return null;
  return (
    <View style={styles.detailItemRow}>
      <MaterialIcons
        name={icon}
        size={22}
        color="#4A90E2"
        style={styles.detailIcon}
      />
      <View>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
      </View>
    </View>
  );
};

export default DetailItem;
