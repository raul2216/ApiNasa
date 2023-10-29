import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import PostImage from "../PostImage/PostImage";

export default function Last5DaysImage(last5Days) {


  console.log(last5Days)
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
         {/* {last5Days?.map(postImage => 
         console.log(postImage)
        )}   */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginVertical: 8,
    },
    title:{

    },
    content: {
        paddingHorizontal: 24,
    }

})