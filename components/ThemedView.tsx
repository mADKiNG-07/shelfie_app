import {
  StyleProp,
  useColorScheme,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/colors";

const ThemedView = ({
  style,
  ...props
}: {
  style: StyleProp<ViewStyle>;
  props: ViewProps;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
