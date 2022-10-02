import {Text, View, Button, StyleSheet} from 'react-native';

function PhotoPage () {

    // bcvhfg
    return (
        <View>
            <Text>PhotoPage</Text> 
            <Button
            title="Knap tekst"
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
