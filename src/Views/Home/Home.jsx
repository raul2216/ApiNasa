import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getNasa } from "../../../redux/actions";
export default function Home() {
  //   const Nasa = useSelector((state) => state.nasa)


  const dispatch = useDispatch()
  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImage = await dispatch(getNasa());
        console.log(todayImage);
      } catch (error) {
        console.error(error)
      }
    };

    loadTodayImage()
  }, [getNasa]);
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
