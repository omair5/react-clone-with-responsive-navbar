import React from 'react'
import PrimaryCard from '../../../Utils/PrimaryCard'
import { HomePaymentCardsData } from '../../../JsUtils/HomePaymentCardsData';
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styles from './index.module.css'

const PaymentCards = () => {
    return (
        <>
            {
                HomePaymentCardsData.map((value) => (

                    <div key={uuidv4()} className={styles.mainContainer}>
                        <Link to={value.internal_route} className={styles.link}>
                            <PrimaryCard
                                heading={value.heading}
                                description={value.description}
                                Icon={value.Icon}
                                bg_color={value.bg_color}
                                text_color={value.text_color}
                                Icon_Color={value.Icon_Color}
                                heading_color={value.heading_color}
                            />
                        </Link>
                    </div>
                ))
            }

        </>
    );
}

export default React.memo(PaymentCards);