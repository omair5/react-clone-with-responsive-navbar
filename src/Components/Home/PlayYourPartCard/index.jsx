import React from 'react'
import Paper from '@material-ui/core/Paper';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from './index.module.css'
// dummy images for carousel
import CovidBan1 from '../../../Assets/Images/covidban1.jpeg'
import CovidBan2 from '../../../Assets/Images/covidban2.jpg'


const PlayYourPartCard = () => {
    return (
        <Paper elevation={3} className={styles.mainContainer}>
            <h2>PLAY YOUR PART IN</h2>
            <h1>PAKISTAN'S RELIEF
                <br />
                EFFORTS!
            </h1>
            <p>
                Now donate from across the globe to the Prime
                Minister's Covid-19 pandemic
                relief fund-2020 with your
                Debit/Credit card!
            </p>

            {/* CARUSEL */}
            <Carousel
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                interval={2500}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                className={styles.carouselContainer}
                // CUSTOM INDICATORS
                renderIndicator={(onClickHandler, isSelected, index, label) => {
                    const defStyle = {
                        marginLeft: 20,
                        display: 'inline-block',
                        height: '8px',
                        width: '8px',
                        backgroundColor: "silver",
                        borderRadius: '50%',
                        cursor: "pointer"
                    };
                    const style = isSelected
                        ? { ...defStyle, backgroundColor: "gray", transform: 'scale(1.3)' }
                        : { ...defStyle };

                    return (
                        <span
                            style={style}
                            onClick={onClickHandler}
                            onKeyDown={onClickHandler}
                            value={index}
                            key={index}
                            role="button"
                            tabIndex={0}
                            aria-label={`${label} ${index + 1}`}
                        >
                        </span>
                    );
                }}
            >
                {/* dummy images */}
                <div>
                    <img src={CovidBan1} alt='carousel' />
                </div>
                <div>
                    <img src={CovidBan2} alt='carousel' />
                </div>
                <div>
                    <img src={CovidBan1} alt='carousel' />
                </div>
            </Carousel>

        </Paper >
    );
}

export default React.memo(PlayYourPartCard);