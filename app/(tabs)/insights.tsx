import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context'
import {styled} from 'nativewind'

const SafeAreaView = styled(RNSafeAreaView);

const insights = () => {
  return (
    <SafeAreaView className="flex-1 items-center bg-background justify-center ">
      <Text>insights</Text>
    </SafeAreaView>
  )
}

export default insights