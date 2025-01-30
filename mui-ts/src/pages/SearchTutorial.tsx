import React, { useState } from "react";
import { Box, Input, Typography, CircularProgress, Stack } from "@mui/material";
import useSearch from "../hooks/useSearch";

interface DataItem {
  id: number;
  name: string;
}

const data: DataItem[] = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

const SearchTutorial: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const { filteredData, progress } = useSearch({ data, input });

  return (
    <Box p={5}>
      <Input
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search..."
      />

      <Stack spacing={2} mt={3}>
        {progress && (
          <Box display="flex" justifyContent="center">
            <CircularProgress />
          </Box>
        )}

        {!progress &&
          filteredData.map((item) => (
            <Typography color={'text.primary'} key={item.id}>{item.name}</Typography>
          ))}

        {!progress && filteredData.length === 0 && (
          <Typography color={'text.primary'}>No results found</Typography>
        )}
      </Stack>
    </Box>
  );
};

export default SearchTutorial;
