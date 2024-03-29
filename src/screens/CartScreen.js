import React, { useEffect } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View, Alert } from "react-native";
import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, confirmCart } from "../store/actions/cart.action";


const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items)
  const total = useSelector((state) => state.cart.total);

  const handleConfirmCart = () => {
    dispatch(confirmCart(items, total))
    Alert.alert(
      "Muchas gracias por su compra!",
      "Su pedido a sido procesado correctamente",
        [
          {text: "OK", onPress: () => {navigation.navigate('Categories')}}
        ]
      )
  };

  const handleDeleteItem = (id) => {
    dispatch(removeItem(id))
  };

  const renderItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm} onPress={handleConfirmCart}>
          <Text style={styles.confirmText}>CONFIRMAR</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>$ {total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 10,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  confirmText:{
    fontFamily: 'SonoMedium',
    fontSize: 18,
    color: '#2D2E32',
    backgroundColor: '#7587C8',
    padding: 8,
    borderRadius: 10
  },
  total: {
    flexDirection: "row",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});