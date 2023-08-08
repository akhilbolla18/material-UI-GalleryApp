// import react from 'react'

import Data from './Data.json'

import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  ImageList,
  ImageListItem,
  TextField,
  Button,
} from '@material-ui/core'

const App = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h5">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{marginTop: '80px', textAlign: 'center'}}>
        <Typography variant="h3">Our latest version of Photography</Typography>
        <Typography paragraph>Pleasure to take your photos as well!</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={180} cols={3}>
          {Data.map(image => (
            <ImageListItem key={image.id}>
              <img src={image.img} alt={image.title} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      <center>
        <Container>
          <Typography variant="h4" style={{marginTop: '30px'}}>
            Contact Form
          </Typography>
          <form>
            <TextField
              label="Enter your name"
              variant="outlined"
              style={{width: '500px', margin: '10px'}}
              type="text"
            ></TextField>
            <br />
            <TextField
              label="Enter email"
              variant="outlined"
              style={{width: '500px', margin: '10px'}}
              type="email"
            ></TextField>
            <br />
            <TextField
              label="Enter your name"
              variant="outlined"
              style={{width: '500px', margin: '10px'}}
              type="password"
            ></TextField>
            <br />
            <TextField
              label="Enter your name"
              variant="outlined"
              style={{width: '500px', margin: '10px'}}
              type="text"
            ></TextField>
            <br />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </form>
        </Container>
      </center>
    </div>
  )
}

export default App
