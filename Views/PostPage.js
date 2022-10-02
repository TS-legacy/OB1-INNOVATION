import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet, ScrollView } from 'react-native';

function PostPage() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((json) => setPosts(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Post page</Text>
        {isLoading ? (
          <Text>Vent mens vi henter dine posts</Text>
        ) : (
          posts.map((posts) => (
            <View>
              <Text>{posts.title}</Text>
            </View>
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
});

export default PostPage;
