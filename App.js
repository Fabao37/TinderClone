import "react-native-gesture-handler";
import React from "react";
import StackNavigator from "./navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import  {AuthProvider} from "./hooks/UseAuth.js"; 

const App = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default App; 


 