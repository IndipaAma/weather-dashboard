import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import CircularProgress from "@mui/material/CircularProgress";
import weatherGif from "../../assets/vsgif_com__.1746795.gif";

const SplashScreen = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100vw",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(10px)",
      }}
    >
      <img
        src={weatherGif}
        alt="Background GIF"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />

      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 3,
          color: "#fff",
          backgroundColor: "rgba(0, 0, 0, 0.4)", // optional dark overlay
        }}
      >
        <Typography
          level="h1"
          sx={{ fontSize: "3.5rem", fontWeight: "bold", color: "white" }}
        >
          Weather Dashboard 🌦️🌈⛅🌞🌡💧
        </Typography>
        <Typography level="title-lg" style={{ color: "white" }}>
          Your personal weather companion
        </Typography>
        <CircularProgress variant="indeterminate" thickness="8.6" />
      </Box>
    </Box>
  );
};

export default SplashScreen;
