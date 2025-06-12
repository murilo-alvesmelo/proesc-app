import { Text, View } from "react-native";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router/build/hooks";
import { useModalStore } from "../store/useModalStore";
import { useEffect } from "react";
import InfoDocument from "./InfoDocument";
import UploadDocument from "./UploadDocument";
import EditDocument from "./EditDocument";
import Handle from "../components/Handle";
import styles from "./style";

type Params = {
  id?: string;
  action?: "view" | "upload" | "edit";
};
export default function BottomSheet() {
  const params = useLocalSearchParams();
  const { id, action } = params as Params;
  const { uploadedDocument, document, getData, getUploadedDocument } =
    useModalStore();
  useEffect(() => {
    if (id) {
      if (action === "view") {
        getData(id);
      } else if (action === "edit") {
        getUploadedDocument(id);
      }
    }
  }, [id]);

  const renderAction = () => {
    switch (action) {
      case "view":
        return <InfoDocument item={document} />;
      case "upload":
        return <UploadDocument />;
      case "edit":
        return <EditDocument item={uploadedDocument} />;
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
