import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ReactComponent as FontSmallIcon } from "../../assets/Font Size Small.svg"; 
import { ReactComponent as FontMediumIcon } from "../../assets/Font Size Medium.svg";
import { ReactComponent as FontLargeIcon } from "../../assets/Font Size.svg";
import FontIconButton from "../Button/FontIconButton";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
// import { ReactComponent as CaseIcon } from "../../assets/Briefcase.svg";
// import { ReactComponent as DocumentSearchIcon } from "../../assets/Database Search.svg";
// import { ReactComponent as PersonNoteIcon } from "../../assets/Person Note.svg";
// import { ReactComponent as NotepadIcon } from "../../assets/Notepad Person.svg";
// import { ReactComponent as DatabaseSearchIcon } from "../../assets/Database Search.svg";
// import { ReactComponent as DataTrendingIcon } from "../../assets/Data Trending.svg";
// import { ReactComponent as NotebookIcon } from "../../assets/Notebook.svg";
import SelectField from "../Select/SelectField";
import { useFormik } from "formik";
import * as Yup from "yup";
import Grid from "@mui/material/Grid";
// import { ReactComponent as ReportsIcon } from "../../assets/Document Landscape Data.svg";
// import CalendarCard from '../Calendar/CalendarCard';
// import SearchField from '../Input/SearchField';
// import FunctionCard from '../Card/FunctionCard';
// import CaseCard from '../Card/CaseCard';
// import { Button } from '@mui/material';
const data = [
  {
    name: "SIP TEAM K1A CAPO K",
    value: 1,
  },
  {
    name: "Test Title 2",
    value: 2,
  },
  {
    name: "Test Title 3",
    value: 3,
  },
  {
    name: "Test Title 4",
    value: 4,
  },
];

const drawerWidth = 400;



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

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const MiniDrawer = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const formik = useFormik ({
    initialValues: {
      refNo: "",
      ApplicationType: "",
      date: null,
      scheme: null,
      filterProps: [],
    },
    validationSchema: Yup.object({
      refNo: Yup.string().min(5, "Must be 5 characters at least"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ bgcolor: "#FCFCFC" }}>
      <Toolbar>
      <Grid container spacing={1} sx={{ alignItems:"center" }}>
      <Grid item xs={12} sm={0.5} sx={{justifyContent: "center", alignItems:"center" }}>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
              color:"#333D47",
            }}
          >
            <MenuIcon />
          </IconButton>
          </Grid>
          <LogoIcon/>
          <Grid item xs={12} sm={6.5}>
          <Typography component="div" sx={{ fontSize:"h7", fontWeight:"700", flexGrow: 1, color:"#333D47"}}>
      CAPO Case Management System (CCMS)
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1.5}>
          <Typography component="div" sx={{ fontSize:"h7", fontWeight:"700", flexGrow: 1, color:"#333D47" }}>
          SIP 45678 LAW
          </Typography>
          </Grid>
          <Grid item xs={12} sm={1.5}>
          <SelectField
                    name={"ApplicationType"}
                    id={"appl-type"}
                    // label={"Application Type"}
                    placeholder={"Please Input"}
                    value={formik.values.ApplicationType}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.ApplicationType &&
                      Boolean(formik.errors.ApplicationType)
                    }
                    data={data}
                  />
                  </Grid>

          <FontIconButton
            id={"fontsmall"}
            ariaLabel="fontsmall"
            onClick={() => console.log("fontsmall")}
          >
            <FontSmallIcon/>
          </FontIconButton>


          <FontIconButton
            id={"fontmedium"}
            ariaLabel="fontmedium"
            onClick={() => console.log("fontmedium")}
          >
            <FontMediumIcon/>
          </FontIconButton>
                    
          <FontIconButton
            id={"fontlarge"}
            ariaLabel="fontlarge"
            onClick={() => console.log("fontlarge")}
          >
            <FontLargeIcon/>
          </FontIconButton>
          </Grid>
      </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
        <ListItemButton color= "primary">
        <ListItemIcon>
        <StyledDashboardIcon/>
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
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor:"#EFF7FF", width:"100%", height:"100%"}}>
        <DrawerHeader />
        {/* <Grid container spacing={1} sx={{ alignItems:"center" }}>
      <Grid item xs={12} sm={12} sx={{justifyContent: "center", alignItems:"center" }}>
        <SearchField/>
        </Grid>
        </Grid> */}

        {/* <Box sx={{ p: 2,  }}>
        <Grid container spacing={1} sx={{ alignItems:"center" ,paddingTop:4, pb:4}}>
      <Grid item xs={12} sm={2.6} sx={{justifyContent: "center", alignItems:"center" }}>
        <CaseCard/>
        </Grid>
        <Grid item xs={12} sm={6} sx={{justifyContent: "center", alignItems:"center" }}>
        <Box sx={{ width:760, height:400, backgroundColor:"#D9D9D9", borderRadius:"16px", justifyItems:"center", alignItems:"center", top:160}}>
        <Typography sx={{ p:1.5, m:0, fontSize: 12, fontWeight:500, }} color="#000000" gutterBottom>
        Case A
        </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} sm={3} sx={{justifyContent: "center", alignItems:"center" }}>
        <CalendarCard/>
        </Grid>
        </Grid>

        <Grid container spacing={2} sx={{ alignItems:"center", top:700 }} >
      <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"report"}
          text={"SITREP Reports"}
          >
            <ReportsIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Case"}
          text={"Case Management"}
          >
            <CaseIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Document Search"}
          text={"CAPO Investigation Report Record Enquiry"}
          >
            <DocumentSearchIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Person Note"}
          text={"Complaint Record Check"}
          >
            <PersonNoteIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Notepad"}
          text={"Review of Complainee Record"}
          >
            <NotepadIcon/>
          </FunctionCard>
          </Grid>
          </Grid>
          </Box>

          <Box sx={{ p: 2 }}>
          <Grid container spacing={2} sx={{ alignItems:"center", top:700 }} >
      <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Database Search"}
          text={"CAPO Case Enquiry"}
          >
            <DatabaseSearchIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Notebook"}
          text={"Reporting"}
          >
            <NotebookIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.8} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Data Trending"}
          text={"Data Analytic Tool"}
          >
            <DataTrendingIcon/>
          </FunctionCard>
          </Grid>
</Grid>
</Box> */}
      </Box>
    </Box>
  );
}
      export default MiniDrawer;