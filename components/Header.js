import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';

import Colors from '../constants/Colors'
import TitleText from '../components/TitleText'

const Header = props => {
    return(
      <View style={{...styles.headerBase, ...Platform.select({ios: styles.headerIOS, android: styles.headerAndroid})}}>
        <TitleText style={styles.headerTitle}>{props.title}</TitleText>
      </View>
    );
};

const styles = StyleSheet.create({
  headerIOS:{
    backgroundColor: 'white', 
    borderBottomColor : "#ccc",
    borderBottomWidth : 1
  },
  headerAndroid: {
    backgroundColor: Colors.primary, 
    borderBottomColor : 'transparent',
    borderBottomWidth: 0
  },
  headerBase : {
    width : '100%',
    height: 90,
    paddingTop: 36,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerTitle: {
    fontSize: 20,
    marginVertical: 10,
    color: Platform.OS == "ios" ? Colors.primary : 'white'
  }

});

export default Header;