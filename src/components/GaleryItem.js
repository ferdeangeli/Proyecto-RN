import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from "react-native";

const GaleryItem = ({ name, surname, contact, profilePhoto }) => {
  return (
    <ScrollView contentContainerStyle={styles.galeryItem}>
      <Image style={styles.image} source={{ uri: profilePhoto }} />
      <View style={styles.info}>
        <Text style={styles.title}>Nombre: {name}</Text>
        <Text style={styles.title}>Apellido: {surname}</Text>
        <Text style={styles.address}>Contacto: {contact}</Text>
      </View>
    </ScrollView>
  );
};

export default GaleryItem;

const styles = StyleSheet.create({
  galeryItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: "#777",
    fontSize: 16,
  },
});