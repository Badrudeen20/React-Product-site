import React, { useRef } from "react";
import { TextField, Grid, Typography } from "@material-ui/core";
import { useContext } from "react";
import { FormStoreContext } from "../context/FormStore";
function today() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  today = yyyy + "-" + mm + "-" + dd;
  return today;
}
export default function DateRangeForm() {
  const [info, setinfo] = useContext(FormStoreContext);

  const startRef = useRef();
  const endRef = useRef();
  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setinfo((val) => ({ ...val, [name]: value }));
    if (startRef.current.value && endRef.current.value) {
      let date1 = new Date(startRef.current.value);
      let date2 = new Date(endRef.current.value);
      if (date1 < date2) {
        setinfo((val) => ({ ...val, validate: true }));
      } else {
        setinfo((val) => ({ ...val, validate: false }));
        alert("End date must be greater then start date!");
      }
    } else {
      setinfo((val) => ({ ...val, validate: false }));
    }
  }

  return (
    <>
      <Typography variant="h4" component="h4">
        Date range picker
      </Typography>
      <div style={{ padding: 20 }}>
        <Grid container spacing={1}>
          <Grid container item xs={6} spacing={3}>
            <TextField
              id="start"
              InputProps={{ inputProps: { min: today() } }}
              label="Start Date"
              type="date"
              name="start"
              defaultValue={today()}
              onChange={handleForm}
              inputRef={startRef}
            />
          </Grid>
          <Grid container item xs={6} spacing={3}>
            <TextField
              id="end"
              label="End Date"
              type="date"
              name="end"
              onChange={handleForm}
              disabled={info.start ? false : true}
              inputRef={endRef}
              // minDate="2023-04-20"
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
