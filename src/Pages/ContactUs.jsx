import React from 'react'
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Header from '../Utils/Header';
import CardsContainer from '../Components/ContactUs/CardsContainer'
import { ContactUsCardsData } from '../JsUtils/ContactUsCardsData';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px'
    },
}));

const ContactUs = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1200}>
                <Container maxWidth="lg" className={classes.root} >
                    <Header heading='CONTACT US' />
                    <CardsContainer data={ContactUsCardsData} />
                </Container>
            </Slide>
        </Layout>
    );
}
export default React.memo(ContactUs);