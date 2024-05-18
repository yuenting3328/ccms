import * as React from 'react';
import Box from '@mui/material/Box';
import styled from "styled-components";
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
// import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { ReactComponent as Dashboard } from "../../assets/Sidebar Dashboard.svg";
import { ReactComponent as Calendar } from "../../assets/Sidebar Document Landscape Data.svg";
import { ReactComponent as Case } from "../../assets/Sidebar Briefcase.svg";
import { ReactComponent as DocumentSearch } from "../../assets/Sidebar Document Search.svg";
import { ReactComponent as Note } from "../../assets/Sidebar Person Note.svg";
import { ReactComponent as Notepad } from "../../assets/Sidebar Notepad Person.svg";
import { ReactComponent as Database } from "../../assets/Sidebar Database Search.svg";
import { ReactComponent as Notebook } from "../../assets/Sidebar Notebook.svg";
import { ReactComponent as Trending } from "../../assets/Sidebar Data Trending.svg";
import { ReactComponent as Profile } from "../../assets/Sidebar Person.svg";
import { ReactComponent as Setting } from "../../assets/Sidebar Setting.svg";
const drawerWidth = 240;

// const Drawer = styled(drawer)`
//   display: flex;
//   width: 1px;
//   background-color: #FFF;
//   margin: 10px;
// `

const StyledDashboardIcon = styled(Dashboard)`
  position: flex;
  width: 28px
`;

const StyledCalendarIcon = styled(Calendar)`
  position: flex;
  width: 28px
`;

const StyledCaseIcon = styled(Case)`
  position: flex;
  width: 28px
`;

const StyledDocumentSearchIcon = styled(DocumentSearch)`
  position: flex;
  width: 28px
`;


const StyledNoteIcon = styled(Note)`
  position: flex;
  width: 28px
`;

const StyledNotepadIcon = styled(Notepad)`
  position: flex;
  width: 28px
`;

const StyledDatabaseIcon = styled(Database)`
  position: flex;
  width: 28px
`;

const StyledNotebookIcon = styled(Notebook)`
  position: flex;
  width: 28px
`;

const StyledTrendingIcon = styled(Trending)`
  position: flex;
  width: 28px
`;

const StyledProfileIcon = styled(Profile)`
  position: flex;
  width: 28px
`;

const StyledSettingIcon = styled(Setting)`
  position: flex;
  width: 28px
`;
const ClippedDrawer = () => {

//   const openedMixin = (theme: Theme): CSSObject => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = (theme: Theme): CSSObject => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
// }));

// interface AppBarProps extends MuiAppBarProps {
//   open?: boolean;
// }

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })<AppBarProps>(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     width: drawerWidth,
//     flexShrink: 0,
//     whiteSpace: 'nowrap',
//     boxSizing: 'border-box',
//     ...(open && {
//       ...openedMixin(theme),
//       '& .MuiDrawer-paper': openedMixin(theme),
//     }),
//     ...(!open && {
//       ...closedMixin(theme),
//       '& .MuiDrawer-paper': closedMixin(theme),
//     }),
//   }),
// );

// export default function MiniDrawer() {
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };


  return(
    <Box sx={{ display: 'flex'}}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer +1 }}>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: 1,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Box sx={{ overflow: 'auto' }}>
          <List sx={{ pt:7,}}>
          <ListItemButton>
        <ListItemIcon>
        <StyledDashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledCalendarIcon />
        </ListItemIcon>
        <ListItemText primary="Calendar" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledCaseIcon />
        </ListItemIcon>
        <ListItemText primary="Case Management" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledDocumentSearchIcon />
        </ListItemIcon>
        <ListItemText primary="CAPO Investigation Report Record Enquiry" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledNoteIcon />
        </ListItemIcon>
        <ListItemText primary="Complaint Record Check" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledNotepadIcon />
        </ListItemIcon>
        <ListItemText primary="Review of Complainee Record" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledDatabaseIcon />
        </ListItemIcon>
        <ListItemText primary="CAPO Case Enquiry" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledNotebookIcon />
        </ListItemIcon>
        <ListItemText primary="Reporting" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledTrendingIcon />
        </ListItemIcon>
        <ListItemText primary="Data Analytic Tool" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledProfileIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StyledSettingIcon />
        </ListItemIcon>
        <ListItemText primary="System Setting" />
      </ListItemButton>
          </List>

        </Box>
      </Drawer>
    </Box>

  );

};

export default ClippedDrawer;


