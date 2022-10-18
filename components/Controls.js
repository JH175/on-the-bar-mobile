import { Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function Controls(props) {
  const {
    bar,
    unit,
    multiple,
    handleReset,
    handleBar,
    handleUnits,
    handleMultiple,
  } = props;
  return (
    <View style={styles.containerControls}>
      <Pressable style={styles.controlButton} onPress={handleMultiple}>
        <Text style={styles.buttonText}>{multiple === 1 ? 'x1' : 'x2'}</Text>
      </Pressable>
      <Pressable style={styles.controlButton} onPress={handleUnits}>
        <MaterialCommunityIcons
          name={unit === 'KG' ? 'weight-pound' : 'weight-kilogram'}
          size={32}
          style={styles.buttonIcon}
        />
      </Pressable>
      <Pressable style={styles.controlButton} onPress={handleBar}>
        <Ionicons name='md-barbell' size={30} style={styles.buttonIcon} />
        <Text style={styles.buttonText}>
          {unit === 'KG' ? Math.floor(bar / 2.2) : bar}
        </Text>
      </Pressable>
      <Pressable style={styles.controlButton} onPress={handleReset}>
        <MaterialCommunityIcons
          name='refresh'
          size={32}
          style={styles.buttonIcon}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  containerControls: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  controlButton: {
    height: 60,
    width: 60,
    padding: 10,
    borderRadius: 100,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    backgroundColor: '#242424',
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
  },
  buttonIcon: {
    textAlign: 'center',
    color: '#fff',
  },
  buttonIcon: {
    textAlign: 'center',
    color: '#fff',
  },
});

export default Controls;
