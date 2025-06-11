import { View, Text, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useLocalSearchParams } from "expo-router/build/hooks";
import Colors from "@/src/constants/Colors";
import styles from "./style";

export default function BottomSheet() {
  const params = useLocalSearchParams();
  console.log("params", params);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Pressable
          style={{ alignSelf: "flex-end" }}
          onPress={() => router.back()}
        >
          <FontAwesomeIcon
            icon={["fas", "xmark"]}
            color={Colors.camarone950}
            size={24}
          />
        </Pressable>
        <ScrollView>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
          <Text style={styles.title}>
            Clique na sua rede social favorita, para se conectar
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
