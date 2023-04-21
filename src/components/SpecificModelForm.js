import React, { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio
} from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { FormStoreContext } from "../context/FormStore";
import http from "../api/http";
export default function SpecificModelForm() {
  const [info, setinfo] = useContext(FormStoreContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVehicle = () => {
      http.get().then((res) => {
        const type = res.data.data.filter((item) => info.type == item.type);
        setData(type[0].vehicles);
        //console.log(type[0].vehicles)
        setLoading(false);
      });
      // console.log(type)
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
        Specific Model
      </Typography>
      {loading ? (
        "loading..."
      ) : (
        <FormControl>
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Specific Model</FormLabel> */}

          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="model"
            onChange={handleForm}
          >
            {data?.map((val) => (
              <FormControlLabel
                key={val.id}
                value={`${val.name}`}
                control={<Radio />}
                label={`${val.name}`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      )}
    </>
  );
}
