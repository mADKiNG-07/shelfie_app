import {
  StyleProp,
  StyleSheet,
  useColorScheme,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { Colors } from "../constants/colors";

const ThemedCard = ({
  style,
  children,
  ...props
}: {
  style?: StyleProp<ViewStyle>;
  props?: ViewProps;
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  return (
    <View
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    >
      {children}
    </View>
  );
};

export default ThemedCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
  },
});
