import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const TabsLayout = () => {
  return (
    <SafeAreaView>
      <Tabs>
        <Tabs.Screen name="index" options={{}} />
        <Tabs.Screen name="orders" options={{}} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
