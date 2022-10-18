import { useState, useEffect } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Toast from 'react-native-root-toast';
import { RootSiblingParent } from 'react-native-root-siblings';
import Header from './components/Header';
import Rack from './components/Rack';

export default function App() {
  const [totalWt, setTotalWt] = useState(0);
  const [totalPlates, setTotalPlates] = useState(0);
  const [bar, setBar] = useState(45);
  const [unit, setUnit] = useState('LB');
  const [multiple, setMultiple] = useState(2);
  const [plates55lb, setPlates55lb] = useState(0);
  const [plates45lb, setPlates45lb] = useState(0);
  const [plates35lb, setPlates35lb] = useState(0);
  const [plates25lb, setPlates25lb] = useState(0);
  const [plates15lb, setPlates15lb] = useState(0);
  const [plates10lb, setPlates10lb] = useState(0);
  const [plates25kg, setPlates25kg] = useState(0);
  const [plates20kg, setPlates20kg] = useState(0);
  const [plates15kg, setPlates15kg] = useState(0);
  const [plates10kg, setPlates10kg] = useState(0);
  const [plates5kg, setPlates5kg] = useState(0);
  useEffect(() => {
    if (unit === 'KG') {
      setTotalWt(Math.round(totalPlates + Math.floor(bar / 2.2)));
    } else {
      setTotalWt(Math.round(totalPlates + bar));
    }
  });
  const handleUnits = () => {
    handleReset();
    if (unit === 'LB') {
      setUnit('KG');
      Toast.show(`WEIGHT RESET TO KG`);
    } else {
      setUnit('LB');
      Toast.show(`WEIGHT RESET TO LB`);
    }
  };
  const handleMultiple = () => {
    if (multiple === 2) {
      setMultiple(1);
      Toast.show('SINGLE PLATES');
    } else {
      setMultiple(2);
      Toast.show('PLATE PAIRS');
    }
  };
  const handleBar = () => {
    if (bar === 45) {
      setBar(35);
      if (unit === 'KG') {
        Toast.show(`15 ${unit} BAR`);
      } else Toast.show(`35 ${unit} BAR`);
    } else {
      setBar(45);
      if (unit === 'KG') {
        Toast.show(`20 ${unit} BAR`);
      } else Toast.show(`45 ${unit} BAR`);
    }
  };
  const handleReset = () => {
    setPlates55lb(0);
    setPlates45lb(0);
    setPlates35lb(0);
    setPlates25lb(0);
    setPlates15lb(0);
    setPlates10lb(0);
    setPlates25kg(0);
    setPlates20kg(0);
    setPlates15kg(0);
    setPlates10kg(0);
    setPlates5kg(0);
    setTotalPlates(0);
    Toast.show('ALL CLEAR');
  };

  return (
    <RootSiblingParent>
      <StatusBar style='auto' />
      <ImageBackground
        source={require('./assets/images/bar.jpg')}
        style={styles.containerApp}
      >
        <View style={styles.containerMain}>
          <Header
            totalWt={totalWt}
            bar={bar}
            unit={unit}
            multiple={multiple}
            handleReset={handleReset}
            handleBar={handleBar}
            handleUnits={handleUnits}
            handleMultiple={handleMultiple}
          />
          <Rack
            setTotalWt={setTotalWt}
            setPlates55lb={() => {
              setPlates55lb(plates55lb + 1 * multiple);
              setTotalPlates(totalPlates + 55 * multiple);
            }}
            setPlates45lb={() => {
              setPlates45lb(plates45lb + 1 * multiple);
              setTotalPlates(totalPlates + 45 * multiple);
            }}
            setPlates35lb={() => {
              setPlates35lb(plates35lb + 1 * multiple);
              setTotalPlates(totalPlates + 35 * multiple);
            }}
            setPlates25lb={() => {
              setPlates25lb(plates25lb + 1 * multiple);
              setTotalPlates(totalPlates + 25 * multiple);
            }}
            setPlates15lb={() => {
              setPlates15lb(plates15lb + 1 * multiple);
              setTotalPlates(totalPlates + 15 * multiple);
            }}
            setPlates10lb={() => {
              setPlates10lb(plates10lb + 1 * multiple);
              setTotalPlates(totalPlates + 10 * multiple);
            }}
            setPlates25kg={() => {
              setPlates25kg(plates25kg + 1 * multiple);
              setTotalPlates(totalPlates + 25 * multiple);
            }}
            setPlates20kg={() => {
              setPlates20kg(plates20kg + 1 * multiple);
              setTotalPlates(totalPlates + 20 * multiple);
            }}
            setPlates15kg={() => {
              setPlates15kg(plates15kg + 1 * multiple);
              setTotalPlates(totalPlates + 15 * multiple);
            }}
            setPlates10kg={() => {
              setPlates10kg(plates10kg + 1 * multiple);
              setTotalPlates(totalPlates + 10 * multiple);
            }}
            setPlates5kg={() => {
              setPlates5kg(plates5kg + 1 * multiple);
              setTotalPlates(totalPlates + 5 * multiple);
            }}
            plates55lb={plates55lb}
            plates45lb={plates45lb}
            plates35lb={plates35lb}
            plates25lb={plates25lb}
            plates15lb={plates15lb}
            plates10lb={plates10lb}
            plates25kg={plates25kg}
            plates20kg={plates20kg}
            plates15kg={plates15kg}
            plates10kg={plates10kg}
            plates5kg={plates5kg}
            unit={unit}
          />
        </View>
      </ImageBackground>
    </RootSiblingParent>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover',
    backgroundColor: '#242424',
  },
  containerMain: {
    width: '95%',
    padding: 5,
    borderRadius: 10,
    backgroundColor: '#9905058A',
  },
});
