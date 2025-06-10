import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  flexContainer: { flex: 1, backgroundColor: "#FFFFFF" },
  // Shimmer
  shimmerContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
  },
  shimmerHeader: {
    width: "70%",
    height: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginBottom: 10,
  },
  shimmerLine: {
    width: "90%",
    height: 15,
    backgroundColor: "#E0E0E0",
    borderRadius: 4,
    marginTop: 6,
  },
  // List & Card Styles
  listContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: "#F4F7FC",
  },
  cardContainer: {
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    elevation: 3,
    shadowColor: "#AAB8C2",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  companyLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
    backgroundColor: "#E5E9F2",
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#141D2F",
    lineHeight: 22,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#657786",
    marginTop: 2,
  },
  cardDetails: {
    paddingTop: 10,
    borderTopWidth: 1,
    borderColor: "#E5E9F2",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: "#141D2F",
    marginLeft: 10,
  },
  // Details Screen Styles
  detailsContentContainer: {
    paddingBottom: 120, // Space for action buttons
  },
  detailsHeader: {
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 80, // For transparent header
    paddingBottom: 24,
    backgroundColor: "#F4F7FC",
  },
  detailsCompanyLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
    backgroundColor: "#FFF",
    borderWidth: 3,
    borderColor: "#4A90E2",
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#141D2F",
    textAlign: "center",
    marginBottom: 4,
  },
  detailsCompany: {
    fontSize: 18,
    color: "#4A90E2",
    fontWeight: "600",
  },
  section: {
    padding: 20,
    marginTop: -10, // Overlap the header slightly
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#FFFFFF",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#141D2F",
    marginBottom: 20,
  },
  detailItemRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  detailIcon: {
    marginRight: 16,
    marginTop: 2,
  },
  detailLabel: {
    fontSize: 14,
    color: "#657786",
    fontWeight: "500",
    marginBottom: 2,
  },
  detailValue: {
    fontSize: 16,
    color: "#141D2F",
    fontWeight: "600",
    flexWrap: "wrap",
    flex: 1,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },

  // Action Buttons
  actionsContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E9F2",
  },
  actionButton: {
    flex: 1,
    borderRadius: 12,
    paddingVertical: 8,
  },
  callButton: {
    backgroundColor: "#4A90E2",
    marginRight: 8,
  },
  whatsappButton: {
    backgroundColor: "#25D366",
  },
  actionButtonLabel: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  bookmarkFAB: {
    position: "absolute",
    right: 20,
    top: 50,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },

  // Center & Loader
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F7FC",
    paddingHorizontal: 20,
  },
  loader: {
    marginVertical: 20,
  },
  errorText: {
    fontSize: 18,
    color: "#657786",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: "#4A90E2",
  },
  emptyStateText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#657786",
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 16,
    color: "#AAB8C2",
    marginTop: 8,
    textAlign: "center",
  },
});

export default styles;
