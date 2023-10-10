import React, {useState} from 'react';
import { Text, SafeAreaView, Button, StyleSheet, View} from 'react-native';

export default function Contador() {
    const [result, setresult] = useState(0);
    return (
        
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.tittle}>O contador é: {result}</Text>

                <View style={styles.btnValor}>
                    <View style={styles.btn}>
                        <Button title='◀' onPress={() => setresult(result-1)}></Button>
                    </View>
                    <View style={styles.btnR}>
                        <Button title='Reset' onPress={() => setresult(0)}></Button>
                    </View>
                    <View style={styles.btn}>
                        <Button title='▶' onPress={() => setresult(result+1)}></Button>
                    </View>
                </View>
            </View>
        </SafeAreaView>   
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box:{
    backgroundColor: '#004AAD',
    border: '#000',
    width: 300,
    padding: 15,
    borderRadius: 10,
    elevation: 4,
    ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },   
  },
  tittle: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#fff',
  },
  btnValor: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 5,
  },
  btn: {
    width: 50,
  },
  btnR: {
    width: 150,
  }
});
