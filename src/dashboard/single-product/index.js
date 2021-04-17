import React from 'react';
import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';
import HeaderBar from '../../shared/Header';
import {styles} from './style';

import {images} from '../../images';

const {icons} = images;

const SingleProduct = ({route, navigation: {navigate, goBack}}) => {
  console.log(route.params);
  const {item} = route.params;
  const [value, setValue] = React.useState(1);
  return (
    <View style={styles.container}>
      <HeaderBar
        hasBackButton
        onPressLeftIcon={() => goBack()}
        rightIcon={icons.shop}
      />
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{uri: item.image}}
          resizeMode="contain"
          style={styles.image}
        />
      </View>
      <ScrollView style={styles.itemDescriptionContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title.substring(0, 25)}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${item.price * value}</Text>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.aboutTitle}>About</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.checkoutContainer}>
          <View style={styles.addToCartContainer}>
            <TouchableOpacity
              onPress={() => setValue(value === 0 ? 0 : value - 1)}
              style={styles.addButton}>
              <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
            <Text style={styles.value}>{value}</Text>
            <TouchableOpacity
              onPress={() => setValue(value + 1)}
              style={styles.addButton}>
              <Text style={styles.buttonText}> + </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text
              style={{color: 'white', fontSize: 20, fontFamily: 'Roboto-Bold'}}>
              Buy
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SingleProduct;
