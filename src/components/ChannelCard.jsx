import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ channelDetails: { snippet } }) => {
  return (
    <Box>
      <Link
        to={
          snippet.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
        }
      >
        <CardMedia
          image={snippet?.thumbnails?.medium?.url}
          alt={snippet?.channelTitle}
          sx={{ width: 350, height: 180, backgroundColor: "#fff" }}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            sx={{ fontSize: 20, textAlign: "center" }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Box>
  );
};

export default ChannelCard;
