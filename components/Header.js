import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import { Foundation, Ionicons } from '@expo/vector-icons';

const Header = ({ title, callEnable }) => {
  const navigation = useNavigation();

  return(
    <View style={tw.style("p-6 flex-row items-center justify-between")}>
      <View style={tw.style("flex flex-row items-center")}>
        <TouchableOpacity style={tw.style("p-2")} onPress={() => navigation.goBack()}>
          <Ionicons name='chevron-back-outline' size={20} color='#ff5864'/>
        </TouchableOpacity>
        <Text style={tw.style("text-2xl font-bold pl-1")}>{title}</Text>
      </View>
      {callEnable && (
        <TouchableOpacity style={tw.style("rounded-full mr-4 bg-red-200")}>
          <Foundation name='telephone' size={20} color='red' />
        </TouchableOpacity>
      )}

    </View>
  )
}

export default Header; 
