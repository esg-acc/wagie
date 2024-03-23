import * as React from "react";
import Button from '@mui/material/Button';
import { Box,Container, Paper, Slide } from "@mui/material";
import Typography from "@mui/material/Typography";
import Buttonmint from "./Mintbutton.js"

function Textmint() {
    return (
        <>  
            <Container
            sx={{
                display: 'flex',                
                alignItems: 'center',
                flexDirection: 'column',
            }}>        
                <Paper
                sx={{
                    
                    justifyContent: 'center',
                    alignItems: 'center',                    
                    margin:'1rem',
                    width: '50%',
                    maxWidth: '75%',
                    maxHeight: '20%',
                    minWidth: '400px',
                    border: '1px solid black'
                }}>
                    <Typography variant='h3'>Cuppa Joe</Typography>
                </Paper>
                <Container
            sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}> 
            <img
            src='/assets/biden.png'
            alt='Joe'
            />
            <Container
            sx={{
                display: 'flex',
                width: '50%',                
                alignItems: 'center',
                flexDirection: 'column',
                '@media (max-width:599px)':{
                    width: '100%',
                },
            }}>    
                <Box
                sx={{
                    border: '1px solid black',
                    marginTop: '1rem',
                    
                }}>
                <Typography
                    fontFamily='tahoma'
                    fontSize='1.1rem'
                    >Wake up every morning with a fresh Cuppa Joe.\nCA: 0x00000000000000000
                </Typography> 
                </Box>
                <Box
                sx={{
                    border: '1px solid black',
                    marginTop: '1rem',
                    padding: '0 5px 0 5px',
                    
            
                }}>
                <Typography
                    fontFamily='tahoma'
                    fontSize='1rem'
                    ><b>Official Links</b>: <a href='https://dexscreener.com/base'>Dexscreener</a>, <a href='https://twitter.com/cuppabase'>Twitter</a>, <a href='https://t.me/cuppabase'>Telegram</a>, <a href='https://basescan.io/address/'>Contract</a>. 
                </Typography> 
                </Box>
                </Container>

                </Container>
                <Buttonmint></Buttonmint>
            </Container>
        </>
    )
}
export default Textmint;