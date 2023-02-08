import { Tabs, TabList, Tab } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import { useContext } from "react"
import { ThemeContext } from "../App"

const NavBar = ({orders}) => {
    const nameClass = "navBar-" + useContext(ThemeContext)
    return (
        <Tabs  colorScheme='blackAlpha' defaultIndex='none' variant='link'>
            <TabList className={nameClass}>
                <Link to="/Golosinas">
                    <Tab as='b' className={"link-" + nameClass} _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}>Golosinas</Tab>
                </Link>
                <Link to="/Azucarados">
                    <Tab as='b' className={"link-" + nameClass} _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}>Azucarados</Tab>
                </Link>
                <Link to="/Chocolate">
                    <Tab as='b' className={"link-" + nameClass} _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}>Chocolate</Tab>
                </Link>
                <Link to="/Pasteleria">
                    <Tab as='b' className={"link-" + nameClass} _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}>Pastelería</Tab>
                </Link>
                <Link to="/Helados">
                    <Tab as='b' className={"link-" + nameClass} _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}>Helados</Tab>
                </Link>
                <Link to="/Lechuza">
                    <Tab _selected={{ color: 'black', bg: 'rgba(255, 255, 255, 0.555)' }}><CartWidget orders={orders}/></Tab>
                </Link>
            </TabList>
        </Tabs>
    );
};

export default NavBar;