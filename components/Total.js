import { StyleSheet, Text, View } from 'react-native';

function Total(props) {
  const { totalWt, unit } = props;
  return (
    <View>
      <View style={styles.totalContainer}>
        <Text style={styles.appHeading}>On The Bar</Text>
        <Text style={styles.totalHeading}>
          {totalWt} {unit}
        </Text>
        <Text style={styles.conversion}>
          {unit === 'KG'
            ? `(${Math.round(totalWt * 2.2)} LB)`
            : `(${Math.round(totalWt / 2.2)} KG)`}
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  totalContainer: {
    height: 120,
    marginBottom: 10,
    justifyContent: 'space-around',
  },
  appHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  totalHeading: {
    fontSize: 60,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
  },
  conversion: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Total;
