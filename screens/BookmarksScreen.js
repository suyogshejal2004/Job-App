import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import JobCard from "./JobCard";
import { getBookmarks, removeBookmark } from "../utils/storage";
import styles from "../styles/styles";

const BookmarksScreen = ({ navigation }) => {
  const [bookmarks, setBookmarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", loadBookmarks);
    return unsubscribe;
  }, [navigation]);

  const loadBookmarks = async () => {
    setLoading(true);
    const storedBookmarks = await getBookmarks();
    setBookmarks(storedBookmarks);
    setLoading(false);
  };

  const handleBookmarkToggle = async (job) => {
    const updatedBookmarks = await removeBookmark(job.id);
    if (updatedBookmarks) {
      setBookmarks(updatedBookmarks);
    }
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4A90E2" />
      </View>
    );
  }

  if (bookmarks.length === 0) {
    return (
      <View style={styles.center}>
        <MaterialIcons name="bookmark-border" size={80} color="#E0E0E0" />
        <Text style={styles.emptyStateText}>No Bookmarks Yet</Text>
        <Text style={styles.emptyStateSubtext}>
          Tap the bookmark icon on a job to save it here.
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      data={bookmarks}
      renderItem={({ item }) => (
        <JobCard
          job={item}
          isBookmarked={true}
          onBookmark={() => handleBookmarkToggle(item)}
          onPress={() => navigation.navigate("JobDetails", { job: item })}
        />
      )}
      keyExtractor={(item) => String(item.id)}
      contentContainerStyle={styles.listContainer}
    />
  );
};

export default BookmarksScreen;
