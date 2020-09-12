import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';


export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBar}>
                    
                </View>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.tabItem}>
                    <Icon name="home" size={25}/>
                    <Text style={styles.tabTitle}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                    <Icon name="shoppingcart" size={25}/>
                    <Text style={styles.tabTitle}>Chart</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                    <Icon name="mail" size={25}/>
                    <Text style={styles.tabTitle}>Message</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                    <Icon name="profile" size={25}/>
                    <Text style={styles.tabTitle}>Profile</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1
    },
    navBar:{
        flex: 1
    },
    tabBar: {
        backgroundColor: 'white',
        height: 60,
        borderTopWidth: 0.5,
        borderColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-around'
      },
      tabItem: {
        alignItems: 'center',
        justifyContent: 'center'
      },
      tabTitle: {
        fontSize: 11,
        color: '#3C3C3C',
        paddingTop: 4
      }


});