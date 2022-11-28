import { View, Text, Button , StyleSheet, Image, TextInput, StatusBar} from 'react-native'
import React, {useState, useEffect} from 'react'

import { BarCodeScanner } from 'expo-barcode-scanner';

import {getDatabase, ref, set, push, Database} from 'firebase/database'


const ScanScreen = () => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState("Not yet scanned");

    const [description, setDescription] = useState('')
    const [id, setId] = useState('')
    /*
    useEffect(() => {
      askPermissions();
    }, [hasPermission]);
    */


    function storeScannedItems(description){
        const db = getDatabase();
        const reference = ref(db,'scannedItems');
        
        const newRef = push(reference);
        set(newRef, {
            id: newRef.key,
            description: description,
        })
        .then(()=> console.log('Data saved!'))

        setDescription('')
        setId('')
    }


    const askPermissions = () => {
      (async () => {
        console.log("Asking for permissions");
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == "granted");
      })();
    };
  
    const handleBarCodeScanned = ({ type, data }) => {
      setScanned(true);
      storeScannedItems(data);
      alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };
    if (hasPermission && hasPermission) {
        console.log("Camera opened, permission true");
        return (
          <View>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={{ height: 400, width: 400 }}
            />
          </View>
        );
      }
  
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            padding: 100,
          }}
        >
          <Button title="Open camera" onPress={askPermissions} />
          <StatusBar style="auto" />
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default ScanScreen