import { View, Text } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const subscreptionsDetails = () => {
  const { id } = useLocalSearchParams<{ id: string }>()
    return (
    <SafeAreaView>
      <Text>تفاصيل الاشتراك : {id} </Text>
      <Link href="/">الصفحة الرئيسية</Link>
    </SafeAreaView>
  )
}

export default subscreptionsDetails