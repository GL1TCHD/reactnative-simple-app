import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {  SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 import {styled} from 'nativewind'
const SafeAreaView = styled(RNSafeAreaView);

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
    <SafeAreaView className="flex-1 items-center bg-background justify-center ">
      <Text className="text-xl font-bold text-success">
        اهلا مرتجى
      </Text>
      <Link href="/onboarding" className="text-lg mt-4 bg-primary rounded-2xl text-background px-4 py-2">
        ابدأ الان
      </Link>
      <Link href="/(auth)/sign_in" className="text-lg mt-4 bg-primary rounded-2xl text-background px-4 py-2">
        تسجيل الدخول
      </Link>
      <Link href="/(auth)/sign_up" className="text-lg mt-4 bg-primary rounded-2xl text-background px-4 py-2">
        التسجيل لاول مرة
      </Link>
     
     
    </SafeAreaView>
  );
}