import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LockersDisponiblesScreen from './view/ScreensU/LockersDisponiblesScreen';
import ReservasScreen from './view/ScreensU/LockersDisponiblesScreen';
import RentasScreen from './view/ScreensU/RentasScreen';
import EditarPerfilScreen from './view/ScreensU/EditarPerfilScreen';
import StackScreen from "./view/ScreensU/StackScreen";
import HomeU from "./view/ScreensU/HomeU";
 
const Stack = createNativeStackNavigator();
function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Menu" component={HomeU}/>
            <Stack.Screen name="StackScreen" component={StackScreen}/>
        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

function MyTabs(){
    return(
    <Tab.Navigator>
        <Tab.Screen name='HomeU' component={MyStack} />
        <Tab.Screen name="LockersDisponibles" component={LockersDisponiblesScreen}/>
        <Tab.Screen name="MisReservas" component={ReservasScreen}/>
        <Tab.Screen name="MisRentas" component={RentasScreen}/>
        <Tab.Screen name="EditarPerfil" component={EditarPerfilScreen}/>
    </Tab.Navigator>
    );
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}