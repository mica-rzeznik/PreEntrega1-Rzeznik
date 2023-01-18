import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Link to="/Golosinas">
                    <Tab>Golosinas</Tab>
                </Link>
                <Link to="/Azucarados">
                    <Tab>Azucarados</Tab>
                </Link>
                <Link to="/Chocolate">
                    <Tab>Chocolate</Tab>
                </Link>
                <Link to="/Pasteleria">
                    <Tab>Pastelería</Tab>
                </Link>
                <Link to="/Helados">
                    <Tab>Helados</Tab>
                </Link>
                <Link to="/Lechuza">
                    <Tab><CartWidget/></Tab>
                </Link>
            </TabList>
        </Tabs>
    );
};

export default NavBar;