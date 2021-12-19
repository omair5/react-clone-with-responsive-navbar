import React from 'react'
import styles from './Footer.module.css'
import Container from '@material-ui/core/Container';
import Paysys from '../../Assets/Images/paysys-logo.png'


const Footer = ({ positionBottom }) => {
    return (
        <div className={styles.mainContainer} style={{ position: positionBottom && 'absolute', bottom: 0 }}>
            <Container maxWidth="md" className={styles.wrapper}>
                <div>

                    <strong>Copyright</strong> © <strong>2021</strong> <strong className={styles.nbp}>NBP</strong>. All Rights Reserved.
                </div>

                <div className={styles.designAnddevelopedBy}>
                    Designed & Developed By:
                    <img src={Paysys} alt="paysys" height='15px' className={styles.paysys} />
                </div>
            </Container>
        </div>
    );
}
export default React.memo(Footer);