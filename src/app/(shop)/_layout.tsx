import { Redirect, Tabs } from "expo-router";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome} from '@expo/vector-icons'
import { useAuth } from "../../providers/auth-provider";

function TabBarIcon(props: { name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}) {

  return <FontAwesome size={24} {...props} style={{ color: '1BC464'}} />
}

const TabsLayout = () => {

  const { session, mounting, user } = useAuth();

  if(mounting){
    return <ActivityIndicator />
  }
  if(!session){ return <Redirect href='/auth' /> }
  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <Tabs  screenOptions={{
            tabBarActiveTintColor: "#1BC4^",
            tabBarInactiveTintColor: "gray",
            tabBarLabelStyle: { fontSize: 16 },
            tabBarStyle: {
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              paddingTop: 10,
            },headerShown: false,
            }}
            >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon(props){
              return <TabBarIcon {...props} name='shopping-cart' />
            }
          }}
         
        />
        <Tabs.Screen name="orders" options={{}} />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;



const styles = StyleSheet.create({
  safeArea: {
    flex: 1
  }
})