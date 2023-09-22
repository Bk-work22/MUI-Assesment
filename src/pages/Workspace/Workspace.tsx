import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import productFactory from "./utils";
import React, { useState } from "react";

// Generate 100 random products
const fakeFetchProducts = () => Array.from({ length: 100 }, productFactory);

const Workspace = (): JSX.Element => {
  const products = fakeFetchProducts();
  console.log("product", products);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearch = (e) => {
    const searchText = e.target.value;
    setSearchTerm(searchText);
    // Filter the data based on the search text
    const filteredProducts = products.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  // TODO: Create a UI to display and search the data above.
  // You are encouraged to use MUI components to help you (https://mui.com/material-ui/getting-started/overview/)
  return (
    <>
      <Typography>TODO</Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue="Normal"
        variant="filled"
        value={searchTerm}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">ProductType&nbsp;(g)</TableCell>
              <TableCell align="right">Score&nbsp;(g)</TableCell>
              <TableCell align="right">Manufacturer&nbsp;(g)</TableCell>
              <TableCell align="right">Status&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData &&
              filteredData.map((product) => (
                <TableRow key={product.name}>
                  <TableCell align="right">{product.name}</TableCell>
                  <TableCell align="right">{product.productType}</TableCell>
                  <TableCell align="right">{product.score}</TableCell>
                  <TableCell align="right">{product.manufacturer}</TableCell>
                  <TableCell align="right">{product.status}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Workspace;
