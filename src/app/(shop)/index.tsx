import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  View,
  Text,
} from "react-native";

import { PRODUCTS } from "../../../assets/products";

import { getProductsAndCategories } from "../../api/api";

import { ProductListItem } from "../../components/product-list-item";
import { ListHeader } from "../../components/list-header";

const Home = async () => {
  const { data, error, isLoading } = await getProductsAndCategories();

  if (isLoading) return <ActivityIndicator />;

  if (error || !data)
    return <Text>Error {error?.message || "An error occured"}</Text>;

  return (
    <View>
      <FlatList
        data={data.products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        ListHeaderComponent={<ListHeader categories={data.categories} />}
        contentContainerStyle={styles.flatListContent}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContent: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
