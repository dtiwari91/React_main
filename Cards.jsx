import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";




export default function ImgMediaCard() {
  const navigate = useNavigate();
  return (


    <Grid container spacing={2} sx={{ marginTop: '1em', marginBottom: '1em' }}>
      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/img16.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Pay in apps & online
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Check out with Venmo, then share your finds with friends.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid xs display="flex" justifyContent="center" alignItems="center"> */}
      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car2.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Direct Deposit
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Get paychecks sent right into your Venmo account, up to two days earlier than your usual payday.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car3.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Shop local


            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Pay local businesses the same way you pay your friends on Venmo.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car4.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Venmo Debit Card
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Take your Venmo balance shopping everywhere Mastercard® is accepted in the U.S.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car5.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Venmo for your apple watch
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              You can use Venmo with both an iPhone and Android device                                          .
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car6.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Manage your privacy settings
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Set any payment to “friends,” “public,” or “private” — share with the world, or keep it to yourself.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car7.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Send a gift
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Use Venmo for those generous moments: send cash for coffee, celebrate a birthday, or just say hi.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={4} md={3} lg={3} display="flex" justifyContent="center" >
        <Card sx={{ maxWidth: 400, border: 1, borderColor: 'primary.main', borderRadius: '16px' }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image="./assets/car8.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{ textDecoration: 'underline', fontFamily: 'Roboto', color: '#178EBE', }}>
              Split the necessities
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ letterSpacing: '0.18px', color: "black", fontSize: '16px', }}>
              Utilities, rent, groceries — when you’re splitting basic bills, everyone pays up easily.
              <br /><a href='https://venmo.com/' target={'blank'} class="btn btn-primary" >Learn More</a>

            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

  );
}