import { useState, useEffect } from 'react';
import './Categories.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {
  activeCategoryAction,
  getCategoriesActionAsync,
} from '../../store/categories';


const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});



function Categories(props) {
  const [value, setValue] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector(mapStateToProps);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = (categoryName) => {
    dispatch(activeCategoryAction(categoryName));
  };

  useEffect(() => {
    dispatch(getCategoriesActionAsync());
  }, []);

  return (
    <>
      <AppBar className='categories_tab' position='static'>
        <Tabs value={value} onChange={handleChange}>
          {state.categories.map((category, index) => (
            <Tab
              key={index}
              label={category.name}
              onClick={() => handleClick(category.name)}
            />
          ))}
        </Tabs>
      </AppBar>
    </>
  );
}

export default Categories;
