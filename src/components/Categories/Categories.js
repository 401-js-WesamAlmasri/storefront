import './Categories.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { activeCategoryAction } from '../../store/categories';


function Categories(props) {
  const handleClick = (categoryName) => {
    props.setActiveCategory(categoryName);
  }
  console.log(props.activeCategory)
  return (
    <>
      <AppBar className='categories_tab' position='static'>
        <Tabs>
          {
            props.categories.map((category) => <Tab className={props.activeCategory === category ? 'active_tab' : ''} label={category} onClick={() => handleClick(category)}  />)
          }
        </Tabs>
      </AppBar>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  activeCategory: state.categories.activeCategory,
  products: state.products.products,
});

const mapDispatchToProps = {
  setActiveCategory: activeCategoryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);