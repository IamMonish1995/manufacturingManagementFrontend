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
import FreeSoloCreateOptionDialog from "src/components/AutoComplet";
import { ItemSearch } from "src/components/Search";

const now = new Date();

const Page = () => (
  <>
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
            <Card>
              <Scrollbar>
                <Box sx={{ minWidth: 800 }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Design Code</TableCell>
                        <TableCell>28</TableCell>
                        <TableCell>30</TableCell>
                        <TableCell>32</TableCell>
                        <TableCell>34</TableCell>
                        <TableCell>36</TableCell>
                        <TableCell>38</TableCell>
                        <TableCell>40</TableCell>
                        <TableCell>42</TableCell>
                        <TableCell>44</TableCell>
                        <TableCell>46</TableCell>
                        <TableCell>48</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow hover>
                        <TableCell>
                          <Stack alignItems="center" direction="row" spacing={2}>
                            <Typography variant="subtitle2">
                              <FreeSoloCreateOptionDialog />
                            </Typography>
                          </Stack>
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                        <TableCell>
                          <TextField
                            id="standard-number"
                            placeholder="0"
                            variant="standard"
                            style={{ fontSize: "0.20rem" }}
                          />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Scrollbar>
            </Card>
            {/*  */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <ItemSearch />{" "}
              <Button
                startIcon={
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                }
                variant="contained"
              >
                Add Item
              </Button>
            </div>

            <Box
              component="main"
              sx={{
                flexGrow: 1,
                // py: 2,
              }}
            >
              <Card>
                <Scrollbar>
                  <Box sx={{ minWidth: 800 }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Design Code</TableCell>
                          <TableCell>28</TableCell>
                          <TableCell>30</TableCell>
                          <TableCell>32</TableCell>
                          <TableCell>34</TableCell>
                          <TableCell>36</TableCell>
                          <TableCell>38</TableCell>
                          <TableCell>40</TableCell>
                          <TableCell>42</TableCell>
                          <TableCell>44</TableCell>
                          <TableCell>46</TableCell>
                          <TableCell>48</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow hover>
                          <TableCell>
                            <Stack alignItems="center" direction="row" spacing={2}>
                              <Typography variant="subtitle2">XYZ</Typography>
                            </Stack>
                          </TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                          <TableCell>0</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Scrollbar>
                <TablePagination
                  component="div"
                  count={5}
                  onPageChange={10}
                  onRowsPerPageChange={4}
                  page={12}
                  rowsPerPage={5}
                  rowsPerPageOptions={[5, 10, 25]}
                />
              </Card>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
