import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import CartWidget from './CartWidget';

const NavBar = () => {
    return (
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList>
                <Tab> Productos</Tab>
                <Tab>Envíos</Tab>
                <Tab>Quiénes somos</Tab>
                <Tab><CartWidget/></Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <p>Productos.</p>
                </TabPanel>
                <TabPanel>
                    <p>Info de los envíos.</p>
                </TabPanel>
                <TabPanel>
                    <p>Tienda de caramelos ubicada en Hogsmeade.</p>
                    <p>Propiedad de Ambrosius Flume y su esposa.</p>
                </TabPanel>
                <TabPanel>
                    <p>Lo que lleva tu lechuza.</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default NavBar;