import { View, Text, StyleSheet } from "react-native";
import Header from "../../components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getNasa, getNasa5Days } from "../../../redux/actions";
import TodayImage from "../../components/TodayImage/TodayImage";
import Last5DaysImage from "../../components/Last5DaysImage/Last5DaysImage"
import { format, sub } from "date-fns";
export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todayImageResponse = await dispatch(getNasa());
      } catch (error) {
        console.error(error);
      }
    };

    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todayDate = format(date, 'yyyy-MM-dd')
        const dateFiveDays = format(sub(date, {days: 5}),'yyyy-MM-dd')

        const last5DayImageResponse = await dispatch(getNasa5Days(`&start_date=${dateFiveDays}&end_date=${todayDate}`))
      } catch (error) {
        console.log(error)
      }
    };
    loadLast5DaysImages()
    loadTodayImage();
  }, [getNasa, getNasa5Days]);

  const item = useSelector((state) => state.nasa);
  const items = useSelector((state) => state.nasa5Days);

 
  return (
    <View style={styles.container}>
      <Header />
      <TodayImage {...item} />
      <Last5DaysImage items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});
