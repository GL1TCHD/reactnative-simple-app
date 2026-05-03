import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { formatCurrency, formatStatusLabel, formatSubscriptionDateTime } from '@/lib/utils'
import clsx from 'clsx'

const SubscriptionCard = ({name, price, currency, icon, billing,color, category, plan, renewalDate, paymentMethod, onPress,expanded , startDate, status}:SubscriptionCardProps) => {
  return (
    <Pressable  onPress={onPress}  className={clsx('sub-card', expanded ? 'sub-card-expanded' : 'bg-card')} 
    style={!expanded && color ? {backgroundColor: color} : undefined}>
      <View className='sub-head'>
        <View className='sub-main'>
            <Image source={icon} className='sub-icon'/>
            <View className='sub-copy'>
                <Text className='sub-title' numberOfLines={1}>{name}</Text>
                <Text ellipsizeMode='tail' className='sub-meta' numberOfLines={1}>{category?.trim() || plan?.trim() || renewalDate ? formatSubscriptionDateTime(renewalDate) : ''}</Text>
            </View>
        </View>
        <View className='sub-price-box'>
            <Text className='sub-price'>{formatCurrency(price, currency)}</Text>
            <Text className='sub-billing'>{billing}</Text>
        </View>
      </View>
      {expanded && (
        <View className='sub-bdy'>
            <View className='sub-details'>
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>
                      payment :
                    </Text>
                    <Text className='sub-value' numberOfLines={1} ellipsizeMode='tail'>{paymentMethod?.trim() ?? 'not provided'}</Text>
                  </View>
                </View>
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>
                      التصنيف :
                    </Text>
                    <Text className='sub-value' numberOfLines={1} ellipsizeMode='tail'>{(category?.trim() || plan?.trim()) ?? 'not provided'}</Text>
                  </View>
                </View>
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>
                      تاريخ بدء الاشتراك :
                    </Text>
                    <Text className='sub-value' numberOfLines={1} ellipsizeMode='tail'>{startDate ? formatSubscriptionDateTime(startDate) : 'not provided'}</Text>
                  </View>
                </View>
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>
                      تاريخ التجديد :
                    </Text>
                    <Text className='sub-value' numberOfLines={1} ellipsizeMode='tail'>{renewalDate ? formatSubscriptionDateTime(renewalDate) : 'not provided'}</Text>
                  </View>
                </View>
                <View className='sub-row'>
                  <View className='sub-row-copy'>
                    <Text className='sub-label'>
                      حالة الاشتراك :
                    </Text>
                    <Text className='sub-value' numberOfLines={1} ellipsizeMode='tail'>{status ? formatStatusLabel(status) : 'not provided'}</Text>
                  </View>
                </View>
            </View>
        </View>
      )}
    </Pressable>
  )
}

export default SubscriptionCard