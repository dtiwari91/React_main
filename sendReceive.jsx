import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import {Link, useNavigate} from "react-router-dom";




export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (
    

    <Grid container spacing={2} sx={{ marginTop: '1em', marginBottom: '1em', marginLeft:"9em"}}>
        <Grid item xs={12} sm={4} md={3} lg={3}   display="flex" justifyContent="center" >
         <Card sx={{ maxWidth: 400,  border: 1, borderColor: 'primary.main', borderRadius: '16px'}}>
           <CardMedia
             component="img"
             alt="green iguana"
             height="180"
             image="./assets/card/card4.PNG"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" sx={{textDecoration: 'underline',  fontFamily: 'Roboto',color: '#178EBE', }}>
             Buy now, split later
             </Typography>
             <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color:"black", fontSize: '16px',}}>
             Pay with Venmo and split your bill with just a few taps. Venmo remembers the total so you can split it the next time you’re in the app.
             <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

             </Typography>
           </CardContent>
         </Card>
         </Grid>
         {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
         <Grid item xs={12} sm={4} md={3} lg={3}   display="flex" justifyContent="center" >
         <Card sx={{ maxWidth: 400,  border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
           <CardMedia
             component="img"
             alt="green iguana"
             height="180"
             image="./assets/card/card5.PNG"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div"sx={{textDecoration: 'underline',  fontFamily: 'Roboto',color: '#178EBE', }}>
             Track spending
             </Typography>
             <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color:"black", fontSize: '16px',}}>
             We’ll keep track of what you bought, when, and from where. Manage the apps connected to your Venmo account, and add or remove access at any time.
             <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

             </Typography>
           </CardContent>
         </Card>
         </Grid>
     
         <Grid item xs={12} sm={4} md={3} lg={3}   display="flex" justifyContent="center" >
         <Card sx={{ maxWidth: 400,  border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
           <CardMedia
             component="img"
             alt="green iguana"
             height="180"
             image="./assets/card/card6.PNG"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="div" sx={{textDecoration: 'underline',  fontFamily: 'Roboto',color: '#178EBE',}}>
             Secure transactions
             

             </Typography>
             <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color:"black", fontSize: '16px',}}>
             Encryption technology helps protect your card and bank data, and eligible purchases are covered by our Venmo Purchase Program. Terms apply



             <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

             </Typography>
           </CardContent>
         </Card>
         </Grid>
     
        
         </Grid>
        
         
       );
     }