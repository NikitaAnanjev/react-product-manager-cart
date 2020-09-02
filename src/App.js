import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// COMPONENTS
import Cart from "./components/Cart/Cart"

import ManagerTable from "./components/Market/ManagerTable"

function App() {
    return (
        <div className="App">
            <CssBaseline/>
            <Container className="left">
                <Grid item className="left" xs={6}>
                    <Box my={2}>
                        <ManagerTable/>
                    </Box>
                </Grid>
                <Grid item className="left" xs={6}>
                    <Cart/>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
