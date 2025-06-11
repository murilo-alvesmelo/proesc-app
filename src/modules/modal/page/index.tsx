import { Text, View } from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import styles from "./style";
import Handle from "../components/Handle";
import { useModalStore } from "../store/useModalStore";
import { useEffect } from "react";
import InfoDocument from "../components/InfoDocument";
import UploadDocument from "../components/UploadDocument";

type Params = {
  id?: string;
  action?: "view" | "upload";
};
export default function BottomSheet() {
  const params = useLocalSearchParams();
  const { id, action } = params as Params;
  const { document, getData } = useModalStore();

  useEffect(() => {
    if (id) {
      getData(id);
    }
  }, [id]);

  const renderAction = () => {
    switch (action) {
      case "view":
        return <InfoDocument item={document} />;
      case "upload":
        return <UploadDocument />;
      default:
        return <Text>Ops!!!</Text>;
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Handle onPress={() => router.back()} type={action} />
        {renderAction()}
      </View>
    </View>
  );
}
