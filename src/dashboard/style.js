import {StyleSheet} from 'react-native';
import {wp, hp, paddingTop} from '../shared/responsive-dimension';
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
    paddingTop: paddingTop - hp(10),
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
  listContainer: {
    marginTop: hp(30),
  },
});
