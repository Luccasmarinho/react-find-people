import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export interface IPagination {
  totalPages: number;
  page: number;
  onChange: (event: React.ChangeEvent<unknown>, newPage: number) => void;
}

export default function BasicPagination({ totalPages, page, onChange }: IPagination) {
  return (
    <Stack
      spacing={2}
      sx={{
        padding: "20px",
      }}
    >
      <Pagination
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
