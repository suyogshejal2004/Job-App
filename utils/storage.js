import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveBookmark = async (job) => {
  try {
    const bookmarks = await getBookmarks();
    if (!bookmarks.some((b) => b.id === job.id)) {
      bookmarks.push(job);
      await AsyncStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
  } catch (error) {
    console.error("Error saving bookmark:", error);
    Alert.alert("Error", "Failed to save bookmark.");
  }
};

export const removeBookmark = async (jobId) => {
  try {
    const bookmarks = await getBookmarks();
    const updatedBookmarks = bookmarks.filter((b) => b.id !== jobId);
    await AsyncStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
    return updatedBookmarks;
  } catch (error) {
    console.error("Error removing bookmark:", error);
    Alert.alert("Error", "Failed to remove bookmark.");
    return null;
  }
};

export const getBookmarks = async () => {
  try {
    const bookmarks = await AsyncStorage.getItem("bookmarks");
    return bookmarks ? JSON.parse(bookmarks) : [];
  } catch (error) {
    console.error("Error fetching bookmarks:", error);
    return [];
  }
};
