import React from 'react'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Event = (event) => {
  const [expanded, setExpanded] = React.useState(false);
  const [favorite, setFavorite] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = () => {
    setFavorite(!favorite);
  };

  const time = new Date(event.event.time)
  return (
    <Card>
      <CardHeader
        title={event.event.name}
        subheader={time.toLocaleString('pt-BR')}
        action={
          <IconButton onClick={handleFavoriteClick}>
            {favorite ? <FavoriteIcon sx={{ color: red[500] }} /> : <FavoriteBorderIcon />}
          </IconButton>
        }
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="body2" color="text.secondary">
          {event.event.speaker}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {event.event.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}

export default Event