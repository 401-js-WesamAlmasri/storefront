import './Categories.css';
import { AppBar, Tabs, Tab } from '@material-ui/core';

function Categories() {
  return (
    <>
      <AppBar className='categories_tab' position='static'>
        <Tabs
          value={'value'}
        //   onChange={handleChange}
          aria-label='simple tabs example'
        >
          <Tab label='Electronics'  />
          <Tab label='Food' />
          <Tab label='Clothes' />
        </Tabs>
      </AppBar>
    </>
  );
}

export default Categories;
