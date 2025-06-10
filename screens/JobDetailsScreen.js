import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Linking,
  Alert,
  SafeAreaView,
  Image,
  Animated,
} from "react-native";
import { Button, IconButton } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";
import { getBookmarks, saveBookmark, removeBookmark } from "../utils/storage";
import DetailItem from "../components/DetailItem";
import styles from "../styles/styles";

const JobDetailsScreen = ({ route }) => {
  const { job } = route.params || {};
  const [isBookmarked, setIsBookmarked] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const checkBookmark = async () => {
      if (job) {
        const bookmarks = await getBookmarks();
        setIsBookmarked(bookmarks.some((b) => b.id === job.id));
      }
    };
    checkBookmark();
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [job, fadeAnim]);

  const handleBookmarkToggle = async () => {
    if (!job) return;
    if (isBookmarked) {
      await removeBookmark(job.id);
    } else {
      await saveBookmark(job);
    }
    setIsBookmarked(!isBookmarked);
  };

  if (!job) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Job details not available.</Text>
      </View>
    );
  }

  const getJobDetail = (fieldKey, defaultValue = "N/A") => {
    const detail = job.contentV3?.V3?.find(
      (item) => item.field_key === fieldKey
    );
    return detail?.field_value || defaultValue;
  };

  const handleContact = (type) => {
    let url;
    if (type === "call" && job.whatsapp_no) {
      url = `tel:${job.whatsapp_no}`;
    } else if (type === "whatsapp" && job.contact_preference?.whatsapp_link) {
      url = job.contact_preference.whatsapp_link;
    }

    if (url) {
      Linking.canOpenURL(url)
        .then((supported) => {
          if (supported) {
            return Linking.openURL(url);
          }
          Alert.alert("Error", `Unable to open ${type} link.`);
        })
        .catch((err) => console.error("An error occurred", err));
    } else {
      Alert.alert(
        "Not Available",
        `Contact information for ${type} is not available.`
      );
    }
  };

  return (
    <SafeAreaView style={styles.flexContainer}>
      <Animated.ScrollView
        contentContainerStyle={styles.detailsContentContainer}
        style={{ opacity: fadeAnim }}
      >
        <View style={styles.detailsHeader}>
          <Image
            source={{
              uri:
                job.logo_url ||
                `https://placehold.co/150x150/E5E9F2/657786?text=${
                  job.company_name?.charAt(0) || "C"
                }`,
            }}
            style={styles.detailsCompanyLogo}
          />
          <Text style={styles.detailsTitle}>{job.title}</Text>
          <Text style={styles.detailsCompany}>{job.company_name}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Overview</Text>
          <DetailItem
            icon="location-on"
            label="Location"
            value={job.primary_details?.Place}
          />
          <DetailItem
            icon="attach-money"
            label="Salary"
            value={job.primary_details?.Salary}
          />
          <DetailItem
            icon="access-time"
            label="Shift"
            value={getJobDetail("Shift timing")}
          />
          <DetailItem
            icon="people"
            label="Gender"
            value={getJobDetail("Gender")}
          />
          <DetailItem
            icon="category"
            label="Category"
            value={getJobDetail("Job Category")}
          />
          <DetailItem
            icon="work"
            label="Vacancies"
            value={job.job_tags?.[0]?.value}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            {getJobDetail("Other details")}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <DetailItem icon="phone" label="Phone" value={job.whatsapp_no} />
          <DetailItem
            icon="schedule"
            label="Preferred Call Time"
            value={`${
              job.contact_preference?.preferred_call_start_time || ""
            } - ${job.contact_preference?.preferred_call_end_time || ""}`}
          />
        </View>
      </Animated.ScrollView>
      <View style={styles.actionsContainer}>
        <Button
          mode="contained"
          onPress={() => handleContact("call")}
          style={[styles.actionButton, styles.callButton]}
          labelStyle={styles.actionButtonLabel}
          icon="phone"
        >
          Call
        </Button>
        <Button
          mode="contained"
          onPress={() => handleContact("whatsapp")}
          style={[styles.actionButton, styles.whatsappButton]}
          labelStyle={styles.actionButtonLabel}
          icon="whatsapp"
          disabled={!job.contact_preference?.whatsapp_link}
        >
          WhatsApp
        </Button>
      </View>
      <IconButton
        icon={isBookmarked ? "bookmark" : "bookmark-outline"}
        iconColor="#FFFFFF"
        containerColor={isBookmarked ? "#FF6B6B" : "#AAB8C2"}
        size={30}
        onPress={handleBookmarkToggle}
        style={styles.bookmarkFAB}
        animated
      />
    </SafeAreaView>
  );
};

export default JobDetailsScreen;
