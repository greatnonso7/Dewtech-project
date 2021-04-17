/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  SectionList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {normalColors as colors} from '../colors';
import {connect} from 'react-redux';
import {ButtonGroup} from 'react-native-elements';
import {extend, groupBy, sortBy} from 'lodash';

import {images} from '../images';
import {deviceWidth, hp, wp} from '../shared/responsive-dimension';

const {icons} = images;

const TAB_BUTTONS = ['All', 'Men', 'Women', 'Electronics', 'Jewelry'];
const TAB_EMPTY_STATE_TITLE = ['', 'Men', 'Women', 'Electronics', 'Jewelry'];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: true,
      isEmpty: false,
      activeTab: 0,
    };
  }
  componentDidMount() {
    this.props.getProducts();
  }

  updateIndex = index => {
    this.setState({activeTab: index});
  };

  render() {
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
          <View style={styles.listContainer}>{this.renderSwitchHeader()}</View>
          {this.renderBottomSection()}
        </View>
      </SafeAreaView>
    );
  }

  renderSwitchHeader = () => {
    const {activeTab} = this.state;
    return (
      <View style={styles.switchHeader}>
        <ButtonGroup
          onPress={this.updateIndex}
          buttons={TAB_BUTTONS}
          selectedIndex={activeTab}
          containerStyle={styles.switchHeaderButton}
          buttonContainerStyle={styles.buttonContainerStyle}
          selectedButtonStyle={styles.selectedButtonStyle}
          innerBorderStyle={styles.innerBorderStyle}
          textStyle={styles.textStyle}
          selectedTextStyle={styles.selectedTextStyle}
        />
      </View>
    );
  };

  renderBottomSection = () => {
    const {products, loading} = this.props;
    const {activeTab} = this.state;
    const jewelry = products.filter(t => t.category === 'jewelery');
    const men = products.filter(t => t.category === 'men clothing');
    const women = products.filter(t => t.category === 'women clothing');
    const electronics = products.filter(t => t.category === 'electronics');

    const getCurrentFashion = () => {
      switch (activeTab) {
        case 0:
          return products;
        case 1:
          return men;
        case 2:
          return women;
        case 3:
          return electronics;
        case 4:
          return jewelry;
        default:
          return products;
      }
    };

    const data = groupTransactions(getCurrentFashion());

    if (loading && !data.length)
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp(100),
          }}>
          <ActivityIndicator size="large" color={colors.green200} />
        </View>
      );
    return (
      <FlatList
        data={products}
        contentContainerStyle={{paddingBottom: hp(220)}}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <TouchableOpacity
            key={item.key}
            activeOpacity={0.6}
            onPress={() =>
              this.props.navigation.navigate('SingleProduct', {item})
            }
            style={styles.itemContainer}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Image
                source={{uri: item.image}}
                resizeMode="contain"
                style={{height: hp(80), width: wp(100)}}
              />
              <Text style={styles.itemTitle}>
                {item.title.substring(0, 20)}
              </Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  };
}

const mapStateToProps = ({Product, loading}) => ({
  products: Product.products,
  loading: loading.effects.Product.getProducts,
});

const mapDispatchToProps = ({Product: {getProducts, completeTask}}) => ({
  getProducts: () => getProducts(),
  completeTask: id => completeTask(id),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

const groupTransactions = (data = []) => {
  let transGroup = [];
  const sorted = sortBy(data);
  const groups = groupBy(sorted, d => d.title);
  Object.keys(groups).forEach(i => {
    transGroup.push({
      title: 'Recent Transactions',
      data: groups[i],
    });
  });
  return transGroup.reverse();
};
