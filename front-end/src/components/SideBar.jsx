import React, {useState, useEffect} from 'react'
import {
    Box, 
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material"
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutlined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutlined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingsOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material"
import { useLocation, useNavigate } from 'react-router-dom'
import FlexBetween from './FlexBetween'
import ProfileImg from "../assets/perfil.png"

const SideBar = ({
    drawerWidth,
    isSideBarOpen,
    setIsSideBarOpen,
    isNonMobile,
}) => {
    const {pathname} = useLocation()
    const [active, setActive] = useState("")
    const navigate = useNavigate()
  return (
    <div>SideBar</div>
  )
}

export default SideBar