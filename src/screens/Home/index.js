import React from 'react';

import {View, FlatList, Dimensions} from 'react-native';

import Post from '../../components/Post';

import posts from '../../../data/posts';

const Home = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={windowHeight - (windowHeight % 40)}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default Home;
