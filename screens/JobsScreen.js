import React, { useState, useEffect } from "react";
import { View, FlatList, ActivityIndicator, Text, Button } from "react-native";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import JobCard from "./JobCard";
import ShimmerPlaceholder from "../components/ShimmerPlaceholder";
import { getBookmarks, saveBookmark, removeBookmark } from "../utils/storage";
import styles from "../styles/styles";

const JobsScreen = ({ navigation }) => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    fetchJobs(1);
    const unsubscribe = navigation.addListener("focus", loadBookmarks);
    return unsubscribe;
  }, [navigation]);

  const fetchJobs = async (pageNum = page) => {
    if (loading || (!hasMore && pageNum > 1)) return;
    setLoading(true);
    if (pageNum === 1) setInitialLoading(true);

    try {
      const response = await axios.get(
        `https://testapi.getlokalapp.com/common/jobs?page=${pageNum}`
      );
      const newJobs = response.data.results || [];
      const validJobs = newJobs.filter((job) => job.id);

      setJobs((prev) => (pageNum === 1 ? validJobs : [...prev, ...validJobs]));
      if (newJobs.length < 10) setHasMore(false);
      setPage(pageNum + 1);
      setError(null);
    } catch (err) {
      setError("Failed to fetch jobs. Please try again.");
    } finally {
      setLoading(false);
      if (pageNum === 1) setInitialLoading(false);
    }
  };

  const loadBookmarks = async () => {
    const storedBookmarks = await getBookmarks();
    setBookmarks(storedBookmarks.map((b) => b.id));
  };

  const handleBookmarkToggle = async (job) => {
    const isCurrentlyBookmarked = bookmarks.includes(job.id);
    if (isCurrentlyBookmarked) {
      await removeBookmark(job.id);
    } else {
      await saveBookmark(job);
    }
    loadBookmarks();
  };

  const onRefresh = () => {
    setHasMore(true);
    fetchJobs(1);
    loadBookmarks();
  };

  if (initialLoading) {
    return (
      <View style={styles.listContainer}>
        <ShimmerPlaceholder />
        <ShimmerPlaceholder />
        <ShimmerPlaceholder />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <MaterialIcons name="error-outline" size={80} color="#FF6B6B" />
        <Text style={styles.errorText}>{error}</Text>
        <Button mode="contained" onPress={onRefresh} style={styles.retryButton}>
          Retry
        </Button>
      </View>
    );
  }

  return (
    <FlatList
      data={jobs}
      renderItem={({ item }) => (
        <JobCard
          job={item}
          isBookmarked={bookmarks.includes(item.id)}
          onBookmark={() => handleBookmarkToggle(item)}
          onPress={() => navigation.navigate("JobDetails", { job: item })}
        />
      )}
      keyExtractor={(item) => String(item.id)}
      onEndReached={() => fetchJobs()}
      onEndReachedThreshold={0.7}
      ListFooterComponent={
        loading &&
        !initialLoading && (
          <ActivityIndicator
            size="small"
            color="#4A90E2"
            style={styles.loader}
          />
        )
      }
      contentContainerStyle={styles.listContainer}
      onRefresh={onRefresh}
      refreshing={loading && page === 1}
    />
  );
};

export default JobsScreen;
