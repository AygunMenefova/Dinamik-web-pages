import React from 'react'
import Logo from './Logo'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    }

    return (

        <div>

            <div className='image-logo'>
                <Logo />
            </div>

                <div className='navbar'>
                    <Link className='link' to="/">Home</Link>
                    <Link className='link' to="/mountain">Mountain</Link>
                    <Link className='link' to="/jungle">Jungle</Link>
                    <Link className='link' to="/news">News</Link>
                    <Link className='link' to="/ski">Ski</Link>
                    <Link className='link' to="/about">About</Link>
                    <Link className='link' to="/contact">Contact</Link>
                </div>

            <div className='dasboard'>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon sx={{ color: '#000' }} />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem  onClick={handleClose}>
                        <Link className='linkk' to="/">Home</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/mountain">Mountain</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/jungle">Jungle</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/news">News</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/ski">Ski</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/about">About</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link className='linkk' to="/contact">Contact</Link>
                    </MenuItem>

                </Menu>
            </div>
        </div>

        // <div className='navbar-all'>

        //     <div className='image-logo'>
        //         <Logo />
        //     </div>

        //     <div>
        //         <div className='navbar'>
        //             <Link className='link' to="/">Home</Link>
        //             <Link className='link' to="/mountain">Mountain</Link>
        //             <Link className='link' to="/jungle">Jungle</Link>
        //             <Link className='link' to="/news">News</Link>
        //             <Link className='link' to="/about">About</Link>
        //             <Link className='link' to="/contact">Contact</Link>
        //         </div>
        //         {/* <div className='btn-d'>
        //             <MenuIcon />
        //         </div> */}
        //     </div>

        // </div>
    )
}

export default Navbar