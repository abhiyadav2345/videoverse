import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar } from "./index.js";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar>fdsfsdf</SideBar>
        <Typography
          className="coppyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
    </Stack>
  );
};

export default Feed;