import EStyleSheet from "react-native-extended-stylesheet"

const styles = EStyleSheet.create({
  container: {
    alignItems: "center",
  },
  wrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    width: 19,
    marginRight: 11,
  },
  text: {
    color: "$white",
    fontWeight: "300",
    fontSize: 14,
    paddingVertical: 20,
  },
})

export default styles
