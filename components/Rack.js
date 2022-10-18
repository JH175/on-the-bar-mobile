import { StyleSheet, View } from 'react-native';
import Plate from './Plate';

function Rack(props) {
  const {
    setPlates55lb,
    setPlates45lb,
    setPlates35lb,
    setPlates25lb,
    setPlates15lb,
    setPlates10lb,
    setPlates25kg,
    setPlates20kg,
    setPlates15kg,
    setPlates10kg,
    setPlates5kg,
    plates45lb,
    plates35lb,
    plates25lb,
    plates15lb,
    plates10lb,
    plates55lb,
    plates25kg,
    plates20kg,
    plates15kg,
    plates10kg,
    plates5kg,
    unit,
  } = props;

  return (
    <View>
      {unit === 'LB' ? (
        <View style={styles.containerPlates}>
          <Plate
            weight='55'
            unit={unit}
            platesCount={plates55lb}
            onPressAdd={setPlates55lb}
            image={require('../assets/images/plate55lb.png')}
          />
          <Plate
            weight='45'
            unit={unit}
            platesCount={plates45lb}
            onPressAdd={setPlates45lb}
            image={require('../assets/images/plate45lb.png')}
          />
          <Plate
            weight='35'
            unit={unit}
            platesCount={plates35lb}
            onPressAdd={setPlates35lb}
            image={require('../assets/images/plate35lb.png')}
          />
          <Plate
            weight='25'
            unit={unit}
            platesCount={plates25lb}
            onPressAdd={setPlates25lb}
            image={require('../assets/images/plate25lb.png')}
          />
          <Plate
            weight='15'
            unit={unit}
            platesCount={plates15lb}
            onPressAdd={setPlates15lb}
            image={require('../assets/images/plate15lb.png')}
          />
          <Plate
            weight='10'
            unit={unit}
            platesCount={plates10lb}
            onPressAdd={setPlates10lb}
            image={require('../assets/images/plate10lb.png')}
          />
        </View>
      ) : (
        <View style={styles.containerPlates}>
          <Plate
            weight='25'
            unit={unit}
            platesCount={plates25kg}
            onPressAdd={setPlates25kg}
            image={require('../assets/images/plate25kg.png')}
          />
          <Plate
            weight='20'
            unit={unit}
            platesCount={plates20kg}
            onPressAdd={setPlates20kg}
            image={require('../assets/images/plate20kg.png')}
          />
          <Plate
            weight='15'
            unit={unit}
            platesCount={plates15kg}
            onPressAdd={setPlates15kg}
            image={require('../assets/images/plate15kg.png')}
          />
          <Plate
            weight='10'
            unit={unit}
            platesCount={plates10kg}
            onPressAdd={setPlates10kg}
            image={require('../assets/images/plate10kg.png')}
          />
          <Plate
            weight='5'
            unit={unit}
            platesCount={plates5kg}
            onPressAdd={setPlates5kg}
            image={require('../assets/images/plate5kg.png')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  containerPlates: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
});

export default Rack;
