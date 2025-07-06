import Fab from "@mui/material/Fab";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const FloatingActionButton = ({ onClick }) => (
  <Fab
    color="black"
    aria-label="Get an Offer"
    onClick={onClick}
    sx={{
      position: "fixed",
      bottom: 32,
      right: 32,
      zIndex: 100,
      boxShadow: 6,
      fontWeight: "bold",
      fontSize: 18,
      px: 3,
    }}
    variant="extended"
  >
    <LocalOfferIcon sx={{ mr: 1 }} />
    Get an Offer
  </Fab>
);

export default FloatingActionButton;
