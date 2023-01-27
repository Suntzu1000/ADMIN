import React from "react";
import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import { Box, Button, Typography, useTheme, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import BreakdownChart from "../../components/BreakdownChart";
import OverviewChart from "../../components/OverviewChart";
import { useGetDashboardQuery } from "../../state/api";
import StatBox from "../../components/StatBox"

const Dashboard = () => {
  const theme = useTheme()
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)")
  const {data, isLoading} = useGetDashboardQuery()
  //console.log("data", data);
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
      headerName: "Criado em",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Nº de Produtos",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "Preço",
      flex: 1,
      renderCell: (params) => `$${Number(params.value).toFixed(2)}`,
    },
  ];

  return <Box m="1.5rem 2.5rem" >
    <FlexBetween>
      <Header title="Painel De Controle" subtitle="Bem vindo ao seu Painel de Controle"/>
      <Box>
        <Button 
          sx={{
            backgroundColor: theme.palette.secondary.light,
            color: theme.palette.background.alt,
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px"
          }}
         
        >
          <DownloadOutlined sx={{mr: "10px"}} />
          Baixar Relatórios</Button>
      </Box>
    </FlexBetween>

    <Box
      mt="20px"
      display="grid"
      gridTemplateColumns="repeat(12, 1fr)"
      gridAutoRows="160px"
      gap="20px"
      sx={{
        "& > div": {gridColumn: isNonMediumScreens ? undefined : "span 12"}
      }}
    >
      {/*ROW 1 */}
      <StatBox
        title="Total de Clientes"
        value={data && data.totalCustomers}
        increase="+14%"
        description="Desde o último mês"
        icon={
          <Email sx={{color: theme.palette.secondary[300], fontSize: "26px"}} />
        }
      />
      <StatBox
        title="Vendas Hoje"
        value={data && data.todayStats.totalSales}
        increase="+21%"
        description="Desde o último mês"
        icon={
          <PointOfSale sx={{color: theme.palette.secondary[300], fontSize: "26px"}} />
        }
      />

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        > 
          <OverviewChart view="sales" isDashboard={true}/>
        </Box>

      <StatBox
        title="Vendas do Mês"
        value={data && data.thisMonthStats.totalSales}
        increase="+5%"
        description="Desde o último mês"
        icon={
          <PersonAdd sx={{color: theme.palette.secondary[300], fontSize: "26px"}} />
        }
      />
       <StatBox
        title="Vendas do Ano "
        value={data && data.yearlySalesTotal}
        increase="+43%"
        description="Desde o último mês"
        icon={
          <Traffic sx={{color: theme.palette.secondary[300], fontSize: "26px"}} />
        }
      />
    </Box>
  </Box>;
};

export default Dashboard;
