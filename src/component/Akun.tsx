import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Akun = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <Ionicons name="search" size={20} color="black" />
                <Text style={styles.searchText}>Pencarian</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.itemContainer}>
                    <View style={styles.item}>
                        <Image
                            source={require('../img/2.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemName}>Nama Barang 1</Text>
                        <Text style={styles.itemPrice}>$100</Text>
                    </View>
                    <View style={styles.item}>
                        <Image
                            source={require('../img/2.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemName}>Nama Barang 2</Text>
                        <Text style={styles.itemPrice}>$150</Text>
                    </View>
                    <View style={styles.item}>
                        <Image
                            source={require('../img/2.png')}
                            style={styles.itemImage}
                        />
                        <Text style={styles.itemName}>Nama Barang 3</Text>
                        <Text style={styles.itemPrice}>$120</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionText}>
                    Mobil adalah kendaraan bermotor yang dirancang
                    untuk digunakan di jalan raya. Mobil modern biasanya
                    memiliki empat roda dan ditenagai oleh mesin bensin
                    atau diesel, meskipun teknologi mobil listrik juga semakin
                    populer. Mobil tidak hanya berfungsi sebagai alat
                    transportasi, tetapi juga menjadi simbol status dan
                    gaya hidup.
                </Text>
                <Text style={styles.descriptionText}>
                    Mobil adalah kendaraan bermotor yang dirancang
                    untuk digunakan di jalan raya. Mobil modern biasanya
                    memiliki empat roda dan ditenagai oleh mesin bensin
                    atau diesel, meskipun teknologi mobil listrik juga semakin
                    populer. Mobil tidak hanya berfungsi sebagai alat
                    transportasi, tetapi juga menjadi simbol status dan
                    gaya hidup.
                </Text>
                <Text style={styles.descriptionText}>
                    Mobil adalah kendaraan bermotor yang dirancang
                    untuk digunakan di jalan raya. Mobil modern biasanya
                    memiliki empat roda dan ditenagai oleh mesin bensin
                    atau diesel, meskipun teknologi mobil listrik juga semakin
                    populer. Mobil tidak hanya berfungsi sebagai alat
                    transportasi, tetapi juga menjadi simbol status dan
                    gaya hidup.
                </Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.buyButton}>
                        <Text style={styles.buyButtonText}>Beli</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFEC',
        padding: 20,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#F1E4C3',
        padding: 10,
        borderRadius: 10,
        marginTop: 30,
    },
    searchText: {
        marginLeft: 10,
        fontSize: 16,
        color: 'black',
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'nowrap',
        marginTop: 10,
    },
    item: {
        width: 224,
        height: 195,
        marginBottom: 10,
        backgroundColor: '#F1E4C3',
        borderRadius: 10,
        padding: 10,
        marginEnd: 15,
    },
    itemImage: {
        width: '100%',
        height: 100,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 5,
    },
    itemName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    itemPrice: {
        fontSize: 14,
        color: 'black',
    },
    descriptionContainer: {
        marginTop: 20,
        marginBottom: 60,
    },
    descriptionText: {
        fontSize: 12,
        color: 'black',
        marginBottom: 10,

    },
    buttonContainer: {
        marginTop: 10,
        alignItems: 'center',
    },
    buyButton: {
        backgroundColor: '#F1E4C3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 40,
    },
    buyButtonText: {
        color: 'black',
        fontSize: 16,
    },
});

export default Akun;
