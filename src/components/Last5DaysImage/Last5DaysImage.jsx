import { View, Text, StyleSheet, Button, ScrollView } from "react-native";

export default function Last5DaysImage(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
               
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