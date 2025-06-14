import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";
import { useWeatherStore } from "../store/UseWeatherStore";

const FavouritesButton = () => {
  const { addToFavourites, latitude, longitude } = useWeatherStore();
  return (
    <div>
      <Button
        variant="outlined"
        onClick={() => addToFavourites(latitude, longitude)}
      >
        <FavoriteIcon color="action" /> {/*for red color: error  */}
        Add to Favourites
      </Button>
    </div>
  );
};

export default FavouritesButton;
