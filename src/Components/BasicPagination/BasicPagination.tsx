import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function BasicPagination() {
  return (
    <Stack
      spacing={2}
      sx={{
        position: "absolute",
        bottom: "20px",
      }}
    >
      <Pagination
        count={5}
        variant="outlined"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
            borderColor: "#811ac0",
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#811ac0",
            color: "white",
          },
        }}
      />
    </Stack>
  );
}
