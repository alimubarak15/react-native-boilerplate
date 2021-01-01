import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Setting = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Setting Screen</Text>
      <Icon name="rocket" size={20} color="#900" />

      <TouchableOpacity onPress={() => nav.navigate('Profile')}>
        <Text>Go to Profile Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Setting;
