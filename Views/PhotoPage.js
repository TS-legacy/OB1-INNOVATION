import {Text, View, Button, StyleSheet} from 'react-native';

function PhotoPage () {
    return (
        <View>
            <Text>PhotoPage</Text> //Creation of page with company Photos
            <Button
            title="Test"
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

  export default PhotoPage
