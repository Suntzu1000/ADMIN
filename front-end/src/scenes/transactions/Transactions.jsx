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
    },
    {
        field: "occupation",
        headerName: "Profissão",
        flex: 1,
    },
    {
        field: "role",
        headerName: "Cargo",
        flex: 0.5,
    },

]
  return <div>Transactions</div>;
};

export default Transactions;
