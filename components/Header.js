import Total from './Total';
import Controls from './Controls';
import { View } from 'react-native';

function Header(props) {
  const {
    totalWt,
    bar,
    unit,
    multiple,
    handleReset,
    handleBar,
    handleUnits,
    handleMultiple,
  } = props;
  return (
    <View>
      <Total totalWt={totalWt} unit={unit} />
      <Controls
        handleReset={handleReset}
        handleBar={handleBar}
        handleUnits={handleUnits}
        handleMultiple={handleMultiple}
        bar={bar}
        multiple={multiple}
        unit={unit}
      />
    </View>
  );
}

export default Header;
