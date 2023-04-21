import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardActions,
  CardContent,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import useLocalStorage from "../hooks/useLocalStorage";
export default function UserList() {
  const [store, setStore] = useLocalStorage("store", []);
  console.log(store);
  return (
    <>
      <Typography variant="h4" component="h4">
        User List
      </Typography>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="center">Type</TableCell>
            <TableCell>Model</TableCell>
            <TableCell>Start date</TableCell>
            <TableCell>End date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {store?.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.firstname} {item.lastname}
              </TableCell>
              <TableCell align="center">{item.type}</TableCell>
              <TableCell>{item.model}</TableCell>
              <TableCell>{item.start}</TableCell>
              <TableCell>{item.end}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Grid container spacing={1}>
        {store?.map((item) => (
          <Grid key={item.id} container item xs={12} md={4} spacing={3}>
            <Card style={{ margin: 20, width: "100%" }}>
              <CardContent sx={{ bgcolor: "#E8E8E8" }}>
                <Typography style={{ margin: 0 }} variant="h5" component="h5">
                  Name:{item.firstname} {item.lastname}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography paragraph>Type:{item.type}</Typography>
                <Typography paragraph>Model:{item.model}</Typography>
                <Typography paragraph>Start Date:{item.start}</Typography>
                <Typography paragraph>End Date:{item.end}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
}
