import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const sign_in = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text className='text-primary text-lg font-bold'>سجل لحسابك</Text>
    </SafeAreaView>
  )
}

export default sign_in