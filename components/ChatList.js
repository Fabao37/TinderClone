import React, { useState, useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import useAuth from '../hooks/UseAuth';
import { onSnapshot, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import tw from 'tailwind-react-native-classnames';
import ChatRow from './ChatRow';

const ChatList = () => {
  const [matches, setMatches] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(
        collection(db, 'matches'),
        where('usersMatched', 'array-contains', user.uid) 
      ),
      (snapshot) => 
        setMatches(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        )
    );

    return unsubscribe;
  }, [user]);

  return matches.length > 0 ? (
    <FlatList  
      style={tw.style("h-full")}
      data={matches}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ChatRow matchDetails={item} />}
      
    /> 
    
  ) : (
    <View style={tw.style("p-5")}>
      <Text style={tw.style("text-center text-lg")}>No matches</Text>
    </View>
  );
};

export default ChatList;

