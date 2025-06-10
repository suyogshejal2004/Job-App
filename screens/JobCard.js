import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Card, IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "../styles/styles";

const JobCard = ({ job, isBookmarked, onBookmark, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.cardHeader}>
          <Image
            source={{
              uri:
                job.logo_url ||
                `https://placehold.co/100x100/E5E9F2/657786?text=${
                  job.company_name?.charAt(0) || "C"
                }`,
            }}
            style={styles.companyLogo}
          />
          <View style={styles.cardTitleContainer}>
            <Text style={styles.cardTitle} numberOfLines={2}>
              {job.title || "N/A"}
            </Text>
            <Text style={styles.cardSubtitle}>{job.company_name || "N/A"}</Text>
          </View>
          <IconButton
            icon={isBookmarked ? "bookmark" : "bookmark-outline"}
            iconColor={isBookmarked ? "#FF6B6B" : "#AAB8C2"}
            size={28}
            onPress={onBookmark}
          />
        </View>
        <View style={styles.cardDetails}>
          <View style={styles.detailRow}>
            <MaterialIcons name="location-on" size={18} color="#4A90E2" />
            <Text style={styles.detailText}>
              {job.primary_details?.Place || "N/A"}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <MaterialIcons name="attach-money" size={18} color="#4A90E2" />
            <Text style={styles.detailText}>
              {job.primary_details?.Salary || "N/A"}
            </Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  </TouchableOpacity>
);

export default JobCard;
