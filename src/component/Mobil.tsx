import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Mobil = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Quantum Nexus</Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('../img/2.png')}
                        style={styles.image}
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.title}>Quantum Nexus</Text>
                <Text style={styles.description}>
                    Mobil adalah kendaraan bermotor yang dirancang untuk digunakan di jalan raya. Mobil modern biasanya memiliki empat roda dan ditenagai oleh mesin bensin atau diesel, meskipun teknologi mobil listrik juga semakin populer. Mobil tidak hanya berfungsi sebagai alat transportasi, tetapi juga menjadi simbol status dan gaya hidup.
                </Text>
                <Text style={styles.price}>$4000</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Beli</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEC',
    },
    header: {
        width: 430,
        height: 441,
        backgroundColor: '#F1E4C3',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        marginTop: 20,
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
    },
    bottomContainer: {
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
    },
    description: {
        fontSize: 12,
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 10,
        textAlign: 'center',
    },
    button: {
        backgroundColor: '#C6A969',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Mobil;
