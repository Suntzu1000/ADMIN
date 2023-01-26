import React, { useState } from "react";
import { FormControl, MenuItem, InputLabel, Box, Select } from "@mui/material";
import Header from "../../components/Header";
import OverviewChart from "../../components/OverviewChart";

const Overview = () => {
  const [view, setView] = useState("units");
  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="VISÃO GERAL"
        subtitle="Visão geral sobre Receita e Lucros."
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>Ver</InputLabel>
          <Select
            value={view}
            label="Ver"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Vendas</MenuItem>
            <MenuItem value="units">Unidades</MenuItem>
          </Select>
        </FormControl>
       <OverviewChart view={view} />
      </Box>
    </Box>
  );
};

export default Overview;
