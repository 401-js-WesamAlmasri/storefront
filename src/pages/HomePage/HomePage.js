import './HomePage.css';
import Container from '@material-ui/core/Container';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';

const HomePage = (props) => {

  return (
    <Container className='home_page_container' maxWidth='xl'>
      <div className='home_page_main'>
        <Categories />
        <Products />
      </div>
    </Container>
  );
};


export default HomePage;