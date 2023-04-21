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
export default function TypeOfWheelForm() {
  const [info, setinfo] = useContext(FormStoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVehicle = () => {
      http.get().then((res) => {
        const type = res.data.data.filter((item) => info.wheels == item.wheels);
        setData(type);
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
        Type of vehicle
      </Typography>
      {loading ? (
        "loading..."
      ) : (
        <FormControl>
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Type of vehicle</FormLabel>
           */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="type"
            onChange={handleForm}
          >
            {data?.map((item) => (
              <FormControlLabel
                key={item.id}
                value={`${item.type}`}
                control={<Radio />}
                label={`${item.name}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
{
  /* {item.vehicals.map(i=>(
            <FormControlLabel value={item.name} control={<Radio />} label={item.name} />
        ))} */
}
