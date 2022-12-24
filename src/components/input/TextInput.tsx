import React from 'react';
import { View, ViewStyle, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStyles from '../../styles/useStyles';
import { useTheme } from '../../theme/ThemeProvider';
import { ColorsInterface, themeType } from '../../types/global';

interface TextInputInterface {
  wrapperStyle?: Array<ViewStyle>;
  value: string;
  onChangeText?: (e: string) => void;
  textStyle?: [];
  placeholderStyle?: themeType;
  placeholder?: string;
  placeholderTextColor?: string;
}

const TextInputCustom = ({
  wrapperStyle = [],
  value,
  onChangeText,
  placeholder,
  placeholderStyle,
  textStyle,
}: TextInputInterface): JSX.Element => {
  const __s = useStyles();
  return (
    <View style={[__s.borderView, ...wrapperStyle]}>
      <Text></Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderStyle?.theme?.colors}
      />
    </View>
  );
};

export default TextInputCustom;
