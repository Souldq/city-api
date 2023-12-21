import { useState } from "react";
import { useAppDispatch } from "../redux/hook";
import { setNameList } from "../redux/cityList.slice";
import { Box, Button, SxProps, Theme } from "@mui/material";
import InputPage from "../components/city_card/input";
import CityCard from "../components/city_card/city-card";

export type SxPropsStyles = Record<string, SxProps<Theme>>;

const HomePage = () => {
  const [name, setName] = useState<string>("");
  const dispatch = useAppDispatch();

  const AddNewCity = () => {
    dispatch(setNameList(name));
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.searchBar}>
        <InputPage setName={setName} />
        <Button sx={styles.btn} variant="contained" onClick={AddNewCity}>
          Add
        </Button>
      </Box>
      <Box sx={styles.cards}>
        <CityCard />
      </Box>
    </Box>
  );
};

const styles: SxPropsStyles = {
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },
  searchBar: {
    display: "flex",
    gap: 3,
  },
  btn: {
    width: "100px",
  },
  cards: {
    display: "flex",
    flexFlow: "wrap",
    gap: 3,
  },
};

export default HomePage;
