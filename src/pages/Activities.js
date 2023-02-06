import { Button, Card, CardActions, CardContent, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from "react";
import "./pages.css"
import StyleIcon from '@mui/icons-material/Style';
import AdjustIcon from '@mui/icons-material/Adjust';
import LocalTaxiIcon from '@mui/icons-material/LocalTaxi';
import { transform } from "@babel/core";

function Activities() {
  return (
    <section className="activite-contaier">
      <span style={{paddingLeft:"100px"}}>
        <span style={{letterSpacing:"0.05em"}}>Nos différentes Activités !</span>
   
        
        </span>
      <div className="main-container">
      <Card sx={{
         Height: 100,
         width:550,
         position:"absolute",
         padding:"10px",
         marginTop:"15px",
         overflow:"hidden"


    }}>
    
    <CardContent style={{display:"flex", flexDirection:"column", paddingLeft:"10px"}}>
        <Typography variant="h5" style={{padding:"10px", paddingRight:"10px", fontWeight:"bolder"}} color="text.secondary" gutterBottom>
         <StyleIcon  /> 
          Système Qualité
        </Typography>
       <List className="mainlist">
        <ListItem className="listtext">
          <ListItemText > <AdjustIcon sx={{paddingTop:"10px",}} />Notre système qualité est un tronc commun qui nous permet de le décliner pour les différentes activités réglementées.
</ListItemText>
<ListItemText> <AdjustIcon  sx={{paddingTop:"10px",}}/>Evolutivité, pluridisciplinarité, polyvalence et service client  sont les valeurs essentielles de notre entreprise.
</ListItemText>
<ListItemText> <AdjustIcon  sx={{paddingTop:"10px",}}/>Le système s'enrichie et évolue en fonction des retours des techniciens des ateliers du réseau pour coller au plus prés du quotidien de vos collaborateurs.
</ListItemText>
<ListItemText> <AdjustIcon  sx={{paddingTop:"10px",}}/>Notre mission :<p style={{fontWeight:"bolder"}}>démocratiser les réglementations et différentes normes au service de votre productivité.</p> 
</ListItemText>
        </ListItem>
       </List>
      </CardContent>
      
    </Card>
     <Card sx={{
          Height: 100,
          width:550,
         position:"absolute",
         marginLeft:"512px",
         padding:"20px",
         marginTop:"100px",
         overflow:"hidden",
        
        
         
         

    }} className="cards">
      <CardContent  style={{display:"flex", flexDirection:"column", paddingLeft:"10px"}}>
      <Typography variant="h5" style={{padding:"10px", paddingRight:"5px", fontWeight:"bolder", }} color="text.secondary" gutterBottom>
         <LocalTaxiIcon style={{width:40, height:40,paddingTop:"10px" }} /> 
         Taximètre
        </Typography>
        <List className="mainlist">
        <ListItem className="listtext">
          <ListItemText > <AdjustIcon sx={{paddingTop:"10px",}} />La première pierre fondatrice de Cercle Optima, le système qualité a été créé pour  et avec les installateurs et vérificateurs de Taximètre.
</ListItemText>
<ListItemText> <AdjustIcon  sx={{paddingTop:"10px",}}/>Nous vous aidons à délivrer un produit conforme  dans le respect de la réglementation.
</ListItemText>
<ListItemText> <AdjustIcon  sx={{paddingTop:"10px",}}/>Aujourd'hui, plus de la moitié des taxis évoluant sur le territoire sont entretenus dans un de nos centres.
</ListItemText>
        </ListItem>
       </List>
      </CardContent>
    </Card>

   {/* <Card sx={{
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
    </Card> */}
      </div>
    </section>
  );
}

export default Activities;
