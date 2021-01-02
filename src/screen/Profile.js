import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {addItemAction, deleteItemAction} from '../redux/reducer/rootReducer';

const Profile = () => {
  const dispatch = useDispatch();
  const nav = useNavigation();
  useEffect(() => {
    dispatch(addItemAction('test2'));
  }, []);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
      <TouchableOpacity onPress={() => nav.navigate('Home')}>
        <Text>Go to Home Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(deleteItemAction())}>
        <Text>Delete Item</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;
