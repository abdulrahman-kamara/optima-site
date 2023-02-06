import { Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import "./pages.css"
import StyleIcon from '@mui/icons-material/Style';
import AdjustIcon from '@mui/icons-material/Adjust';

function Activities() {
  return (
    <section className="activite-contaier">
      <span style={{paddingLeft:"100px"}}>
        <span style={{letterSpacing:"0.05em"}}>Nos différentes Activités !</span>
   
        
        </span>
      <div className="main-container">
      <Card sx={{
         Height: 100,
         width:500,
         position:"absolute",
         padding:"10px",
         marginTop:"15px",
         overflow:"hidden"


    }}>
      <CardContent >
        <Typography variant="h5" style={{padding:"10px", paddingRight:"5px", fontWeight:"bolder"}} color="text.secondary" gutterBottom>
         <StyleIcon  /> 
          Système Qualité
        </Typography>
       <List >
        <ListItem >
       
          <ListItemText> <AdjustIcon fontSize="10px" style={{marginRight:"10px"}}/>Notre système qualité est un tronc commun qui nous permet de le décliner pour les différentes activités réglementées.
</ListItemText>
<ListItemText> <AdjustIcon fontSize="10px" style={{marginRight:"10px"}}/>Notre système qualité est un tronc commun qui nous permet de le décliner pour les différentes activités réglementées.
</ListItemText>
<ListItemText> <AdjustIcon fontSize="10px" style={{marginRight:"10px"}}/>Notre système qualité est un tronc commun qui nous permet de le décliner pour les différentes activités réglementées.
</ListItemText>
<ListItemText> <AdjustIcon fontSize="10px" style={{marginRight:"10px"}}/>Notre système qualité est un tronc commun qui nous permet de le décliner pour les différentes activités réglementées.
</ListItemText>

        </ListItem>
       </List>
      </CardContent>
      
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         backgroundColor:"red",
         marginLeft:"400px",
         padding:"20px",
         marginTop:"40px",
         overflow:"hidden"

    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         marginLeft:"400px",
         backgroundColor:"blue",
         padding:"20px",
         marginTop:"25%",
         overflow:"hidden"
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         overflow:"hidden",
         padding:"25px",
         marginTop:"22%",
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         padding:"20px",
         marginTop:"40%",
         overflow:"hidden"
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         backgroundColor:"pink",
         marginLeft:"400px",
         overflow:"hidden",
         padding:"20px",
         marginTop:"47%",
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    <Card sx={{
         minWidth: 470,
         position:"absolute",
         padding:"20px",
         marginTop:"60%",
    }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          see
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </div>
    </section>
  );
}

export default Activities;
