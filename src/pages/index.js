import Head from "next/head";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
  Button,
  SvgIcon,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Scrollbar } from "src/components/scrollbar";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import { CustomersSearch } from "src/sections/customer/customers-search";
import FreeSoloCreateOptionDialog from "src/components/ItemFindOrCreateAutoComplete";
import { ItemSearch } from "src/components/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import { InventoryTable } from "src/sections/inventory/inventory-table";
import { useEffect, useState } from "react";
import { getcurruntstock } from "request/curruntStock";
import { applyPagination } from "src/utils/apply-pagination";
import ItemSizeForm from "src/sections/inventory/itemSizeForm";

const now = new Date();

const Page = () => {
  const [curruntStock, setCurruntStock] = useState({ items: [], grantTotal: 0 });
  const page = 0;
  const rowsPerPage = 5;
  const paginatedInventory = applyPagination(curruntStock.items, page, rowsPerPage);
  const getInventoryData = () => {
    getcurruntstock().then((res) => {
      setCurruntStock(res.result);
    });
  };
  useEffect(() => {
    getInventoryData();
  }, []);

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">Inventory</Typography>
              </Stack>
            </Stack>
            {/*  */}
            <ItemSizeForm refreshList={getInventoryData}/>
            {/*  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ItemSearch />{" "}
            </div>
            {/* Inventory Table */}
            <InventoryTable
              curruntStock={curruntStock}
              count={paginatedInventory.length}
              page={page}
              rows={paginatedInventory}
              rowsPerPage={rowsPerPage}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
