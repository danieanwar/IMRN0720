import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


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
                    <Text>Sign In to Continue</Text>
                </View>
                <View style={styles.containerForm}>
                    <View style={styles.containerInput}>
                        <View style={styles.input}>
                            <Text style={styles.label}>E-Mail</Text>
                            <TextInput
                                placeholder="Input E-Mail"
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
                        <Text style={{textAlign: 'right'}}>Forgot Password ?</Text>
                    </View>
                    <View style={styles.bottomContainer}>
                      <TouchableOpacity
                          style={styles.buttonMasuk}
                          >
                          <Text style={{color: "white"}} onPress={() =>
                      this.props.navigation.navigate('Home')
                            }>Sign In</Text>
                      </TouchableOpacity>
                      <Text style={{textAlign: 'center', paddingTop: 20}}>-OR-</Text>
                      <View style={styles.loginWith}>
                        <View style={{paddingRight: 5}}>
                            <TouchableOpacity
                                style={styles.button}
                                >
                                <Icon style={{paddingRight:10}} name="facebook" size={25}/>
                                <Text style={{justifyContent: 'center'}}>Facebook</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{paddingLeft: 5}}>
                        <TouchableOpacity
                            style={styles.button}
                            >
                            <Icon style={{paddingRight:10}} name="google" size={25}/>
                            <Text style={{justifyContent: 'center'}}>Google</Text>
                        </TouchableOpacity>
                        </View>
                      </View>
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
        borderRadius: 1,
        elevation: 4,
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
    },
    loginWith: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
        paddingTop: 20
    },
    button: {
        width:'auto',
        alignItems: "center",
        flexDirection: 'row',
        padding: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius:10,
        borderWidth: 2
    }


});