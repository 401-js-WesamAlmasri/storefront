import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: 20,
  },
  media: {
    height: 140,
  },
});

function ProductCard({ product, onAddToCard }) {
  let history = useHistory();
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={product.image || `https://source.unsplash.com/random?${product.name}`}
          title={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {product.name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {product.description}
          </Typography>
          <Typography variant='caption' component='p'>
            In stock: {product.inStock}
          </Typography>
          <Typography variant='caption' component='p'>
            Price: {product.price} $
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={onAddToCard}
          size='small'
          color='primary'
        >
          Add To Cart
        </Button>
        <Button onClick={() => {history.push(`/products/${product._id}`)}} size='small' color='primary'>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default ProductCard;
