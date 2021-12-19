import React from 'react'
import AlfalahLogo from '../../../Assets/Images/alfalah.jpg'
import MasterCard from '../../../Assets/Images/mastercard.jpg'
import styles from './index.module.css'

const PoweredBy = () => {
    return (
        <div className={styles.mainContainer}>
            <span>Powered By:</span>
            <img src={AlfalahLogo} alt="Bank Alfalah" title={"Bank Alfalah"} />
            <img src={MasterCard} alt="MasterCard" title={"MasterCard"} />
        </div>
    );
}
export default React.memo(PoweredBy);