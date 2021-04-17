import {Platform, StyleSheet} from 'react-native';
import {wp, hp, paddingTopiOS} from '../shared/responsive-dimension';
import {globalStyle} from '../style';
import {normalColors as colors} from '../colors';

const {main} = globalStyle(colors);

export const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  body: {
    marginHorizontal: hp(25),
    paddingTop: Platform.OS === 'ios' ? paddingTopiOS : hp(20),
  },
  headerText: {
    ...main.mediumText20,
  },
  plantText: {
    ...main.boldText36,
    color: colors.green500,
  },
  slidersContainer: {
    backgroundColor: colors.green500,
    width: wp(50),
    height: hp(50),
    borderRadius: hp(12),
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: hp(10),
  },
  sliders: {
    height: hp(24),
    width: wp(24),
  },
  inputContainer: {
    height: hp(50),
    width: wp(270),
    backgroundColor: colors.lightGray,
    flexDirection: 'row',
    borderRadius: hp(12),
    alignItems: 'center',
  },
  textInput: {
    ...main.regularText14,
    paddingLeft: hp(10),
    color: colors.dark,
  },
  search: {
    height: hp(20),
    width: wp(20),
    marginLeft: hp(10),
  },
  image: {
    height: hp(25),
    width: wp(30),
  },
  textInputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(30),
  },
  container: {
    flex: 1,
    backgroundColor: colors.grey50,
  },
  title: {
    ...main.regularText16,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: hp(10),
    backgroundColor: colors.gray,
    height: hp(200),
    width: wp(150),
    marginLeft: hp(10),
    marginTop: hp(10),
    marginBottom: hp(10),
    borderRadius: hp(10),
  },
  switchHeaderButton: {
    height: hp(35),
    width: '100%',
    backgroundColor: 'white',
    right: hp(10),
    borderColor: 'transparent',
  },
  selectedButtonStyle: {
    borderRadius: wp(5),
    backgroundColor: colors.white,
    borderWidth: 0,
    borderBottomWidth: hp(5),
    borderBottomColor: colors.green200,
  },
  buttonContainerStyle: {
    width: hp(110),
  },
  textStyle: {
    ...main.regularText12,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  selectedTextStyle: {
    ...main.regularText14,
    color: colors.green200,
  },
  listContainer: {
    marginTop: hp(20),
  },
  itemTitle: {
    ...main.regularText14,
    padding: hp(2),
  },
  itemPrice: {
    ...main.boldText16,
  },
});
