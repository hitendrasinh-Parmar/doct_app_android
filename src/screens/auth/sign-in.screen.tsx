import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Colors } from '../../theme/colors';
import { useTheme } from '../../theme/ThemeProvider';

const SignIn = () => {
  console.log('[SignIn]');
  const {theme , toggleTheme} = useTheme()
  return (
    <View style={[{flex:1, backgroundColor: theme.primary}]}>
      <TouchableOpacity onPress={()=>{
        toggleTheme()
      }}>
        <Text>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignIn;
