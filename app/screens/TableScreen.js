import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native'
import Teams from './Teams'

function TableScreen(props) {

    const [data, setData] = useState();

    useEffect(() => {
        fetch('http://192.168.1.107:3000/routes')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
    }, []);

    return (

        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.text}>
                    <View>
                        <Text style={styles.title}>Premier League Table</Text>
                        <Text style={styles.season}>Season 2020/21</Text>
                    </View>
                    <Image
                        style={styles.logo}
                        source={require("../assets/logo.png")}
                    />
                </View>

                <View style={styles.subtitle}>
                    <Text style={styles.club}>Club</Text>
                    <Text style={styles.mp}>MP</Text>
                    <Text style={styles.w}>W</Text>
                    <Text style={styles.l}>L</Text>
                    <Text style={styles.gf}>GF</Text>
                    <Text style={styles.ga}>GA</Text>
                    <Text style={styles.pts}>Pts</Text>
                </View>

            </View>
            <View style={styles.footer}>
                <View>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (

                            <Teams order={item.order} name={item.name}
                                mp={item.mp} w={item.w}
                                l={item.l} gf={item.gf} ga={item.ga} pts={item.pts}
                            />
                        )}
                    />
                    {/* )} */}
                    <View style={styles.uefa}>
                        <View style={styles.chcolors}>
                        </View>
                        <Text>UEFA Champions League group stage</Text>
                    </View>
                    <View style={styles.eu}>
                        <View style={styles.eucolors}>
                        </View>
                        <Text>Europa League group stage</Text>
                    </View>
                    <View style={styles.relegation}>
                        <View style={styles.rcolors}>
                        </View>
                        <Text>Relegation</Text>
                    </View>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#A5ADB3',
    },
    footer: {
        height: '64%',
        fontSize: 20,
        paddingHorizontal: '5%',
        marginTop: '-5%',
    },
    header: {
        height: '25%',
        paddingTop: '10%',
        paddingHorizontal: '5%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    season: {
        fontSize: 20,
        fontWeight: 'bold',
        opacity: 0.5,
    },
    logo: {
        width: '17%',
        height: "100%",
        borderRadius: 20,
        opacity: 0.9,
    },
    text: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: '1%',
    },
    subtitle: {
        marginTop: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    club: {
        fontSize: 15,
        marginLeft: '2%',
    },
    mp: {
        fontSize: 15,
        marginLeft: '36%',
    },
    w: {
        fontSize: 15,
        marginLeft: '4%',
    },
    l: {
        fontSize: 15,
        marginLeft: '4%',
    },
    gf: {
        fontSize: 15,
        marginLeft: '4%',
    },
    ga: {
        fontSize: 15,
        marginLeft: '4%',
    },
    pts: {
        fontSize: 15,
        marginLeft: '4%',
    },
    chcolors: {
        backgroundColor: '#4285F4',
        width: 10,
        height: 10,
        top: 5,
        marginRight: '1%',
        marginLeft: '1%',
    },
    uefa: {
        top: 5,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    eucolors: {
        backgroundColor: '#FA7B17',
        width: 10,
        height: 10,
        top: 5,
        marginRight: '1%',
        marginLeft: '1%',
    },
    eu: {
        top: 5,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },
    rcolors: {
        backgroundColor: '#EA4335',
        width: 10,
        height: 10,
        top: 5,
        marginLeft: '1%',
        marginRight: '1%',
    },
    relegation: {
        top: 5,
        width: Dimensions.get('window').width,
        flexDirection: 'row',
    },

})

export default TableScreen;