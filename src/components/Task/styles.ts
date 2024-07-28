import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 5,
    padding: 12,
    gap: 8,
    marginBottom: 10,
  },
  name: {
    color: "#FFF",
    fontSize: 16,
    flex: 1,
    fontFamily: "Inter_400Regular",
  },
  buttonText: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#E23C44",
    height: 56,
    width: 56,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  completed: {
    color: "#808080",
    textDecorationLine: "line-through",
    fontSize: 16,
    flex: 1,
  }
});