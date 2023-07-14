import React from "react";
import Stack from "@mui/material/Stack";
import { InfinitySpin } from "react-loader-spinner";

export const Loader = () => {
  return (
    <Stack
      deirection="row"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <InfinitySpin color="gray" />
    </Stack>
  );
};

export default Loader;
