import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

function VideoDetail() {
  const { id } = useParams();
  const [VideoDetail, setVideoDetail] = useState(null);
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Stack drirection={{ sx: "column", md: "row" }}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}

export default VideoDetail;
