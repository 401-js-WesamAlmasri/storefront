import './HomePage.css';
import Container from '@material-ui/core/Container';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';

const HomePage = (props) => {

  return (
    <Container className='home_page_container' maxWidth='xl'>
      <Header />
      <div className='home_page_main'>
        <Categories />
        <Products />
      </div>
      <Footer />
    </Container>
  );
};


export default HomePage;