import { Image, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

import { Colors } from '@/constants/Colors';

const ScreenPreview = () => {
  return (
    <BlurView intensity={100} style={styles.container}>
      <Image style={styles.image} source={require('@/assets/images/bg1.jpg')} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Porque de tal manera amó Dios al mundo que Dió a su unico hijo para
          que todo aquel que en el cree no se pierda mas tenga vida eterna
        </Text>
      </View>
    </BlurView>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    position: 'absolute',
    top: 0,
    left: 15,
    right: 15,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  textStyle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: Colors.dark.text,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
  container: {
    borderColor: Colors.dark.border,
    borderWidth: 1,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    resizeMode: 'cover',
    height: 330,
    width: 510,
    borderRadius: 20,
    margin: 5,
    boxShadow: '',
  },
});
export default ScreenPreview;
