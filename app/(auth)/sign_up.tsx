import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const sign_up = () => {
  return (
    <SafeAreaView className='flex-1 justify-center items-center'>
      <Text>التسجيل لاول مرة</Text>
      <Link href="/(auth)/sign_in" className="text-lg mt-4 bg-primary rounded-2xl text-background px-4 py-2">
        تسجيل الدخول
      </Link>
    </SafeAreaView>
  )
}

export default sign_up