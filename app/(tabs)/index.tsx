import "@/global.css"
import { Link } from "expo-router";
import { Text, View } from "react-native";
import {  SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
 import {styled} from 'nativewind'
const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center bg-background justify-center ">
      <Text className="text-xl font-bold text-success">
        اهلا مرتجى
      </Text>
      <Link href="/onboarding" className="text-lg mt-4 bg-primary rounded-2xl text-background px-4 py-2">
        ابدأ الان
      </Link>
      <Link href="/(auth)/sign_in" className="text-lg mt-4 bg-success rounded-2xl text-background px-4 py-2">
        تسجيل الدخول
      </Link>
      <Link href="/(auth)/sign_up" className="text-lg mt-4 bg-subscription rounded-2xl text-background px-4 py-2">
        التسجيل لاول مرة
      </Link>
      <Link href="/subscreptions/spotify" className="text-lg mt-4 bg-subscription rounded-2xl text-background px-4 py-2">
        spotify
      </Link>

      <Link href={{ pathname: "/subscreptions/[id]" , params: { id: "chat GBT" } }} className="text-lg mt-4 bg-secondary rounded-2xl text-primary bg-subscription px-4 py-2">
       chat GBT
      </Link>
     
    </SafeAreaView>
  );
}