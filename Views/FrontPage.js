import {Button, Text, View, StyleSheet} from 'react-native';

function FrontPage ({navigation}) {
    return (
        <View style={StyleSheet.container}>
            <Text>Photo Page</Text>
            <Button
            title="Klik her"
            onPress={() => navigation.navigate('Photos')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default FrontPage