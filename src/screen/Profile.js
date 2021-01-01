import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Profile = () => {
  const nav = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
