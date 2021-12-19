import React from 'react'
import Grid from '@material-ui/core/Grid';
import { HomeFeaturesData } from '../../../JsUtils/HomeFeaturesData';
import PrimaryCard from '../../../Utils/PrimaryCard';
import { Link } from 'react-router-dom';
import styles from './index.module.css'

const Features = () => {
    return (
        <Grid container spacing={3} className={styles.container}>
            {
                HomeFeaturesData.map((value) => (
                    <Grid item xs={12} md={6}>
                        <Link to={value.internal_route} className={styles.link}>
                            <PrimaryCard
                                heading={value.heading}
                                description={value.description}
                                Icon={value.Icon}
                                heading_color={value.heading_color}
                                text_color={value.text_color}
                            />
                        </Link>
                    </Grid>
                ))
            }

        </Grid>
    );
}

export default React.memo(Features);