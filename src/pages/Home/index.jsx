import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import classes from './style.module.scss';
import img from '../../assets/London.png';

import { ping } from '@containers/App/actions';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <>
    <div className={classes.wrapper}>
      <div className={classes.text}>
        The Journey <br /> you ever dreamed of.
      </div>
      <div className={classes.text2}>
        We made a tool so you can easily keep & share your travel memories. <br />
        But there is a lot more
      </div>
    </div>

    <div className={classes.containerContent}>
      <div className={classes.text3}>
        <h2>Journey</h2>
      </div>

      <div className={classes.searchContainer}>
        <form action="/action_page.php">
          <input className={classes.form} type="text" placeholder="Find Journey" name="search"/>
          <button type="submit"><h4>Search</h4></button>
        </form>
      </div>

      <div className={classes.wrapperCard}>
          <div className={classes.card}>
            <img src={img} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>
      </div>

      
    </div>
    </>
  );
};

export default Home;
