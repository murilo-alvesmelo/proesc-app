import { KeyboardType, TextInput, View } from "react-native";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./style";
import Colors from "@/src/constants/Colors";

type InputAppProps = {
  placeholder: string;
  value: string;
  onChangeValue: (value: string) => void;
  icon?: IconName;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardType;
  type?: "primary" | "secondary";
};

export default function InputApp({
  placeholder,
  value,
  onChangeValue,
  icon,
  secureTextEntry = false,
  keyboardType = "default",
  type = "primary",
}: InputAppProps) {
  return (
    <View style={[styles.input, styles[type]]}>
      {icon && (
        <FontAwesomeIcon
          icon={["fas", icon]}
          size={16}
          color={type === "primary" ? Colors.bgWhite : Colors.camarone900}
        />
      )}
      <TextInput
        autoCapitalize="none"
        textContentType="oneTimeCode"
        placeholder={placeholder}
        placeholderTextColor={
          type === "primary" ? Colors.bgWhite : Colors.camarone900
        }
        value={value}
        onChangeText={onChangeValue}
        secureTextEntry={secureTextEntry}
        style={[styles.inputText, styles[`${type}Text`]]}
        keyboardType={keyboardType}
      />
    </View>
  );
}
