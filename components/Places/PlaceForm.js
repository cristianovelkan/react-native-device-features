import { useCallback, useState } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Colors } from "../../constants/color";
import { Place } from "../../models/place";
import Button from "../UI/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlaceForm({ onCreatePlace }) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [imageTaken, setImageTaken] = useState(null);
  const [locationPicked, setLocationPicked] = useState(null);

  function changeTitleHandler(text) {
    setEnteredTitle(text);
  }

  function imageTakenHandler(imageUri) {
    setImageTaken(imageUri);
  }

  const locationPickedHandler = useCallback((location) => {
    setLocationPicked(location);
  }, []);

  function savePlaceHandler() {
    const placeData = new Place(enteredTitle, imageTaken, locationPicked);
    onCreatePlace(placeData);
  }

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImageTaken={imageTakenHandler} />
      <LocationPicker onLocationPicked={locationPickedHandler} />
      <Button onPress={savePlaceHandler}>Add Place</Button>
    </ScrollView>
  );
}

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});
