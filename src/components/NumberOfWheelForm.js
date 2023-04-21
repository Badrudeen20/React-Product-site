import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography
} from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { FormStoreContext } from "../context/FormStore";
import http from "../api/http";

export default function NumberOfWheelForm() {
  const [info, setinfo] = useContext(FormStoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVehicle = () => {
      http.get().then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
        setLoading(false);
      });
    };
    fetchVehicle();
  }, []);

  function handleForm(e) {
    const name = e.target.name;
    const value = e.target.value;
    setinfo((val) => ({ ...val, [name]: value }));
    if (value != "") {
      setinfo((val) => ({ ...val, validate: true }));
    }
  }
  return (
    <>
      <Typography variant="h4" component="h4">
        Number of wheels
      </Typography>
      {loading ? (
        "loading..."
      ) : (
        <FormControl>
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Number of wheels</FormLabel> */}
          <RadioGroup name="wheels" onChange={handleForm}>
            {data?.map((item) => (
              <FormControlLabel
                key={item.id}
                value={`${item.wheels}`}
                control={<Radio />}
                label={`wheels ${item.wheels}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
