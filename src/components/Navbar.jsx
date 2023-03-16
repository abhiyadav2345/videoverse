import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./index.js";

const Navbar = () => {

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#0000",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} /> 
        <Typography variant="h4" fontWeight="bold" color="#fff">&nbsp; CodeTube</Typography>
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;
