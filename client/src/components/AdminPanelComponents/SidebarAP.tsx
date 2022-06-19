import React from 'react'
import "../../styles/SidebarAP.scss";
import { Link } from "react-router-dom";
import {
    LineStyle,
    Timeline,
    MenuBook,
    PermIdentity,
    School,
    Science,
  } from "@mui/icons-material";
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import FaceIcon from '@mui/icons-material/Face';
import LogoutIcon from '@mui/icons-material/Logout';

const SidebarAP = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin-panel" className="link">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Summary
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin-panel/admins" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Admins
              </li>
            </Link>
            <Link to="/admin-panel/supereditors" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Super Editors
              </li>
            </Link>
            <Link to="/admin-panel/editors" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Editors
              </li>
            </Link>
            <Link to="/admin-panel/subscribers" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Subscribers
              </li>
            </Link>
            <Link to="/admin-panel/degrees" className="link">
              <li className="sidebarListItem">
                <School className="sidebarIcon" />
                Degrees
              </li>
            </Link>
            <Link to="/admin-panel/batches" className="link">
              <li className="sidebarListItem">
                <PeopleOutlineIcon className="sidebarIcon" />
                Batches
              </li>
            </Link>
            <Link to="/admin-panel/modules" className="link">
              <li className="sidebarListItem">
                <MenuBook className="sidebarIcon" />
                Modules
              </li>
            </Link>
            <Link to="/admin-panel/lechallslabs" className="link">
              <li className="sidebarListItem">
                <Science className="sidebarIcon" />
                Lecture Halls/Labs
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">User Settings</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <FaceIcon className="sidebarIcon" />
              Your Profile
            </li>
            <li className="sidebarListItem">
              <LogoutIcon className="sidebarIcon" />
              Log out
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SidebarAP