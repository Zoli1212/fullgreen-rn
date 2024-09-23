import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Ionicons} from '@expo/vector-icons'

type Props = {}

const CategoryLayout = (props: Props) => {
  return (
    <Stack>
      <Stack.Screen name='[slug]' options={({navigation }) => ({ headerShown: true, headerLeft: () => (<TouchableOpacity onPress={() => navigation.goBack() }> 
        <Ionicons name='arrow-back' size={24} color='black'/>

      </TouchableOpacity>)})}></Stack.Screen>
    </Stack>
  )
}

export default CategoryLayout

const styles = StyleSheet.create({})