import React from 'react'
import Header from '../../../Utils/Header';
import styles from './index.module.css'

const PaymentHeader = () => {
    return (
        <div>
            <Header heading={`DONATE TO THE PRIME MINISTER'S COVID-19 PANDEMIC RELIEF FUND-2020`} />
            <h2 className={styles.subTitle}>
                Enter Your Details
            </h2>
        </div>
    );
}
export default React.memo(PaymentHeader);