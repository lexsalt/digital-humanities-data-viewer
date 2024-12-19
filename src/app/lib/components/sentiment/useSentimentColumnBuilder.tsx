import { Box, Button } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
export const useSentimentColumnBuilder = () => {
  // const colors: { [key: string]: string[] } = {};
  // colors["anger"] = ["#ffe3e3", "#ffc9c9", "#ffa8a8", "#ff8787"];
  // colors["disgust"] = ["#e9fac8", "#d8f5a2", "#c0eb75", "#a9e34b"];
  // colors["fear"] = ["#c5f6fa", "#99e9f2", "#66d9e8", "#3bc9db"];
  // colors["joy"] = ["#fff3bf", "#ffec99", "#ffe066", "#ffd43b"];
  // colors["neutral"] = ["#f1f3f5", "#e9ecef", "#dee2e6", "#ced4da"];
  // colors["none"] = ["#ffffff", "#ffffff", "#ffffff", "#ffffff"];
  // colors["sadness"] = ["#dbe4ff", "#bac8ff", "#91a7ff", "#748ffc"];
  // colors["surprise"] = ["#f3d9fa", "#eebefa", "#e599f7", "#da77f2"];
  const columns: GridColDef[] = [
    { field: "id", headerName: "Id", width: 120 },
    {
      field: "sentence",
      headerName: "Sentence",
      width: 1120,
      editable: false,
      renderCell: (params) => (
        <Box
          sx={{
            whiteSpace: "pre-wrap",
            marginY: "0.1rem",
            background: `#00FF00${Math.floor((params.row.polarity + 1) * 127.5)
              .toString(16)
              .padStart(2, "0")}`,
            color: "#000000",
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: "polarity",
      headerName: "Polarity",
      width: 180,
      editable: false,
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            whiteSpace: "pre-wrap",
            marginY: "0.1rem",
            background: `#00FF00${Math.floor((params.row.polarity + 1) * 127.5)
              .toString(16)
              .padStart(2, "0")}`,
            color: "#000000",
          }}
        >
          {params.value}
        </Box>
      ),
    },
    {
      field: "subjectivity",
      headerName: "Subjectivity",
      width: 180,
      editable: false,
      renderCell: (params) => (
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            whiteSpace: "pre-wrap",
            marginY: "0.1rem",
            background: `#00FF00${Math.floor((params.row.polarity + 1) * 127.5)
              .toString(16)
              .padStart(2, "0")}`,
            color: "#000000",
          }}
        >
          {params.value}
        </Box>
      ),
    },
  ];
  return columns;
};