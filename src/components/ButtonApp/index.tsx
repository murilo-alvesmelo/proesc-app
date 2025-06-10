import React from "react";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { styles } from "./style";

import Colors from "@/src/constants/Colors";
import Spaces from "@/src/constants/Spaces";

type ButtonAfterProps = {
  title: string;
  handlePress: () => void;
  iconPrefix?: IconPrefix;
  icon?: IconName;
  type?: "primary" | "secondary" | "tertiary";
  loading?: boolean;
};

export function ButtonApp({
  title,
  handlePress,
  iconPrefix = "fas",
  icon,
  type = "primary",
  loading = false,
}: ButtonAfterProps) {
  return (
    <TouchableOpacity
      style={[styles.button, styles[type]]}
      onPress={handlePress}
      disabled={loading}
    >
      {loading ? (
        <ActivityIndicator size="small" color={Colors.bgWhite} />
      ) : (
        <>
          {icon && (
            <FontAwesomeIcon
              icon={[iconPrefix, icon]}
              size={Spaces.space16}
              style={styles[`${type}Icon`]}
            />
          )}
          <Text style={[styles.buttonText, styles[`${type}ButtonText`]]}>
            {title}
          </Text>
        </>
      )}
    </TouchableOpacity>
  );
}
