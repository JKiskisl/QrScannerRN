import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler'
import {getDatabase, ref, set, push, Database, onValue, on} from 'firebase/database'


const AllScanned = ({navigation}) => {
    const [scannedItems, setScannedItems] = useState([])

    const db = getDatabase()

  
    useEffect(() => {

        const dbRef = ref(db,'scannedItems');
        onValue(dbRef, (snapshot) => {
        setScannedItems([])
        snapshot.forEach(child => {
          const newObj = {
            id: child.val().id,
            description: child.val().description,
          }
          setScannedItems(emptyArray => [...emptyArray, newObj])
        })
      })
    }, [])
  
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Posts</Text>
          <FlatList
            data={scannedItems}
            renderItem={item => {
              return (
                <View style={styles.posts}>
                  <Button title={item.item.description}
                  style={styles.name} 
                  onPress={()=> navigation.navigate('DeleteorUpdate', 
                    {postpass: item.item})}>
                  </Button>
                </View>
              )
            }}
            keyExtractor={item => item.id}
            scrollEnabled={true}
          />
        </View>
      )
}

export default AllScanned

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    postsContainer: {
      borderTopWidth: 3,
      borderTopColor: '#ddd',
      flex: 1,
    },
    posts: {
      padding: 20,
      backgroundColor: '#ededed',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 5,
    },
    name: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    price: {
      fontSize: 14,
      color: '#999',
    },
    description: {
      fontSize: 14,
      color: '#999',
    },
    title: {
      paddingTop: 30,
      paddingBottom: 20,
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
    },
  })