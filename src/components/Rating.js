import React from 'react';
import {View, FlatList, Image, StyleSheet} from 'react-native';

const Rating = ({ratingCount}) => {
  return (
    <View style={styles.ratngContainerStyle}>
      <FlatList
        contentContainerStyle={styles.ratingWrspperStyle}
        horizontal={true}
        data={Array(ratingCount).fill(1)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={() => {
          return (
            <Image
              source={require('../assets/filledStar.png')}
              style={styles.starImageStyle}
            />
          );
        }}
      />
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  starImageStyle: {width: 15, height: 15},
  ratingWrspperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratngContainerStyle: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: 'white',
  },
});
