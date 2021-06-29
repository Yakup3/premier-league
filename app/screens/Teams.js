import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Teams(props) {
    const coloring = () => {
        if (props.order === 1 || props.order === 2 || props.order === 3 || props.order === 4) {
            return <View style={styles.chleague}></View>
        }
        else if (props.order == 6 || props.order == 5) {
            return <View style={styles.euleague}></View>
        }
        else if (props.order == 18 || props.order == 19 || props.order == 20) {
            return <View style={styles.relegation}></View>
        }
        else {
            return <View style={styles.others}></View>
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.left}>
                {coloring()}
                <Text style={styles.order}>{props.order}</Text>
                <Text style={styles.name}>{props.name}</Text>
            </View>
            <View style={styles.right}>
                <Text style={styles.mp}>{props.mp}</Text>
                <Text style={styles.w}>{props.w}</Text>
                <Text style={styles.l}>{props.l}</Text>
                <Text style={styles.gf}>{props.gf}</Text>
                <Text style={styles.ga}>{props.ga}</Text>
                <Text style={styles.pts}>{props.pts}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EAEAEA',
        padding: '4%',
        width: '100%',
        borderRadius: 8,
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: '0.5%',
    },
    chleague: {
        backgroundColor: '#4285F4',
        height: '245%',
        width: '4%',
        marginTop: '-10%',
        marginLeft: '-10%',
        marginRight: '4%',
    },
    euleague: {
        backgroundColor: '#FA7B17',
        height: '245%',
        width: '4%',
        marginTop: '-10%',
        marginLeft: '-10%',
        marginRight: '4%',
    },
    relegation: {
        backgroundColor: '#EA4335',
        height: '245%',
        width: '4%',
        marginTop: '-10%',
        marginLeft: '-10%',
        marginRight: '4%',
    },
    others: {
        backgroundColor: '#EAEAEA',
        height: '245%',
        width: '4%',
        marginTop: '-10%',
        marginLeft: '-10%',
        marginRight: '4%',
    },
    left: {
        flexDirection: 'row',
        width: '44%',
    },
    right: {
        width: '51%',
        marginLeft: '2%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: '15%',
    },
    order: {
        fontSize: 15,
    },
    name: {
        fontSize: 15,
        textAlign: 'left',
        marginLeft: '4%',
    },
    mp: {
        fontSize: 15,
    },
    w: {
        fontSize: 15,
    },
    l: {
        fontSize: 15,
    },
    gf: {
        fontSize: 15,
    },
    ga: {
        fontSize: 15,
    },
    pts: {
        fontSize: 15,
    }
});

export default Teams;