import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

import {
  demoProfilePicture,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const ChannelCard = ({ channelDetails }) => {
  return (
    <Box
      sx={{
        boxShadow: "none",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        height: "326px",
        margin: "auto",
        width: { xs: "326px", md: "320px" },
        alignItems: "center",
      }}
    >
      <Link
        to={
          channelDetails?.snippet?.channelId
            ? `/channel/${channelDetails.snippet?.channelId}`
            : demoChannelUrl
        }
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#1e1e1e",
            textAlign: "center",
            justifyContent: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={
              channelDetails?.snippet?.thumbnails?.high?.url ||
              demoProfilePicture
            }
            alt={channelDetails.snippet?.channelTitle}
            sx={{
              width: "180px",
              height: "180px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6">
            {channelDetails?.snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{ fontSize: 16, color: "gray", ml: "5px" }} />
          </Typography>
          {channelDetails?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetails?.statistics?.subscriberCount
              ).toLocaleString()}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
