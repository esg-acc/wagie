import React, {useState,useEffect} from 'react';
//import { Button } from './Button';
import twitterLogo from 'next/image';
import telegramLogo from 'next/image';
import discordLogo from 'next/image';
import openseaLogo from 'next/image';
import fresco150 from '../../public/assets/fresco150.png'
import { Typography } from '@mui/material';
import { Container,Button} from '@mui/material';
import Image from 'next/image';
import "@fontsource/roboto/900.css"


function HeaderNavbar() {
    const openNewTab = (url) => {
        window.open(url, "_black", "noreferrer");
    }
    /*const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => { setClick(!click); };
    const closeMobileMenu = () => { setClick(false)};

    const showButton = () => {};
    */

    return (
        <>
            <Container className='header' maxWidth="false"
            sx={{
                paddingTop:"1rem",
                display:"flex",
                paddingLeft: "0",
                paddingRight: "0",
                position:"relative",
                marginBottom: "auto",
                flexDirection:"column",
                flexShrink: "2",
                flexWrap:"wrap",
                
            }}
            >
                <div className='navbar-container'>
                            <ul className="nav-menu">
                                <li>
                                    <Button 
                                    onClick={() => {
                                        openNewTab("https://twitter.com/cuppabase")
                                    }}
                                    sx={{
                                        minWidth: '32px',
                                    }}>
                                    <div className="nav-icon">
                                        <Image className="img-icon" src="/assets/twitter.svg" alt ="twitter" color="white"
                                        width={32} height={32}/>
                                    </div>
                                    </Button>
                                </li>
                                <li>
                                    <Button 
                                    onClick={() => {
                                        openNewTab("https://t.me/cuppabase")
                                    }}
                                    sx={{
                                        minWidth: '32px',
                                    }}>
                                    <div className ="nav-icon">
                                        <Image className="img-icon" src="/assets/telegram.svg" alt="telegram" 
                                        style={{fill: "white"}}
                                        width={32} height={32}/>
                                    </div>
                                    </Button>
                                </li>
                                <li>
                                <Button 
                                    onClick={() => {
                                        openNewTab("https://www.whitehouse.gov/administration/president-biden/")
                                    }}
                                    sx={{
                                        minWidth: '32px',
                                    }}>
                                    <div className= "nav-icon">
                                        <Image className= "img-icon" src="/assets/discord.svg" alt="discord"
                                        width={32} height={32}/>
                                    </div>
                                    </Button>
                                </li>
                               {/* <li>
                                    <Button sx={{
                                        minWidth: '32px',
                                        color: 'black',
                                    }}>
                                    <div className='nav-icon'>
                                        <Image className= "img-icon" src="/assets/opensea.svg" alt='MarketPlace'
                                        width={32} height={32}/>
                                    </div>
                                    </Button>
                                </li>*/}
                            </ul>
                    </div>
                    <div className="title-container" >
                        Cuppa Joe
                    </div>
                    {/*
                        
                     */}
            </Container>
        </>
    )
}

function RedirectPage() {
    React.useEffect(() => {
        window.location.replace('https://twitter.com/cuppabase')
    },[])
}

export default HeaderNavbar;