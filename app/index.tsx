import { Text, View, TextInput, Image, Button } from "react-native";
import { useState } from "react";

export default function Index() {
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);
  async function get_Image() {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${text}&client_id=Mus_ZAgjrqDgnaom6Qi1nr00cKuexXpLCSMQeFyJ2Ik`
    );
    const json = await response.json();
    setImages(json.results);
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        borderColor: "red",
        borderWidth: 1,
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <TextInput
        placeholder="Search here"
        value={text}
        onChangeText={(Text) => setText(Text)}
      />
      <Button title="Search" onPress={get_Image} />
      <View style={{ flexDirection: "row", flexWrap: "wrap", padding: 10 }}>
        {images.map((image) => {
          return (
            <View style={{ padding: 10 }}>
              <Image
                source={{ uri: image.urls.regular }}
                style={{ width: 200, height: 200 }}
              />
            </View>
          );
        })}
      </View>
      
    </View>
  );
}
