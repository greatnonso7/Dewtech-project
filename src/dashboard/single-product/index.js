import React from 'react';
import {View, Text} from 'react-native';
import HeaderBar from '../../shared/Header';

const SingleProduct = ({navigation: {navigate, goBack}}) => {
  return (
    <View>
      <HeaderBar hasBackButton onPressLeftIcon={() => goBack()} />
    </View>
  );
};

export default SingleProduct;
