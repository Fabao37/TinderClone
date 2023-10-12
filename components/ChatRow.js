import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigate } from '@react-navigation/native';
import tw from 'tailwind-react-native-classnames';
import useAuth from '../hooks/UseAuth';
import getMatchedUserInfo from '../lib/getMatchedUserInfo';


const ChatRow = ({ matchDetails }) => {
  const navigation = useNavigate();
  const {user} = useAuth();
  const [matchedUserInfo, setMatchedUserInfo] = useState(null);
  

  useEffect(() => {
    setMatchedUserInfo(getMatchedUserInfo(matchDetails.users, user.uid))
     
  },[])
  console.log(matchedUserInfo)


 return (
    <TouchableOpacity 
      style={tw.style("flex-row items-center p-3 bg-white mx-3 my-1 rounded-lg shadow-lg")}
      onPress={() => navigation.navigate('Message', {matchDetails} )}
      >
      <Image
        style={tw.style("rounded-full h-16 w-16 mr-4")}
        source={{uri:matchedUserInfo?.photoURL}}      
      />
      <Text style={tw.style("text-lg font-semibold")}>
        {matchedUserInfo?.displayName}
      </Text>
      <Text>Say, Hai!</Text>
    </TouchableOpacity>
  );
}

export default ChatRow;