import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView} from 'react-native';


export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                    <View style={styles.profile}>
                        <Text style={styles.Title}>Tentang Saya</Text>
                        <Image style={{width: 200,
                        resizeMode: "contain",
                        height: 200,
                        }} 
                        source={require('./images/danie.png')} />
                        <Text style={{textAlign: "center",
                        fontSize: 25,
                        color: "#003366",
                        fontWeight: "bold"}}>Danie Anwar</Text>
                        <Text style={{textAlign: "center",
                        fontSize: 15,
                        color: "#3ec6ff",
                        fontWeight: "bold"}}>React Native Developer</Text>
                    </View>
                    <View style={styles.portofolio}>
                        <View style={styles.portofolioCard}>
                            <Text style={{textAlign: "left",
                            fontSize: 15,
                            color: "#003366",
                            fontWeight: "bold"}}>Portfolio</Text>
                            <View style={{ width:280,
                            height:2,
                            backgroundColor: "#003366"}}>   
                            </View>
                            <View style={{ paddingTop: 5,
                            flexDirection: 'row',
                            alignItems: 'center'}}>
                                <View style={{width: 120,
                                height:180,
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <Image style={{width: 80,
                                    height:80,
                                    resizeMode: "contain"
                                    }} 
                                    source={require('./images/icon/gitlab.png')} />
                                    <Text style={{paddingTop:20}}>@danieanwar</Text>
                                </View>
                                <View style={{width: 120,
                                height:180,
                                flex: 1,
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <Image style={{width: 80,
                                    height:80,
                                    resizeMode: "contain"
                                    }} 
                                    source={require('./images/icon/github.png')} />
                                    <Text style={{paddingTop:20}}>@danieanwar</Text>
                                </View>
                            </View>
                        </View>
                        
                    </View>
                    <View style={styles.contact}>
                        <View style={styles.contactCard}>
                            <Text style={{textAlign: "left",
                            fontSize: 15,
                            color: "#003366",
                            fontWeight: "bold"}}>Hubungi Saya</Text>
                            <View style={{ width:280,
                            height:2,
                            backgroundColor: "#003366"}}>   
                            </View>
                            <View style={{ paddingTop: 5,
                            flexDirection: 'column',
                            alignItems: 'center'}}>
                                <View style={{width: 290,
                                height:180,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <Image style={{width: 80,
                                    height:80,
                                    resizeMode: "contain"
                                    }} 
                                    source={require('./images/icon/fesbuk.png')} />
                                    <Text style={{width: 120, paddingLeft:20}}>facebook.com/dannywentz.fob</Text>
                                </View>
                                <View style={{width: 280,
                                height:60,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <Image style={{width: 80,
                                    height:80,
                                    resizeMode: "contain"
                                    }} 
                                    source={require('./images/icon/insagram.png')} />
                                    <Text style={{width: 120, paddingLeft:20}}>@danieanwar_</Text>
                                </View>
                                <View style={{width: 280,
                                height:180,
                                flex: 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center'}}>
                                    <Image style={{width: 80,
                                    height:80,
                                    resizeMode: "contain"
                                    }} 
                                    source={require('./images/icon/cwitter.png')} />
                                    <Text style={{width: 120, paddingLeft:20}}>@dngrszmbie</Text>
                                </View>
                            </View>
                        </View>
                    </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 2,
        backgroundColor: '#FFFFFF',
    },
    Title: {
        textAlign: "center",
        color: "#003366",
        paddingTop: 10,
        fontSize: 30,
        color: "#003366",
        fontWeight: "bold" 
    },
    profile: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start'
    },
    portofolio: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,    
    },
    portofolioCard: {
        width:300,
        backgroundColor: "#efefef",
        padding: 10,
        color: "#003366",
        borderRadius:10
    },
    contact: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingBottom: 10    
    },
    contactCard: {
        width:300,
        backgroundColor: "#efefef",
        padding: 10,
        color: "#003366",
        borderRadius:10
    }

});