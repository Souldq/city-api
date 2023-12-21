import { FC } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import { useGetCityCodeQuery } from "../../redux/rtk_query.slice";

interface Props {
  name: string;
  HandlerDelete: (name: string) => void;
}

const CardDrawer: FC<Props> = (props) => {
  const { name, HandlerDelete } = props;

  const {
    data: post,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCityCodeQuery(name);

  if (isLoading) {
    console.log("Loading...");
  }
  if (isSuccess) {
    console.log(post);
  }
  if (isError) {
    console.log(error);
  }

  return (
    <>
      <Box>
        <Card
          sx={{
            width: "200px",
            height: "230px",
            boxShadow: 20,
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              width: "100%",
              height: "130px",
            }}
          >
            <Typography variant="h1" fontWeight={"bold"} fontSize={20}>
              {name}
              {"  "}
              {post?.data[0].countryCode}
            </Typography>
            <Typography variant="h1" fontSize={20}>
              {post?.data[0].country}
            </Typography>

            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" onClick={() => HandlerDelete(name)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default CardDrawer;
