import "./Home.css";
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={ `vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`, borderRight: 5,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function Home(): JSX.Element {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="Home">
//hjhkjhk
        <div className="Box">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 ,flexDirection: 'row-reverse'}}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"jjvhvjvv
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderLeft: 1, borderColor: 'divider' ,height: 170}}
                >
                    <Tab label="הנהלה" {...a11yProps(0)} sx={{fontSize: 20}} />
                    <Tab label="מורות" {...a11yProps(1)} sx={{fontSize: 20}}/>
                    <Tab label=" הורים" {...a11yProps(2)} sx={{fontSize: 20}}/>
                </Tabs>
                <TabPanel value={value} index={0}>
                    הנהלה
                </TabPanel>
                <TabPanel value={value} index={1}>
                    מורות
                </TabPanel>
                <TabPanel value={value} index={2}>
                    הורים
                </TabPanel>
            </Box>
        </div>
        </div>
    );
}

export default Home;
