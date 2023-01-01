import {
    Box,
    Card,
    CardContent,
    Typography,
  } from '@mui/material'
  
  export const MuiCard = ({Title, Content, BG}) => {
    return (
      <Box width='300px'>
        <Card style={{backgroundColor: BG}}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              {Title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {Content}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    )
  }