import { Text, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import Colors from "@/src/constants/Colors";
import style from "./style";

type TagProps = {
  iconPrefix?: IconPrefix;
  iconName?: IconName;
  title?: string;
  isFunction?: () => void;
  colorIcon?: string;
  active?: boolean;
};

/**
 * @description Tag é um componente que exibe um texto com um ícone e uma cor de fundo.
 * @param {IconName} icon - Ícone da tag.
 * @param {string} title - Título da tag.
 * @param {Function} isFunction - Função que é chamada ao clicar na tag.
 * @param {string} colorIcon - Cor do ícone da tag.
 * @param {boolean} active - Se a tag está ativa ou não.
 */
export default function Tag({
  iconPrefix = "fad",
  iconName,
  title,
  isFunction,
  colorIcon,
  active = false,
}: TagProps) {
  return (
    <TouchableOpacity
      onPress={isFunction}
      style={[style.container, active && style.active]}
    >
      {iconName && (
        <FontAwesomeIcon
          icon={[iconPrefix, iconName]}
          color={colorIcon ? colorIcon : Colors.camarone950}
        />
      )}
      {title && (
        <Text style={[style.title, active && style.titleActive]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
