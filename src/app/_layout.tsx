import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";

export default function RootLayout() {
  return (
    <ToastProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(shop)"
            options={{ title: "Shop", headerShown: false }}
          />
          <Stack.Screen
            name="categories"
            options={{ title: "Categories", headerShown: false }}
          />
          <Stack.Screen
            name="product"
            options={{ title: "Product", headerShown: true }}
          />
          <Stack.Screen
            name="cart"
            options={{
              presentation: "modal",
              title: "Shopping Cart",
              // Override globally set option
            }}
          />
          <Stack.Screen name="auth" />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
}
