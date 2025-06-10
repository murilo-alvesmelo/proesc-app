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
};

export default function InputApp({
  placeholder,
  value,
  onChangeValue,
  icon,
  secureTextEntry = false,
  keyboardType = "default",
}: InputAppProps) {
  return (
    <View style={styles.input}>
      {icon && (
        <FontAwesomeIcon
          icon={["fas", icon]}
          size={16}
          color={Colors.bgWhite}
        />
      )}
      <TextInput
        autoCapitalize="none"
        textContentType="oneTimeCode"
        placeholder={placeholder}
        placeholderTextColor={Colors.bgWhite}
        value={value}
        onChangeText={onChangeValue}
        secureTextEntry={secureTextEntry}
        style={styles.inputText}
        keyboardType={keyboardType}
      />
    </View>
  );
}
