import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.contentContainer}>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  {/* <Image style={styles.image} source={{uri: "https://gweb-research-imagen.web.app/compositional/An%20oil%20painting%20of%20a%20British%20Shorthair%20cat%20wearing%20a%20cowboy%20hat%20and%20red%20shirt%20skateboarding%20on%20a%20beach./1_.jpeg"}} /> */}
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {

  },
  // image: {
  //   width: windowWidth,
  //   height: windowHeight,
  // }
});
