import React from "react";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground, Animated } from "react-native";
import Turn from "./Turn";

export default class Wheel extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.content}>
                    <ImageBackground
                        style={styles.imagebg}
                        source={require('../images/background.jpg')}>

                        <View style={styles.header}>
                            <View style={styles.headerLeft}>
                                <TouchableOpacity>
                                    <Image style={styles.back} source={require('../images/back.png')}></Image>
                                </TouchableOpacity>
                                <Text style={styles.titleLeft}>Quay Là Trúng</Text>
                            </View>
                            <TouchableOpacity style={styles.headerRight}>
                                <Text style={styles.textHeaderRight}>2.356</Text>
                                <Image style={styles.imgHeaderRight} source={require('../images/coin.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.top}>
                            <TouchableOpacity style={styles.topLeft}>
                                <Image style={styles.imgTopLeft} source={require('../images/book.png')}></Image>
                                <Text style={styles.textTopLeft}>luật chơi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.topRight}>
                                <Image style={styles.imgTopRight} source={require('../images/gift.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.topRightBelow}>
                            <Image style={styles.imgTopRightBelow} source={require('../images/cup.png')}></Image>
                        </TouchableOpacity>

                        <Image
                            style={styles.imgHexagon}
                            source={require('../images/hexagon.png')}>
                        </Image>
                        <Image
                            style={styles.imgArrow}
                            source={require('../images/arrow.png')}>
                        </Image>

                        <View style={styles.turn}>
                            <Turn style={styles.image}>
                            </Turn>
                        </View>

                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Wheel1')}
                            style={styles.btnTurn}>
                            <Text style={styles.textTurn}>QUAY</Text>
                        </TouchableOpacity>

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
        maxWidth: '50%'
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
    top: {
        flexDirection: 'row'
    },
    topLeft: {
        position: 'relative',
        marginRight: 'auto'
    },
    imgTopLeft: {
        width: 40,
        height: 40,
        marginRight: 'auto'
    },
    textTopLeft: {
        width: 100,
        position: 'absolute',
        zIndex: 2,
        color: 'white',
        marginLeft: 20,
        marginTop: 25
    },
    topRight: {
        marginLeft: 'auto'
    },
    imgTopRight: {
        width: 40,
        height: 40
    },
    topRightBelow: {
        marginTop: 20,
        marginBottom: 20
    },
    imgTopRightBelow: {
        width: 40,
        height: 40,
        marginLeft: 'auto'
    },
    mid: {
        position: 'relative'
    },
    imgHexagon: {
        width: 37,
        height: 40,
        position: 'absolute',
        zIndex: 4,
        alignSelf: 'center',
        marginTop: 310,
        shadowColor: '#000000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.9,
        shadowRadius: 1,
    },
    imgArrow: {
        width: 50,
        height: 40,
        position: 'absolute',
        alignSelf: 'center',
        marginTop: 165,
        zIndex: 3
    },
    turn: {
        transform: [{ rotate: '15deg' }]
    },
    image: {
        alignSelf: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    btnTurn: {
        marginTop: 50,
        textAlign: 'center'
    },
    textTurn: {
        width: '80%',
        alignSelf: 'center',
        paddingBottom: 8,
        paddingTop: 8,
        marginBottom: 30,
        borderRadius: 30,
        backgroundColor: '#F78A2F',
        color: '#913600',
        fontWeight: 'bold',
        fontSize: 30
    },
    bottom: {
        alignSelf: 'center',
        flexDirection: 'row',
        marginBottom: 70
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