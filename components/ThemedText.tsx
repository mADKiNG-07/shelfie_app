import {
  StyleProp,
  Text,
  TextProps,
  TextStyle,
  useColorScheme,
} from "react-native";
import { Colors } from "../constants/colors";

const ThemedText = ({
  style,
  title = false,
  children,
  ...props
}: {
  style?: StyleProp<TextStyle>;
  title?: boolean;
  props?: TextProps;
  children: React.ReactNode;
}) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme!] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;

  return (
    <Text style={[{ color: textColor }, style]} {...props}>
      {children}
    </Text>
  );
};

export default ThemedText;
