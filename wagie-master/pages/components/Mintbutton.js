import * as React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";

function Buttonmint() {
    return (
        <>
            <Button href='https://app.uniswap.org/swap'
            sx ={{
                marginTop: '1rem',
                padding:'1rem',
                display: 'flex',
                width: '80%',
                height: 'auto',
                border: '2px solid black',
                backgroundColor: 'white',
                '&:hover': {
                backgroundColor: 'green',
                color: 'white',
                 },
                
                
            }}>
                <Typography fontSize='3rem'>Grab a $Cuppa</Typography>
            </Button>
        </>
    )
}

export default Buttonmint;