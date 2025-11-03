import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import type {IPagination} from "../../interfaces/interfaces"

export default function BasicPagination({ totalPages, page, onChange }: IPagination) {
  return (
    <Stack
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Pagination
        aria-label="pagination"
        count={totalPages}
        page={page}
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
        onChange={onChange}
      />
    </Stack>
  );
}
