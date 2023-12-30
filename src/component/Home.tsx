import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Image
                source={require('../img/1.png')}
                style={styles.image}
            />
            <Text style={styles.description}>
                Mobil adalah kendaraan bermotor yang dirancang untuk digunakan di jalan raya. Mobil modern biasanya memiliki empat roda dan ditenagai oleh mesin bensin atau diesel, meskipun teknologi mobil listrik juga semakin populer. Mobil tidak hanya berfungsi sebagai alat transportasi, tetapi juga menjadi simbol status dan gaya hidup.
            </Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Mobil')}
            >
                <Text style={styles.buttonText}>Beli</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFEC',
    },
    image: {
        width: 300,
        height: 200,
        resizeMode: 'cover',
        marginBottom: 20,
    },
    description: {
        color: 'black',
        fontSize: 12,
        textAlign: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#C6A969',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default Home;
