import React from 'react';
import classes from './style.module.scss';
import img2 from '../../assets/London.png'

const Bookmark = () => {
  return (
    <>
    <div className={classes.wrapper}>
        <div className={classes.content}>
            <h2>Bookmark</h2>
        </div>
        <div className={classes.wrapperCard}>
          <div className={classes.card}>
            <img src={img2} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img2} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img2} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>

          <div className={classes.card}>
            <img src={img2} alt="" />

            <div className={classes.cardText}>
              <h5>48 hours in ... London</h5>
              <p>28 April 2020, Oni-on</p>
              <b>Let’s start at the very beginning. The Tower of London (St Katharine's & Wapping; 020 3166 6000) takes you back to the London of William the Conqueror – it was around 1078 when he began work on ...</b>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Bookmark
