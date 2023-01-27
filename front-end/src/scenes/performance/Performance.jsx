import React from "react";
import { Box, useTheme } from "@mui/material";
import { useGetUserPerformanceQuery } from "../../state/api";
import { useSelector } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import Header from "../../components/Header";
import CustomColumnMenu from "../../components/DataGridCustomColumnMenu";

const Performance = () => {
  const theme = useTheme();
  const userId = useSelector((state) => state.global.userId)
  const { data, isLoading } = useGetUserPerformanceQuery(userId);
  console.log("data", data);

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "userId",
      headerName: "Id de Usuário",
      flex: 1,
    },
    {
      field: "createAt",
      headerName: "Criado em",
      flex: 1,
    },
    {
        field: "products",
        headerName: "Produtos",
        flex: 0.5,
        sortable: false,
        renderCell: (params) => params.value.length
      },
    {
      field: "cost",
      headerName: "Preço",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="Desempenho"
        subtitle="Acompanhe suas Vendas"
      />
     <Box
        mt="40px"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtual-Scroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
            borderTop: "none",
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${theme.palette.secondary[200]} !importante`,
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          getRowId={(row) => row._id}
          rows={(data && data.sales) || []}
          columns={columns}
          components={{
            ColumnMenu: CustomColumnMenu,
          }}
        />
      </Box>
    </Box>
  );
};

export default Performance;
