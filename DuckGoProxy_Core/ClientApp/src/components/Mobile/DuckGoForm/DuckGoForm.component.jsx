import "./DuckGoForm.styles.scss";

import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  Paper,    
  AppBar,
  Typography,
  Toolbar,
  Link,
} from "@material-ui/core";


const DuckGoForm= (props) => {


const [queryParam, setQueryParam] = useState("");
const setResponse = (result) => console.log(result);

const    handleSubmit = (event) => {
            

            const queryParam = event;

            console.log(queryParam)

            const url = 'http://localhost:5000/DuckGo/?q=x'

            event.preventDefault();
            //TODO : take URL from .ENV file
            const fetchData = async () => {
                try{
                    const res = await fetch(url,{});
                    const json = await res.json();
                    setResponse(json);
                }
                catch (error){
                    //setError(error);
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
