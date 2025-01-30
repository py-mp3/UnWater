import { Text, View, TextInput, Image, Button} from "react-native";
import { useState } from "react";

export default function Index() {
  const[text, setText] = useState("");
  const[image, setImage] = useState("");
    async function get_Image() {
      const response = await fetch(`https://api.unsplash.com/search/photos?query=${text}&client_id=Mus_ZAgjrqDgnaom6Qi1nr00cKuexXpLCSMQeFyJ2Ik`)
      const json = await response.json();
      setImage(json.results[0].urls.regular)
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
      <TextInput placeholder="Search here" value= {text} onChangeText={Text => setText(Text)}/>
      <Image source={{uri: image}} style={{width: 200, height: 200}}/>
      <Button title="Search" onPress={get_Image}/>
    </View>
  );
}
