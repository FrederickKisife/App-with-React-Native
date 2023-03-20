import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({navigation}) {

const pressHandler = ()=>{
  navigation.navigate('ReviewDetails')
}

  return (
    <View style={globalStyles.container}>
      
      <Button title='Go to review dets' onPress={pressHandler}/>
    </View>
  );
}

