import { Dimensions, PixelRatio, StyleSheet } from "react-native";
import colors from "./colors";

const scale = Dimensions.get("window").width / 375;

export function responsive(n: number) {
  return PixelRatio.roundToNearestPixel(n * scale);
}

export default StyleSheet.create({
  sans16black: {
    fontFamily: "KumbhSansRegular",
    fontSize: responsive(16),
    lineHeight: responsive(16),
    color: colors.black,
  },
});
