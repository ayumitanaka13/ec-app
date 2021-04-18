import React from "react";
import { TextInput } from "../UIkit";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/styles";
import classes from "*.module.css";

const SetSizeArea = (props) => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table area-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>size</TableCell>
              <TableCell>quantity</TableCell>
              <TableCell className={classes.iconCell} />
              <TableCell className={classes.iconCell} />
            </TableRow>
          </TableHead>
          <TableBody>
            {props.sizes.length > 0 &&
              props.sizes.map((item, index) => (
                <TableRow key={item.size}>
                  <TableCell component="th" scope="row">
                    {item.size}
                  </TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <IconButton
                    className={classes.iconCell}
                    onClick={() => editSize()}
                  >
                    <EditIcon />
                  </IconButton>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div>
          <TextInput
            fullwidth={false}
            label={"size"}
            multiline={false}
            required={true}
            onChange={}
            rows={1}
            value={}
            type={text}
          />
        </div>
      </TableContainer>
    </div>
  );
};

export default SetSizeArea;
