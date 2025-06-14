import React, { useState } from "react";
import "./TempAndLocation.css";
import PinLocation from "../../assets/Pin-locations.png";

import WeatherIcon from "../util-components/WeatherIcon.jsx";

import { useWeatherStore } from "../../store/UseWeatherStore.jsx";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { FaRegEdit } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";

const TempAndLocation = ({
  tempurature,
  weatherDescription,
  country,
  city,
  weatherIconCode,
}) => {
  const { isLoading, setCoordinates, favourites, removeFromFavourites } =
    useWeatherStore();
  const [latInput, setLatInput] = useState("");
  const [lonInput, setLonInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="current-temp-container">
      <div>
        <WeatherIcon weatherIconCode={weatherIconCode} size={200} />
      </div>
      <h1 className="current-temp">
        {isLoading ? <Skeleton /> : tempurature}°c
      </h1>
      <h2>{isLoading ? <Skeleton /> : weatherDescription}</h2>
      <div className="location-container">
        <img src={PinLocation} alt="Pin Locations" />
        {isLoading ? (
          <Skeleton />
        ) : (
          <h2>
            {city}, {country}{" "}
            <IconButton
              aria-label="edit"
              color="primary"
              size="large"
              onClick={handleOpen}
            >
              <FaRegEdit />
            </IconButton>
          </h2>
        )}
      </div>
      <Modal open={open} onClose={handleClose} className="popup-window">
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <h1>Input Coordinates</h1>
          <br />
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Latitude"
              variant="outlined"
              value={latInput}
              onChange={(e) => setLatInput(e.target.value)}
            />
          </Box>
          <Box sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Longitude"
              variant="outlined"
              value={lonInput}
              onChange={(e) => setLonInput(e.target.value)}
            />
          </Box>
          <Button
            onClick={() =>
              setCoordinates(parseFloat(latInput), parseFloat(lonInput))
            }
          >
            Set Coordinates
          </Button>
          {/* Collapsible Dropdown */}
          <Accordion sx={{ mt: 3 }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <h4>Saved Favourites</h4>
            </AccordionSummary>
            <AccordionDetails>
              {favourites.length === 0 ? (
                <p>No favourites added yet.</p>
              ) : (
                favourites.map((fav, index) => (
                  <>
                    <Button
                      fullWidth
                      variant="outlined"
                      sx={{ mb: 1 }}
                      onClick={() => {
                        setCoordinates(fav.latitude, fav.longitude);
                        setOpen(false); // close modal
                      }}
                    >
                      {fav.latitude}, {fav.longitude}
                    </Button>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() =>
                        removeFromFavourites(fav.latitude, fav.longitude)
                      }
                      sx={{ ml: 1 }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                ))
              )}
            </AccordionDetails>
          </Accordion>
        </Box>
      </Modal>
    </div>
  );
};

export default TempAndLocation;
