import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

function Plate(props) {
  const { weight, platesCount, onPressAdd, image, unit } = props;
  return (
    <View style={styles.containerPlate}>
      <Text style={styles.count}>
        {weight} {unit} x {platesCount}
      </Text>
      <Pressable onPress={onPressAdd}>
        <Image source={image} style={styles.image} />
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  containerPlate: {
    padding: 10,
    flexBasis: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
  },
  count: {
    fontSize: 18,
    marginBottom: 3,
    textAlign: 'center',
    color: '#FFF',
  },
  image: {
    height: 130,
    width: 130,
  },
});

export default Plate;
