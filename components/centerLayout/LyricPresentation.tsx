import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import {Colors} from '@/constants/Colors';

const LyricPresentation = () => {
  const mockData = [1, 2, 3, 4, 4, 5, 6];
  const MockScreens = () => (
    <View>
      <Image style={styles.image} source={require('@/assets/images/bg2.png')} />
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>
          Porque de tal manera amó Dios al mundo que Dió a su unico hijo para
          que todo aquel que en el cree no se pierda mas tenga vida eterna
        </Text>
      </View>
    </View>
  );
  return (
    <BlurView intensity={100} style={styles.container}>
      <FlatList numColumns={2} data={mockData} renderItem={MockScreens} />
    </BlurView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.dark.border,
    borderWidth: 0.5,
    borderRadius: 15,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
    height: '32%',
  },
  image: {
    resizeMode: 'cover',
    height: 100,
    width: 260,
    borderRadius: 20,
    margin: 5,
    boxShadow: '',
  },

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
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.dark.text,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 6,
  },
});
export default LyricPresentation;
