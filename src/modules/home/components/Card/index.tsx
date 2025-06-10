import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Animated, { SlideInLeft } from "react-native-reanimated";
import { Document } from "@/src/interfaces";
import styles from "./style";
import { treatCategorie, treatTypeIcon } from "@/src/utils/treatCategorie";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Colors from "@/src/constants/Colors";

type CardProps = {
  item: Document;
  index: number;
};

export default function Card({ item, index }: CardProps) {
  return (
    <TouchableOpacity>
      <Animated.View
        entering={SlideInLeft.delay(300 * ((index % 10) + 1)).duration(300)}
        style={styles.documentCard}
      >
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description} numberOfLines={2}>
            {item.description || "Sem descrição"}
          </Text>
        </View>
        <View style={styles.documentInfo}>
          <Text style={styles.category} numberOfLines={1}>
            <Text style={styles.boldText}>Tipo:</Text>{" "}
            {treatCategorie(item.category) || "Sem categoria"}
          </Text>
          <Text style={styles.date}>
            <Text style={styles.boldText}>Data:</Text>{" "}
            {new Date(item.date).toLocaleDateString("pt-BR") || "Sem data"}
          </Text>
          <FontAwesomeIcon
            icon={["fas", treatTypeIcon(item.type)]}
            size={26}
            color={Colors.camarone700}
          />
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
}
