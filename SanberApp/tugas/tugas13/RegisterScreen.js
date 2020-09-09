import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';


export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} 
                    source={require('./images/logo.png')} />
                    <Text style={styles.centerText1}>Register</Text>
                </View>
                <View style={styles.formContainer}>
                  <View style={styles.inputContainer}>
                    <Text style={styles.label}>Username</Text>
                    <TextInput 
                        placeholder="Input Username"
                        style={styles.input}
                        />
                    <Text style={styles.label}>E-Mail</Text> 
                    <TextInput 
                        placeholder="Input E-Mail"
                        style={styles.input}
                        />
                    <Text style={styles.label}>Password</Text> 
                    <TextInput 
                        placeholder="Input Password"
                        style={styles.input}
                        />
                    <Text style={styles.label}>Ulangi Password</Text> 
                    <TextInput 
                        placeholder="Input Password Ulang"
                        style={styles.input}
                        />
                  </View>
                  <View style={styles.bottomContainer}>
                      <TouchableOpacity
                          style={styles.buttonDaftar}
                          >
                          <Text style={{color: '#ffffff'}}>Daftar ?</Text>
                      </TouchableOpacity>
                      <Text style={styles.centerText2}>atau</Text>
                      <TouchableOpacity
                          style={styles.buttonMasuk}
                          onPress={() =>
                            this.props.navigation.navigate('Login')
                          }>
                          <Text>Masuk</Text>
                      </TouchableOpacity>
                                           
                  </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 2,
        backgroundColor: '#FFFFFF' 
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    centerText1: {
      textAlign: "center",
      color: "#003366",
      paddingTop: 10,
      fontSize: 30,
      color: "#003366"
      
    },
    formContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        paddingTop: 40
    },
    input: {
        width:300,
        height: 50,
        backgroundColor: 'rgba(255,255,255,0.7)',
        marginBottom: 10,
        color: '#3EC6FF',
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#003366'
    },
    label: {
        color: "#003366",
        marginBottom: 5
    },
    centerText2: {
        textAlign: "center",
        color: "#003366",
        paddingTop: 10,
        marginBottom: 10
    },
    buttonMasuk: {
        width:200,
        alignItems: "center",
        backgroundColor: "#3ec6ff",
        padding: 10,
        color: "#003366",
        borderRadius:10
    },
    buttonDaftar: {
        width: 200,
        alignItems: "center",
        backgroundColor: "#003366",
        color: "#ffffff",
        padding: 10,
        borderRadius:10
    },
    bottomContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    inputContainer: {
      flexGrow: 1,
      justifyContent: 'flex-start'
    }

});