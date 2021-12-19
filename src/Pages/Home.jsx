import React, { useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';
import Header from '../Utils/Header';
import PlayYourPartCard from '../Components/Home/PlayYourPartCard';
import PaymentCards from '../Components/Home/PaymentCards';
import Features from '../Components/Home/Features';
import GoToTop from '../Utils/GoToTop';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px',
    },
    featuresContainer: {
        margin: '40px 0px'
    }
}));

const Home = () => {
    const classes = useStyles();

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>

            <Container maxWidth="lg" className={classes.root} >

                <Grid container spacing={3}>
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1200}>
                        {/* play your part (column 1) */}
                        <Grid item xs={12} md={5}>
                            <PlayYourPartCard />
                        </Grid>
                    </Slide>

                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1200}>
                        {/* payment cards (column 2) */}
                        <Grid item xs={12} md={7}>
                            <PaymentCards />
                        </Grid>
                    </Slide>
                </Grid>

                <div className={classes.featuresContainer}>
                    <Header heading='FEATURES' />
                    <Features />
                </div>
                <GoToTop />
            </Container>
        </Layout >
    );
}
export default React.memo(Home);