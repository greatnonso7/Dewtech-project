import React from 'react';
import {View, Text, Image, TextInput, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';

import {images} from '../images';

const {icons} = images;

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.body}>
        <View style={styles.headerContainer}>
          <View>
            <Text style={styles.headerText}>Welcome to</Text>
            <Text style={styles.plantText}>Plant Shop</Text>
          </View>
          <Image
            source={icons.shop}
            resizeMode="contain"
            style={styles.image}
          />
        </View>
        <View style={styles.textInputArea}>
          <View style={styles.inputContainer}>
            <Image
              source={icons.search}
              resizeMode="contain"
              style={styles.search}
            />
            <TextInput
              placeholder="Search"
              placeholderTextColor={'rgba(0, 0, 0, 0.76)'}
              style={styles.textInput}
            />
          </View>
          <View style={styles.slidersContainer}>
            <Image
              source={icons.sliders}
              resizeMode="contain"
              style={styles.sliders}
            />
          </View>
        </View>
        <View>
          <FlatList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
