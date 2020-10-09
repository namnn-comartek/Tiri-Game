import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, Animated, Easing } from "react-native";
import Turn from "./Turn";

export default class Wheel extends React.Component {

    constructor() {
        super()
        this.spinValue = new Animated.Value(0)
    }

    spin = () => {
        this.spinValue.setValue(0)
        Animated.timing(
            this.spinValue,
            {
                toValue: 40,
                duration: 15000,
                useNativeDriver: true,
                easing: Easing.bezier(.65, .01, .50, .99)
            }
        ).start()
    }

    render() {

        const spin = this.spinValue.interpolate({
            inputRange: [0, 2],
            outputRange: ['15deg', '375deg']  
        })

        return (
            <View>
                <View style={styles.content}>
                    <ImageBackground
                        style={styles.imagebg}
                        source={require('../images/background.jpg')}>

                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Wheel')}>
                                    <Image style={styles.back} source={require('../images/back.png')}></Image>
                                </TouchableOpacity>
                                <Text style={styles.titleLeft}>Quay Là Trúng</Text>
                            </View>

                            <TouchableOpacity style={styles.headerRight}>
                                <Text style={styles.textHeaderRight}>2.356</Text>
                                <Image style={styles.imgHeaderRight} source={require('../images/coin.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.topLeft}>
                            <Image style={styles.imgTopLeft} source={require('../images/book.png')}></Image>
                        </TouchableOpacity>

                        <View style={styles.mid}>
                            <TouchableOpacity
                                onPress={this.spin}
                                style={styles.btnTurn}>
                                <Text style={styles.textTurn}>QUAY</Text>
                            </TouchableOpacity>

                            <Image
                                style={styles.imgArrow}
                                source={require('../images/arrow.png')}>
                            </Image>

                            <Animated.View
                                style={{ marginTop: 20, transform: [{ rotate: spin }] }}>
                                <Turn>
                                </Turn>
                            </Animated.View>

                        </View>

                        <View style={styles.bottom}>
                            <Text style={styles.textBottom1}>Lượt quay còn lại:</Text>
                            <Text style={styles.textBottom2}>08</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        alignSelf: 'center',
        maxWidth: '50%',
    },
    text: {
        marginBottom: 10,
        textAlign: 'center'
    },
    imagebg: {
        padding: 10
    },
    header: {
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10
    },
    headerLeft: {
        flexDirection: 'row'
    },
    back: {
        width: 20,
        height: 20,
        marginRight: 10
    },
    titleLeft: {
        color: 'white'
    },
    headerRight: {
        marginLeft: 'auto',
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'row'
    },
    textHeaderRight: {
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 10
    },
    imgHeaderRight: {
        width: 15,
        height: 15,
        margin: 2
    },
    topLeft: {
        flexDirection: 'row'
    },
    imgTopLeft: {
        width: 40,
        height: 40,
        marginRight: 'auto'
    },
    mid: {
        position: 'relative',
    },
    btnTurn: {
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 140,
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        position: 'absolute',
        zIndex: 3,
        backgroundColor: '#F78A2F',
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
    },
    textTurn: {
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
        color: '#ffffff',
    },

    imgArrow: {
        width: 50,
        height: 40,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 5,
        zIndex: 3
    },

    bottom: {
        marginTop: 20,
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 245,
    },
    textBottom1: {
        marginRight: 5,
        textAlign: 'center',
        color: 'white'
    },
    textBottom2: {
        color: '#F6CF0C',
        fontWeight: 'bold'
    }
});