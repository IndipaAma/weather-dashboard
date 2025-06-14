import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";

const UtilCard = () => {
  return (
    <div>
      <div>
        <IconButton>
          <FavoriteIcon fontSize="large" color="error" />
          <Badge badgeContent={2} color="primary" overlap="circular"></Badge>
        </IconButton>
      </div>
    </div>
  );
};

export default UtilCard;
