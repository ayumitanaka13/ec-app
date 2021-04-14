import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    button: {
      backgroundColor: "#27b4df",
      color: "#000",
      fontSize: 16,
      height: 48,
      width: 256,
      marginBottom: 16,
      "&:hover": {
        backgroundColor: "#5ccff1",
      },
    },
  })
);

const PrimaryButton = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        onClick={() => props.onClick()}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
