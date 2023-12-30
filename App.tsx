import React from 'react';
import { Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/component/Home';
import Mobil from './src/component/Mobil';
import Akun from './src/component/Akun';

const App = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, size, color }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Mobil') {
                            iconName = focused ? 'search-outline' : 'search';
                        } else if (route.name === 'Akun') {
                            iconName = focused ? 'person-circle-outline' : 'person-outline';
                        }
                        return <Ionic name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'black',
                    showLabel: false,
                    style: {
                        backgroundColor: '#ffc125',
                        height: 60,
                    },
                }}>
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Mobil"
                    component={Mobil}
                    options={{ headerShown: false }}
                />
                <Tab.Screen
                    name="Akun"
                    component={Akun}
                    options={{ headerShown: false }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default App;