import { FlatList, StyleSheet, View } from "react-native";
import PlaceItem from "./PlaceItem";

function PlacesList({ places, onPress }) {
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places found yet</Text>
      </View>
    );
  }
  return (
    <FlatList
      style={styles.container}
      data={places}
      keyExtractor={(item) => {
        return item.id;
      }}
      renderItem={({ item }) => {
        return <PlaceItem place={item} onPress={onPress} />;
      }}
    />
  );
}

export default PlacesList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 18,
  },
});
