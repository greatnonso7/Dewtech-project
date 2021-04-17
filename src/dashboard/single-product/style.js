import {Platform, StyleSheet} from 'react-native';
import {
  wp,
  hp,
  deviceWidth,
  paddingTopiOS,
} from '../../shared/responsive-dimension';
import {globalStyle} from '../../style';
import {normalColors as colors} from '../../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginHorizontal: hp(25),
  },
  headerText: {
    ...main.mediumText20,
  },
  image: {
    height: hp(355),
    width: wp(354),
  },
  itemDescriptionContainer: {
    marginTop: hp(10),
    width: deviceWidth,
    height: hp(443),
    backgroundColor: '#F3F3F3',
    borderTopLeftRadius: hp(30),
    borderTopRightRadius: hp(30),
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: hp(30),
    justifyContent: 'space-between',
  },
  buyButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green200,
    width: wp(150),
    height: hp(60),
    borderRadius: hp(40),
  },
  checkoutContainer: {
    marginHorizontal: hp(20),
    marginTop: hp(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addToCartContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    marginLeft: hp(15),
    paddingTop: hp(10),
    ...main.mediumText16,
  },
  addButton: {
    height: hp(34),
    width: wp(50),
    borderWidth: hp(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    marginLeft: hp(20),
    marginRight: hp(20),
    ...main.boldText16,
  },
  buttonText: {
    ...main.boldText20,
  },
  priceContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp(40),
    width: wp(100),
    backgroundColor: colors.green200,
    borderTopLeftRadius: hp(20),
    borderBottomLeftRadius: hp(20),
  },
  price: {
    ...main.boldText20,
    color: colors.white,
  },
  descriptionContainer: {
    marginHorizontal: hp(20),
    marginTop: hp(30),
  },
  aboutTitle: {
    ...main.boldText16,
    paddingBottom: hp(10),
  },
  description: {
    ...main.regularText12,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
