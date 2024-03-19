import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import {
  Box,
  Stack,
  Container,
  Unstable_Grid2 as Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableRow,
  IconButton,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import DistributorFindOrCreateAutoComplete from "src/components/disctributorFindOrCreateAutoComplete";
import { getTodayDate } from "src/utils/changeDateFormate";
import { getOrderByDistributorDateItem } from "request/records";
import { RecordsTable } from "src/sections/records/records-table";
import ItemFindOrCreateAutoComplete from "src/components/ItemFindOrCreateAutoComplete";
import SearchIcon from "@mui/icons-material/Search";

const Page = () => {
  const [stocks, setStocks] = useState({ items: [], grantTotal: 0 });
  const [distributorID, setDistributorID] = useState("");
  const [itemID, setItemID] = useState("");
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState(getTodayDate());

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filteredData, setFilteredData] = useState([]);

  const onPageChange = useCallback((event, value) => {
    setPage(value);
  }, []);

  const onRowsPerPageChange = useCallback((event) => {
    setRowsPerPage(event.target.value);
  }, []);

  const getOrderByItemDistData = () => {
    if (!fromDate || !toDate) {
      alert("select dates");
    } else {
      if(!distributorID && !itemID){
        alert("select distributor or Item");
      }else{
        getOrderByDistributorDateItem({ distributorID, itemID, fromDate, toDate }).then((res) => {
       console.log(res);
          // setStocks(res.result);
        // setFilteredData(res.result.items);
      });
      }
      
    }
  };

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
                <Typography variant="h4">Records</Typography>
              </Stack>
            </Stack>

            <Table sx={{ minWidth: "800px" }}>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <DistributorFindOrCreateAutoComplete setDistributorID={setDistributorID} />
                  </TableCell>
                  <TableCell>
                    <ItemFindOrCreateAutoComplete setItemID={setItemID} />
                  </TableCell>
                  <TableCell>
                    <label htmlFor="fromDate">From Date</label>
                    <br />
                    <TextField
                      id="fromDate"
                      name="fromDate"
                      type="date"
                      variant="standard"
                      onChange={(e) => {
                        setFromDate(e.target.value);
                      }}
                      value={fromDate}
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <label htmlFor="toDate">To Date</label>
                    <br />
                    <TextField
                      id="toDate"
                      name="toDate"
                      variant="standard"
                      type="date"
                      onChange={(e) => {
                        setToDate(e.target.value);
                      }}
                      value={toDate}
                    />{" "}
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={getOrderByItemDistData}>
                      <SearchIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            {filteredData.length > 0 && (
              <RecordsTable
                stocks={stocks}
                count={filteredData.length}
                page={page}
                rows={filteredData}
                rowsPerPage={rowsPerPage}
                onPageChange={onPageChange}
                onRowsPerPageChange={onRowsPerPageChange}
              />
            )}
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
