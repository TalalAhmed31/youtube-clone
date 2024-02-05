import React from "react";
import { useState, useeEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import SideBar from "./SideBar";

const Feed = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          height: { xs: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { xs: 0, md: 2 },
        }}
      >
        <SideBar />
        <Typography
          className="copyright"
          variant="body2"
          sx={{
            color: "#fff",
            mt: 1.5,
          }}
        >
          copyright 2024
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: "2",
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          New <span style={{ color: "#f31503" }}>Videos</span>
        </Typography>

        <Video />
      </Box>
    </Stack>
  );
};

export default Feed;
