import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import BottomTabs from '../components/common/BottomTab'

const Home = () => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white"}}>
      <View style={{flex:1}}>
          <Text> Debit section</Text>
      </View>

      <View style={{flex:1}}>
          <Text> Sliding Up Panel</Text>
      </View>

      <View style={{flex:1, justifyContent:'flex-end'}}>
          <BottomTabs/>
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})