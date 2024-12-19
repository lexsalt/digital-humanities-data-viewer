"use client";
import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSentimentColumnBuilder } from "./useSentimentColumnBuilder";

type Sentence = {
  sentence: string;
  polarity: number;
  subjectivity: number;
};

export function SentimentGrid({ sentences }: { sentences: Sentence[] }) {
  // const { users, isLoading, isError } = useQueryUsers();
  // const [sentences, setSentences] = useState<Sentence[]>(departure);

  const columns = useSentimentColumnBuilder();
  return (
    <Paper sx={{ height: "100%", width: "100%" }}>
      <DataGrid
        rows={sentences}
        getRowId={(row) => row.sentence}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
          columns: {
            columnVisibilityModel: {
              id: false,
            },
          },
        }}
        loading={false}
        slotProps={{
          loadingOverlay: {
            variant: "linear-progress",
            noRowsVariant: "skeleton",
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        disableRowSelectionOnClick
      />
    </Paper>
  );
}
