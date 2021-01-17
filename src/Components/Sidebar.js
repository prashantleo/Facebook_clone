import React from 'react'
import "./Sidebar.css"
import SidebarRow from "../Components/SidebarRow"
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import  LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import  VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import  ChatIcon from '@material-ui/icons/Chat'
import  StoreFrontIcon from '@material-ui/icons/Storefront'
import  EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import  PeopleIcon from '@material-ui/icons/People'


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://scontent-dub4-1.xx.fbcdn.net/v/t1.0-9/29244526_2125866360981817_2624351370544520275_n.jpg?_nc_cat=101&ccb=2&_nc_sid=09cbfe&_nc_ohc=D2lufU-Zs0EAX-A-0rt&_nc_ht=scontent-dub4-1.xx&oh=ee38a134dd58d77fa8a4fc4c00bc9fd9&oe=6026A178" title='Noor Bhatti'/>
            <SidebarRow Icon={LocalHospitalIcon}
            title="COVID-19 Information center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StoreFrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace"/>

            
        </div>
    )
}

export default Sidebar
