import React from 'react';
import {View} from 'react-native';
import HeaderBar from '../../shared/Header';
import {styles} from './style';

import {images} from '../../images';

const {icons} = images;

const SingleProduct = ({navigation: {navigate, goBack}}) => {
  return (
    <View style={styles.container}>
      <HeaderBar
        hasBackButton
        onPressLeftIcon={() => goBack()}
        rightIcon={icons.shop}
      />
    </View>
  );
};

export default SingleProduct;
