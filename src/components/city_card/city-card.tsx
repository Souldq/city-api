import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { cityName, setFilterName } from "../../redux/cityList.slice";
import CardDrawer from "./card-drawer";


const CityCard: FC = () => {
  const cityNameList = useAppSelector(cityName);

  const dispatch = useAppDispatch();

  const HandlerDelete = (name: string) => {
     dispatch(setFilterName(name));
  };

  
  return (
    <>
      {cityNameList.map((name, index) => (
        <CardDrawer key={index} name={name} HandlerDelete={HandlerDelete}/>
      ))}
    </>
  );
};

export default CityCard;
