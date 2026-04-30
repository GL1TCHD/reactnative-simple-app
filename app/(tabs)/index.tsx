import "@/global.css"
import { Link } from "expo-router";
import { Text, View, Image,FlatList } from "react-native";
import {  SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 import {styled} from 'nativewind'
import images from "@/constants/images";
import { HOME_BALANCE, HOME_SUBSCRIPTIONS, HOME_USER, UPCOMING_SUBSCRIPTIONS } from "@/constants/data";
import { icons } from "@/constants/icons";
const SafeAreaView = styled(RNSafeAreaView);
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import ListHeading from "@/components/ListHeading";
import UpComingSubscriptions from "@/components/UpComingSubscriptions";
import SubscriptionCard from "@/components/SubscriptionCard";

/**
 * Root app component that renders the home screen with a greeting and primary navigation links.
 *
 * Renders a safe-area container that displays a localized greeting and links to onboarding, sign-in,
 * sign-up, a Spotify subscription page, and a dynamic subscription route.
 *
 * @returns The root React element for the app's home screen.
 */
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-4 ">
      <View className="home-header">
        <View className="home-user">
         <Image source={images.avatar} className="home-avatar" />
         <Text className="home-user-name">{HOME_USER.name}</Text>
        </View>
        <Image source={icons.add} className="home-add-icon" />
      </View>

      <View className="home-balance-card">
        <Text className="home-balance-label">القيمة الحالية</Text>
        <View className="home-balance-row">
          <Text className="home-balance-amount">
            {formatCurrency(HOME_BALANCE.amount)}
            <Text className="home-balance-date">
              {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
            </Text>
          </Text>
        </View>
      </View>

      <View>
        <ListHeading title="القادم" />
        <FlatList 
        data={UPCOMING_SUBSCRIPTIONS} 
        renderItem={({ item }) => <UpComingSubscriptions {...item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={<Text className="home-empty-state">لايوجد إشتراكات لحد اللحظة</Text>}
         />
      </View>
      <View>
        <ListHeading title="كل الاشتراكات" />
        <SubscriptionCard {...HOME_SUBSCRIPTIONS[0]} />
      </View>
    </SafeAreaView>
  );
}