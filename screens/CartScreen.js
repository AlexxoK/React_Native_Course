import { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const CartScreen = ({ route }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const product = route.params?.product;
    if (product && !cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  }, [route.params?.product]);

  const placeOrder = () => {
    alert('Order placed with Cash on Delivery!');
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.text}>{item.name}</Text>
            <Text style={styles.text}>${item.price}</Text>
          </View>
        )}
        ListEmptyComponent={<Text style={styles.emptyText}>Your cart is empty</Text>}
      />
      <Button title="Place Order (COD)" onPress={placeOrder} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: '#f0f2f5',
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    width: width * 0.9,
    alignSelf: 'center',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,

    elevation: 3,
  },
  text: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 40,
    color: '#999',
  },
})

export default CartScreen;