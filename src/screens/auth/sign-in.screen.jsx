import React from 'react';
import { Text } from 'react-native';
import { fontMaker } from '../../services/fontMaker';
import df from '../../styles/df';
const SignIn = () => {
  console.log('item');

  console.log(fontMaker({ family: 'Poppins', weight: 'ExtraBold', style: 'Italic' }));

  return (
    <>
      <Text style={[df.font28, df.fontPoppinsBold]}>SignIn</Text>
    </>
  );
};

export default SignIn;
