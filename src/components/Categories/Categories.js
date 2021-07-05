import { useState } from 'react';
import './Categories.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { connect } from 'react-redux';
import { activeCategoryAction } from '../../store/categories';


function Categories(props) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (categoryName) => {
    props.setActiveCategory(categoryName);
  };

  return (
    <>
      <AppBar className='categories_tab' position='static'>
        <Tabs value={value} onChange={handleChange}>
          {props.categories.map((category, index) => (
            <Tab
              key={index}
              label={category.displayName}
              onClick={() => handleClick(category.name)}
            />
          ))}
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
