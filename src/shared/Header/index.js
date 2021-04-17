import {
  TouchableOpacity,
  ViewPropTypes,
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import {styles} from './style';
import React from 'react';
import PropTypes from 'prop-types';

import {images} from '../../images';

const {icons} = images;
const HeaderBar = ({
  statusBarColor,
  statusBarStyle,
  tintColor,
  leftIconColor,
  rightIconColor,
  backgroundColor,
  containerStyle,
  headerRight,
  headerLeft,
  headerTitle,
  leftIcon,
  rightIcon,
  leftIconStyle,
  rightIconStyle,
  onPressRightIcon,
  onPressLeftIcon,
  hasBackButton,
  headerRightButtonTitle,
  headerLeftButtonTitle,
  headerCenter,
}) => {
  const renderHeaderLeft = () => {
    if (headerLeft) {
      return <View style={styles.headerLeftIconContainer}>{headerLeft}</View>;
    }
    if (leftIcon || hasBackButton) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressLeftIcon}
          style={styles.headerLeftIconContainer}>
          <Image
            source={leftIcon || icons.arrowLeft}
            style={[
              styles.headerLeftIcon,
              leftIconStyle,
              {tintColor: leftIconColor || tintColor},
            ]}
          />
        </TouchableOpacity>
      );
    }
    if (headerLeftButtonTitle) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressLeftIcon}
          style={styles.headerLeftIconContainer}>
          <Text style={styles.headerButtonTitle}>{headerLeftButtonTitle}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderRight = () => {
    if (headerRight) {
      return <View style={styles.headerRightIconContainer}>{headerRight}</View>;
    }
    if (rightIcon) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Image
            source={rightIcon}
            style={[
              styles.headerRightIcon,
              rightIconStyle,
              {tintColor: rightIconColor || tintColor},
            ]}
          />
        </TouchableOpacity>
      );
    }
    if (headerRightButtonTitle) {
      return (
        <TouchableOpacity
          hitSlop={hitSlop}
          onPress={onPressRightIcon}
          style={styles.headerRightIconContainer}>
          <Text style={styles.headerButtonTitle}>{headerRightButtonTitle}</Text>
        </TouchableOpacity>
      );
    }
  };

  const renderHeaderTitle = () => {
    if (headerTitle) {
      return (
        <Text style={[styles.headerTitle, {color: tintColor}]}>
          {headerTitle}
        </Text>
      );
    }
    if (headerCenter) {
      return headerCenter;
    }
  };
  return (
    <View
      style={[
        styles.headerContainer,
        containerStyle,
        {backgroundColor: backgroundColor || '#fff'},
      ]}>
      <StatusBar
        backgroundColor={statusBarColor || backgroundColor || '#fff'}
        barStyle={statusBarStyle || 'dark-content'}
      />
      <View
        style={[styles.navBar, {backgroundColor: backgroundColor || '#fff'}]}>
        {renderHeaderLeft()}

        {renderHeaderTitle()}

        {renderHeaderRight()}
      </View>
    </View>
  );
};

const hitSlop = {top: 10, left: 10, right: 10, bottom: 10};

export default HeaderBar;

HeaderBar.propTypes = {
  statusBarColor: PropTypes.string, //color string
  statusBarStyle: PropTypes.string, //'light-content' || 'dark-content'
  tintColor: PropTypes.string,
  leftIconColor: PropTypes.string,
  rightIconColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  containerStyle: ViewPropTypes.style, //a style object
  headerRight: PropTypes.element,
  headerLeft: PropTypes.element,
  headerTitle: PropTypes.string,
  leftIcon: PropTypes.any,
  rightIcon: PropTypes.any,
  leftIconStyle: ViewPropTypes.style,
  rightIconStyle: ViewPropTypes.style,
  onPressRightIcon: PropTypes.func,
  onPressLeftIcon: PropTypes.func,
  hasBackButton: PropTypes.bool,
  headerRightButtonTitle: PropTypes.string,
  headerLeftButtonTitle: PropTypes.string,
  headerCenter: PropTypes.element,
};

// HeaderBar.defaultProps = {
//   noFeedback: false,
//   ripple: false,
//   white: false,
// };
