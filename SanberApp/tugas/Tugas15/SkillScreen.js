import React from 'react';
import {StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import skillData from './skillData.json';

export default class App extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={{resizeMode: "contain",
                        width:200}} 
                        source={require('./images/logo.png')} />
                    </View>
                    <View style={styles.userContainer}>
                        <View>
                            <Image style={{resizeMode: "contain",
                            width: 80,
                            height:80}} 
                            source={require('./images/danie.png')} />
                        </View>
                        <View>
                            <Text style={{textAlign: "left",
                            fontSize: 15,
                            color: "#003366",
                            paddingTop: 20}}>Hai,</Text>
                            <Text style={{textAlign: "left",
                            fontSize: 15,
                            color: "#003366",
                            fontWeight: "bold"}}>Danie Anwar</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{padding:5,
                        paddingTop: 80}}>
                            <Text style={{textAlign: "left",
                            fontSize: 45,
                            color: "#003366"}}>SKILL</Text>
                            <View style={{ width: 'auto',
                            height:5,
                            backgroundColor: "#3ec6ff"}}>   
                            </View>
                        </View>
                        
                        <View style={styles.skillContainer}>
                            <View style={{paddingRight:5}}>
                                <View style={styles.skillTag}> 
                                    <Text style={{fontSize: 11}}>Library / Framework</Text> 
                                </View>
                            </View>
                            <View style={{paddingRight:5}}>
                                <View style={styles.skillTag}> 
                                    <Text style={{fontSize: 11}}>Bahasa Pemrograman</Text> 
                                </View>
                            </View>
                            <View style={{paddingRight:5}}>
                                <View style={styles.skillTag}> 
                                    <Text style={{fontSize: 11}}>Teknologi</Text> 
                                </View>
                            </View>
                        </View>
                    </View>
                    <FlatList
                    data={skillData.items}
                    renderItem={({ item }) => (   
                        <View style={{padding: 5}}>
                            <View style={{paddingBottom: 5}}>
                                <View style={styles.skillCard}>
                                    <View style={{flexDirection:'row',
                                    alignItems:'center',
                                    paddingRight: 20}}>
                                        <IconCommunity name={item.iconName} size={70} style={{color: "#003366"}}/>
                                    </View>
                                    <View style={{width:140}}>
                                        <View>
                                            <Text style={{fontSize: 20,
                                            color: "#003366",
                                            fontWeight: "bold"}}>{item.skillName}</Text>
                                            <Text style={{color: "#3ec6ff"}}>{item.categoryName}</Text>
                                        </View>
                                        <View>
                                            <Text style={{fontSize: 40,
                                            color: "#ffffff",
                                            fontWeight: "bold",
                                            textAlign: "right"}}>{item.percentageProgress}</Text>
                                        </View>
                                    </View>
                                    <View style={{flexDirection:'row',
                                    alignItems:'center',
                                    paddingLeft: 20}}>
                                        <Icon name="chevron-right" size={70} style={{color: "#003366"}}/>
                                    </View>
                                </View>
                            </View>
                        </View>                    
                            
                    )}
                    />
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 2,
        backgroundColor: '#FFFFFF',
        padding: 10
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    userContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 80
    },
    skillContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: 5,
        paddingBottom: 50
    },
    skillTag: {
        height: 40,
        backgroundColor: "#b4e9ff",
        padding: 10,
        color: "#003366",
        borderRadius:10
    },
    skillCard: {
        width: 'auto',
        height:120,
        backgroundColor: "#b4e9ff",
        borderRadius:10,
        flexDirection: 'row',
        justifyContent: 'center',
        padding:10,
        alignItems: "center"     
    }
});
