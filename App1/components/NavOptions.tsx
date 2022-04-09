import { View, Button, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: 2,
    title: 'I\'m Feeling Lucky',
    screen: 'MapScreen',
  },
  {
    id: 1,
    title: 'Google Search',
    screen: 'MapScreen',
  }
]
const NavOptions = (props: NavProps) => {
    const navigation = useNavigation();

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.term && navigation.navigate(item.screen as never, {
              term: props.term,
            } as never)}
            style={styles.button}>
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    top:20,
  },
  button: {
    backgroundColor: '#263238',
    padding: 10,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,

  },
  text: {
    color: "white",
    textAlign:"center",
  },
});

type NavProps = {
  term: string;
}

export default NavOptions