import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.containerWelcome}>
                    <Text style={{fontSize: 40,
                    fontWeight: "bold",
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: {width: -1, height: 1},
                    textShadowRadius: 5 }}>Welcome</Text>
                    <Text>Sign Up to Continue</Text>
                </View>
                <View style={styles.containerForm}>
                    <View style={styles.containerInput}>
                        <View style={styles.input}>
                            <Text style={styles.label}>Name</Text>
                            <TextInput
                                placeholder="Input Name"
                            />
                            <View style={styles.breakLine}></View>
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.label}>E-Mail</Text>
                            <TextInput
                                placeholder="Input E-Mail"
                            />
                            <View style={styles.breakLine}></View>
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.label}>Phone Number</Text>
                            <TextInput
                                placeholder="Input Phone Number"
                            />
                            <View style={styles.breakLine}></View>
                        </View>

                        <View style={styles.input}>
                            <Text style={styles.label}>Password</Text>
                            <TextInput secureTextEntry={true}
                                placeholder="Input Password"
                            />
                            <View style={styles.breakLine}></View>
                        </View>
                    </View>
                    <View style={styles.bottomContainer}>
                      <TouchableOpacity
                          style={styles.buttonMasuk}
                          >
                          <Text style={{color: "white"}}>Sign Up</Text>
                      </TouchableOpacity>
                      <Text style={{textAlign: 'center', paddingTop:10}}>Already have an acount ? <Text style={{color: 'red'}} 
                      onPress={() =>
                      this.props.navigation.navigate('Login')
                            }>Sign In</Text></Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center' ,
        padding: 10
    },
    containerWelcome: {
        height: 100,
    },
    containerForm: {
        borderRadius: 10,
        elevation: 5,
        padding: 10
    },
    containerInput: {
        padding: 10,
    },
    label: {
        color: "#003366",
        marginBottom: 5
    },
    breakLine: {
        width: 'auto',
        height: 2,
        backgroundColor: "#003366"
    },
    input: {
        paddingBottom: 5
    },
    buttonMasuk: {
        width:'auto',
        alignItems: "center",
        backgroundColor: "#f77866",
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius:10
    },
    bottomContainer: {
        padding: 20,
        paddingTop: 50,
        paddingBottom: 50
    }


});