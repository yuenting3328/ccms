import { ReactComponent as CaseIcon } from "../assets/Briefcase.svg";
import { ReactComponent as DocumentSearchIcon } from "../assets/Database Search.svg";
import { ReactComponent as PersonNoteIcon } from "../assets/Person Note.svg";
import { ReactComponent as NotepadIcon } from "../assets/Notepad Person.svg";
import { ReactComponent as DatabaseSearchIcon } from "../assets/Database Search.svg";
import { ReactComponent as DataTrendingIcon } from "../assets/Data Trending.svg";
import { ReactComponent as NotebookIcon } from "../assets/Notebook.svg";
import FunctionCard from '../components/Card/FunctionCard';
import CaseCard from '../components/Card/CaseCard';
import * as React from 'react';
import  Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Typography from '@mui/material/Typography';
import { ReactComponent as ReportsIcon } from "../assets/Document Landscape Data.svg";
import CalendarCard from '../components/Calendar/CalendarCard';
import SearchField from '../components/Input/SearchField';
const Dashboard = () =>{

    return(
        <div>
                  <Box component="main" sx={{ flexGrow: 1, p: 0, backgroundColor:"#EFF7FF", width:"100%", height:"100%", justifyContent: "center", alignItems:"center" }}>
         <Grid container spacing={1} sx={{ alignItems:"center" }}>
         <Grid item xs={12} sm={0.6}/>
      <Grid item xs={12} sm={11.4} sx={{justifyContent: "center", alignItems:"center" }}>
        <SearchField/>
        </Grid>
        </Grid>

         <Box >
        <Grid container spacing={1} sx={{ alignItems:"center" ,pt:3, pb:3}}>
        <Grid item xs={12} sm={0.6} sx={{justifyContent: "center", alignItems:"center" }}/>
      <Grid item xs={12} sm={2.4} sx={{justifyContent: "center", alignItems:"center" }}>
        <CaseCard/>
        </Grid>
        <Grid item xs={12} sm={6} sx={{justifyContent: "center", alignItems:"center", pl:0, pt:0 }}>
        <Box sx={{ width:770, height:400, backgroundColor:"#D9D9D9", borderRadius:"16px", justifyItems:"center", alignItems:"center", top:160}}>
        <Typography sx={{ p:1.65, m:0, fontSize: 12, fontWeight:500, }} color="#000000" gutterBottom>
        Case A
        </Typography>
        </Box>
        </Grid>
        <Grid item xs={12} sm={3} sx={{justifyContent: "center", alignItems:"center" }}>
        <CalendarCard/>
        </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ alignItems:"center", top:700 }} >
        <Grid item xs={12} sm={0.6} sx={{justifyContent: "center", alignItems:"center" }}/>
      <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"report"}
          text={"SITREP Reports"}
          >
            <ReportsIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Case"}
          text={"Case Management"}
          >
            <CaseIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Document Search"}
          text={"CAPO Investigation Report Record Enquiry"}
          >
            <DocumentSearchIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Person Note"}
          text={"Complaint Record Check"}
          >
            <PersonNoteIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
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
          <Grid container spacing={4} sx={{ alignItems:"center", top:700 }} >
          <Grid item xs={12} sm={0.52} sx={{justifyContent: "center", alignItems:"center" }}/>
      <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Database Search"}
          text={"CAPO Case Enquiry"}
          >
            <DatabaseSearchIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Notebook"}
          text={"Reporting"}
          >
            <NotebookIcon/>
          </FunctionCard>
          </Grid>

          <Grid item xs={12} sm={1.65} sx={{justifyContent: "center", alignItems:"center" }}>
        <FunctionCard     
          id={"Data Trending"}
          text={"Data Analytic Tool"}
          >
            <DataTrendingIcon/>
          </FunctionCard>
          </Grid>
</Grid>
</Box>
</Box>
</div>
    );
};

export default Dashboard;