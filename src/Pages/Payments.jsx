import React from 'react'
import PaymentHeader from '../Components/Payments/PaymentHeader';
import Container from '@material-ui/core/Container';
import Layout from '../Layout';
import { makeStyles } from '@material-ui/core/styles';
import PaymentForm from '../Components/Payments/PaymentForm';
import Slide from '@material-ui/core/Slide';
import PoweredBy from '../Components/Payments/PoweredBy';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: '40px'
    },
}));

const Payments = () => {
    const classes = useStyles();
    return (
        <Layout>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1200}>
                <Container maxWidth="lg" className={classes.root}>
                    <PaymentHeader />
                    <PaymentForm />
                    <PoweredBy />
                </Container>
            </Slide>
        </Layout>
    );
}
export default React.memo(Payments);