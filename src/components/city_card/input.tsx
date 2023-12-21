import { Box, TextField } from "@mui/material";
import { FC } from "react";
import { SxPropsStyles } from "../../home_page/home-page";

interface inputType {
  setName: (data: string) => void;
}
const InputPage: FC<inputType> = (props) => {
  const { setName } = props;
  return (
    <>
      <Box>
        <TextField
          sx={styles.container}
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
    </>
  );
};

const styles: SxPropsStyles = {
  container: {
    width: "300px",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
};

export default InputPage;

