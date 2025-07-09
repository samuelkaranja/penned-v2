import React from "react";
import "./comments.css";
import Image from "../../assets/code.jpg";
import { Box, Avatar, Typography, Stack } from "@mui/material";

const Comments: React.FC = () => {
  return (
    <div className="comments">
      <h3>
        All Comments <span className="count">10</span>
      </h3>
      <Box
        sx={{
          p: 2,
          bgcolor: "#f5f5f5",
          borderRadius: 2,

          mx: "auto",
        }}
      >
        {/* Display Comment */}
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
          <Avatar src={Image} sx={{ width: 32, height: 32 }} alt="John Doe" />
          <Box>
            <Typography variant="body2" fontWeight={500}>
              John Doe
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
          <Avatar src={Image} sx={{ width: 32, height: 32 }} alt="John Doe" />
          <Box>
            <Typography variant="body2" fontWeight={500}>
              John Doe
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="flex-start" mb={2}>
          <Avatar src={Image} sx={{ width: 32, height: 32 }} alt="John Doe" />
          <Box>
            <Typography variant="body2" fontWeight={500}>
              John Doe
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Box>
        </Stack>
      </Box>
    </div>
  );
};

export default Comments;
