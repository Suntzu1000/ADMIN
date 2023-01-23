import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "../../state/api";
import Header from "../../components/Header";

const Transactions = () => {
  const theme = useTheme();

  //valores para enviar para o backend
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [sort, sertSort] = useState({});
  const [search, setSearch] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "User ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CreateAt",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Produtos",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "occupation",
      headerName: "Profissão",
      flex: 1,
    },
    {
      field: "cost",
      headerName: "Preço",
      flex: 0.5,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];
  return <Box m="1.5rem 2.5rem">
    <Header title="TRANSAÇÕES" subtitle="Lista completa de transações"/>
    <Box height="80vh" 
        sx={{
            "& .MuiDataGrid-root": {
                border: "none"
            },
            "& .MuiDataGrid-cell": {
                borderBottom: "none"
            }, 
            "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderBottom: "none"
            },
            "& .MuiDataGrid-virtual-Scroller": {
                backgroundColor: theme.palette.primary.light
            },
            "& .MuiDataGrid-footerContainer": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[100],
                borderTop: "none"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                color: `${theme.palette.secondary[200]} !importante`
            }
            

        }}>
        <DataGrid
            loading={isLoading || !data}
            getRowId={(row) => }
            />
    </Box>
  </Box>;
};

export default Transactions;
