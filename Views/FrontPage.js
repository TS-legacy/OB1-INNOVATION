import {View, StyleSheet, Button, Text} from 'react-native';
import * as React from 'react';

function FrontPage ({navigation}) {
  //dddd
    return (
        <View style={StyleSheet.container}>
            <Text>Photo Page</Text>
            <Button
            title="Tryk her"
            onPress={() => navigation.navigate('Photos')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: '#fff',

    },
  });

export default FrontPage