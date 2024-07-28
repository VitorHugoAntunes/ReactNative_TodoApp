import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import UncheckedIcon from "../../assets/unchecked.png";
import CheckedIcon from "../../assets/checked.png";
import TrashIcon from "../../assets/trash.png";

type TaskProps = {
  name: string;
  checked?: boolean;
  onCheck?: () => void;
  onRemove?: () => void;
}

export function Task({ name, checked, onCheck, onRemove }: TaskProps) {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} onPress={onCheck}>
        {
          checked ? <Image source={CheckedIcon} /> : <Image source={UncheckedIcon} />
        }
      </TouchableOpacity>

      {checked ? (
        <Text style={styles.completed}>{name}</Text>
      ) : (
        <Text style={styles.name}>{name}</Text>
      )}

      <TouchableOpacity style={styles.icon} onPress={onRemove}>
        <Image source={TrashIcon} />
      </TouchableOpacity>
    </View>
  );
}