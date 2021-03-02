import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';

import { IconButton } from '@material-ui/core';

export default function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon fontSize="large" className="header__icon" />
            </IconButton>

            <img
                className="header__logo"
                src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo-768x432.jpg"
                alt=""
            />

            <IconButton>
                <ForumIcon fontSize="large" className="header__icon" />
            </IconButton>
        </div>
    )
}
