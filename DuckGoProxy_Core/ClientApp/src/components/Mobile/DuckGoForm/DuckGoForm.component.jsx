import "./DuckGoForm.styles.scss";
import React, { useState } from 'react';
import {  useDispatch } from "react-redux";
import { addTopic,addSearchHistory } from "../../../redux/actions";
import {
  Button,
  TextField,
  Grid,
  Paper
} from "@material-ui/core";

const DuckGoForm= (props) => {

    const dispatch = useDispatch();
    const [queryParam, setQueryParam] = useState("");
    
    const setResponse = (json) => json.map(x=>dispatch(addTopic(x)));;
    const setError = (result) => console.error(result);

    const    handleSubmit = (event) => {
              
                //console.log(queryParam)
                const url = `DuckGo/?q=${queryParam}`
                event.preventDefault();

                dispatch(addSearchHistory(queryParam)); //updates the search history list

                const fetchData = async () => {
                    try{
                        const res = await fetch(url,{});
                        const json = await res.json();

                        setResponse(json); //updates main data-grid //TODO : convert it to 1 time update instead of using "map"

                         

                    }
                    catch (error){
                        setError(error);
                    }
                };
                fetchData();
        }

    return (
      <div>
      
        <Grid container spacing={0} justify="center" direction="row">
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              spacing={2}
              className="login-form"
            >
              <Paper
                variant="elevation"
                elevation={2}
                className="form-background"
              >
                <Grid item>
                </Grid>
                <Grid item>
                  <form onSubmit={handleSubmit}>
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          type="text"
                          placeholder="Query Param"
                          fullWidth
                          name="queryParam"
                          variant="outlined"
                          value={queryParam}
                          onChange={(event) => {
                            setQueryParam(event.target.value)
                          }}
                          required
                          autoFocus
                        />
                      </Grid>
                     

                      <Grid container spacing={0} justify="center" direction="row">

                      <Grid item >
                        <Button
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>

                    </Grid>
                  </form>
                </Grid>
                
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>

);
  }

export default DuckGoForm;
