import { Text, Image, View, StyleSheet, Button } from "react-native";
import { useSelector } from "react-redux";

export default function TodayImage({ title, date, url }) {
  return (
    <View style={styles.Container}>
        <Image source={{ uri: url }} style={styles.Image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.buttonContainer}>
      <Button  title="View" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  Image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 32,

  },
  title:{
    color: "#fff",
    fontSize: 20,
    marginVertical:12,
    fontWeight: "bold"
  },
  date:{
   color: '#fff',
   fontSize: 16,
  },
  buttonContainer:{
    alignItems: "flex-end"
  }
});