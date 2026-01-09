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
  children,
  ...props
}: {
  style: StyleProp<ViewStyle>;
  props?: ViewProps;
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props}>
      {children}
    </View>
  );
};

export default ThemedView;
