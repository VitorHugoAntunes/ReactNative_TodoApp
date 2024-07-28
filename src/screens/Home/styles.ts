import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#1A1A1A",
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
    fontFamily: "Inter_400Regular",
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: "#262626",
    height: 56,
    color: "#fdfcfe",
    borderRadius: 5,
    padding: 16,
    fontSize: 16,
    fontFamily: "Inter_400Regular",
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1E6F9F",
    height: 56,
    width: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    marginTop: -27,
    marginBottom: 42,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
  },
  emptyList: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 48,
  },
  emptyListTextTitle: {
    color: "#808080",
    fontSize: 14,
    marginTop: 16,
    fontFamily: "Inter_700Bold",
  },
  emptyListTextSubtitle: {
    color: "#808080",
    fontSize: 14,
    fontFamily: "Inter_400Regular",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#0D0D0D",
    height: 173,
  },
  logo: {
    marginTop: 48,
  },
  plusIcon: {
    width: 16,
    height: 16,
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoItem: {
    alignItems: "center",
    flexDirection: "row",
    gap: 8
  },
  infoItemTextCreated: {
    color: "#4EA8DE",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  infoItemTextCompleted: {
    color: "#8284FA",
    fontSize: 14,
    fontFamily: "Inter_700Bold",
  },
  counter: {
    color: "#FFF",
    backgroundColor: "#333333",
    fontSize: 12,
    fontFamily: "Inter_700Bold",
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  }
});