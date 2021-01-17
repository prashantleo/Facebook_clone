import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import  SubscriptionsOutlinedIcon  from '@material-ui/icons/SubscriptionsOutlined'
import HomeIcon from "@material-ui/icons/Home";
import  StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import FlagIcon from "@material-ui/icons/Flag";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import ForumIcon from "@material-ui/icons/Forum";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css' 

const Header = () => {
    return (
        <div
        className='header'>
        <div className='header_left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" alt ="Facebook logo"></img>
        </div>
        <div className="header_input">
            <SearchIcon/>
            <input placeholder='Search Facebook' type="text"/>
        </div>
        <div className="header_center">
                <div className="header_option header_option--active">
                    <HomeIcon fontsize='large'/>
                    </div>
                    
                    <div className="header_option">
                        <FlagIcon fontsize='large'/>
                        </div>
                        <div className="header_option">
                        <SubscriptionsOutlinedIcon fontsize='large'/>
                        </div>
                        <div className="header_option">
                        <StorefrontOutlinedIcon fontsize='large'/>
                        </div>
                        <div className="header_option">
                        <SupervisedUserCircleIcon fontsize='large'/>
                        </div>
        
         </div>
<div className='header__right'>
    <div className='header__info'>
        <Avatar />
        <h4>Noor logged in</h4>
    </div>
    <IconButton>
    <AddIcon/>
    </IconButton>
    
    <IconButton>
    <ForumIcon/>
    </IconButton>
   
   <IconButton>
    <NotificationsActiveIcon />
    </IconButton>

    <IconButton>
    <ExpandMoreIcon />
    </IconButton>

</div>


         </div>
                
            
    
    )
}

export default Header
