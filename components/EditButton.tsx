import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Colors } from '@/constants/Colors';

const EditButton = ({ onEdit }: { onEdit: () => void }) => {
  return (
    <TouchableOpacity onPress={onEdit} style={styles.editView}>
      <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  editView: {
    backgroundColor: Colors.light.background,
    padding: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: '50%',
    borderRadius: 10,
    paddingHorizontal: 20,
    marginLeft: 8,
  },
  editText: {
    textAlign: 'center',
    color: Colors.light.text,
    fontWeight: 'bold',
  },
});
export default EditButton;
