import { Tabs } from "expo-router";
import { tabs } from "@/constants/data";
import clsx from "clsx";
const TabLayout = () =>{
    const tabIcon = ({focused,icon}: TabIconProps)=>{
        return (
        <view className="tabs-icon">
            <view className={clsx("tabs-bill",focused && "tabs-active")}></view>
        </view>

        )
    }
    return (<Tabs screenOptions={{headerShown:false}}>
      {tabs.map((tab) => (
        <Tabs.Screen 
        key={tab.name}
        name={tab.name} 
        options={{
            title:tab.title,
            tabBarIcon:({focused})=>  />
        }} />
       ))}
    </Tabs>)
}

export default TabLayout;