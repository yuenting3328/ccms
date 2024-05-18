import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CaseTabs from '../Tab/CaseTab';

const CaseCard = () => {
  return (
    <Card sx={{ pt:1, pb:1, pr:2, pl: 2, borderRadius: '16px', height: 400, minWidth: 280, minHeight: 100,position: 'absolute',
    top: 180,}}>
      <CardContent>
        {/* <Typography sx={{ fontSize: "16px", fontWeight:500, }} color="#333D47" gutterBottom>
        To Do Task List
        </Typography> */}
        <CaseTabs/>
      </CardContent>
    </Card>
  );
};

export default CaseCard;