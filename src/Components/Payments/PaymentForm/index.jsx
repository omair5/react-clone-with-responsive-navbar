import React, { useState } from 'react'
import styles from './index.module.css'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { InputField, CheckBoxField, SelectField } from '../../../Utils/FormikControls'
import Grid from '@material-ui/core/Grid';
import { CountryList } from '../../../JsUtils/CountryList'
import { v4 as uuidv4 } from 'uuid';
import Button from '../../../Utils/Button';
import TermsAndConditionModal from '../TermsAndConditionModal';
import PaymentDetailsModal from '../PaymentDetailsModal';



const PaymentForm = () => {
    const [openUserConsentDialog, setopenUserConsentDialog] = useState(false)
    const [openPaymentDetailsDialog, setopenPaymentDetailsDialog] = useState(false);

    // open User Consent dialog box
    const HandleOpenUserConsent = () => {
        setopenUserConsentDialog(true)
    }
    // close user consent dialog box
    const HandleCloseUserConsentDialog = () => {
        setopenUserConsentDialog(false);
    };

    // close payment details dialog box
    const HandleClosePaymentDetailsDialog = () => {
        setopenPaymentDetailsDialog(false)
    };

    // formik initial values
    const initialValues = {
        name: '',
        email: '',
        country: 'Pakistan',
        currency: 'PKR',
        amount: '',
        acceptedTerms: false,
    }

    // validation schema
    const validationSchema = Yup.object({
        name: Yup.string().max(20, 'Must be 20 characters or less').required('Valid name is Required'),
        email: Yup.string().email('Invalid email address'),
        amount: Yup.number().required('Valid Amount is Required'),
        acceptedTerms: Yup.boolean().required('Required').oneOf([true], 'You must accept the terms and conditions.'),
    })

    // formik handle submit
    const HandleSubmit = (values, formSubmittingProps) => {
        console.log(values, formSubmittingProps)
        setopenPaymentDetailsDialog(true)
    }

    return (
        <div className={styles.mainContainer}>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={HandleSubmit}>
                <Form>
                    <Grid container spacing={3}>
                        {/* name */}
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <InputField
                                label="Name"
                                showAsterik={true}
                                name="name"
                                type="text"
                                placeholder="Enter Name Here"
                                className={styles.inputField}
                            />
                        </Grid>

                        {/* email */}
                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            <InputField
                                label="Email (optional)"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                className={styles.inputField}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* country */}
                            <SelectField label="Country" name="country" className={styles.inputField} >
                                <option value='Pakistan'>Pakistan</option>
                                {
                                    CountryList.map((country) => (
                                        <option value={country} key={uuidv4()}>{country}</option>
                                    ))
                                }
                            </SelectField>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* currency */}
                            <InputField
                                label="Currency"
                                name="currency"
                                type="text"
                                disabled={true}
                                className={`${styles.inputField} ${styles.disabledField}`}
                            />
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={4}>
                            {/* amount */}
                            <InputField
                                label="Amount"
                                showAsterik={true}
                                name="amount"
                                type="number"
                                placeholder='Enter Amount'
                                className={styles.inputField}
                            />
                        </Grid>

                    </Grid>

                    {/* checkbox */}
                    <CheckBoxField name="acceptedTerms">
                        <span className={styles.userConsent}>
                            <b> I agree to the <span onClick={HandleOpenUserConsent}>Terms and Conditions</span></b>
                        </span>
                    </CheckBoxField>

                    <hr className={styles.hr} />

                    <div className={styles.buttonContainer}>
                        <Button
                            innerText='Donate'
                            type='submit'
                        />
                    </div>

                    {/* this modal will open when user clicks on donate button after successful validation */}
                    <PaymentDetailsModal open={openPaymentDetailsDialog} close={HandleClosePaymentDetailsDialog} />

                </Form>
            </Formik>

            {/* this modal will open when user clicks on terms & condition */}
            <TermsAndConditionModal open={openUserConsentDialog} close={HandleCloseUserConsentDialog} />
        </div>
    );
}
export default React.memo(PaymentForm);