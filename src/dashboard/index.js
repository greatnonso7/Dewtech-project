/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {normalColors as colors} from '../colors';

import {images} from '../images';
import {hp, wp} from '../shared/responsive-dimension';

const {icons} = images;

const Dashboard = () => {
  const [value, setValue] = React.useState({
    index: '1',
    value: 'POPULAR',
  });
  const selectType = (id, value) => {
    setValue({index: id, value: value});
  };
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
        <View style={styles.listContainer}>
          <FlatList
            data={data}
            horizontal
            renderItem={({item}) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => selectType(item.id, item.title)}
                activeOpacity={0.6}>
                <Text
                  style={[
                    styles.title,
                    {
                      color:
                        value.index === item.id
                          ? colors.green200
                          : 'rgba(0, 0, 0, 0.5)',
                      marginLeft: item.left,
                    },
                  ]}>
                  {item.title}
                </Text>
                <View
                  style={{
                    height: hp(2),
                    width: wp(27),
                    left: item.left,
                    backgroundColor:
                      value.index === item.id ? colors.green200 : null,
                  }}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const data = [
  {
    id: '1',
    title: 'POPULAR',
  },
  {
    id: '2',
    title: 'ORGANIC',
    left: 10,
  },
  {
    id: '3',
    title: 'INDOORS',
    left: 10,
  },
  {
    id: '4',
    title: 'SYNTHETIC',
    left: 10,
  },
];

export default Dashboard;
