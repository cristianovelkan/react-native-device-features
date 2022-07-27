import { FlatList, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/color";
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
      style={styles.list}
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
  list: {
    margin: 24,
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontSize: 18,
    color: Colors.primary200,
  },
});
