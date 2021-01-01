import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Home = () => {
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Icon name="rocket" size={30} color="#900" />
    </SafeAreaView>
  );
};

export default Home;
