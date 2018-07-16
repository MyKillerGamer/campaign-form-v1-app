import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const AckermansPage = ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
    <Form>
    <div>
        <p>Date</p>
        {touched.submitdate && errors.submitdate && <p>{errors.submitdate}</p>}
        <Field type="date" name="submitdate" placeholder="Date" />
    </div>
    <div>
        <p>Campaign Number</p>
        {touched.campno && errors.campno && <p>{errors.campno}</p>}
        <Field type="string" name="campno" placeholder="Campaign Number" />
    </div>
    <div>
        <p>Campaign Name</p>
        {touched.campname && errors.campname && <p>{errors.campname}</p>}
        <Field type="string" name="campname" placeholder="Campaign Name" />
    </div>
    <div>
        Contact Person
        <Field type="string" name="contactid" placeholder="Contact Person" />
    </div>
    <div>
        Adobe OP Number
        <Field type="string" name="opno" placeholder="Adobe OP Number" />
    </div>
    <div>
        Campaign Objective
        <Field type="string" name="campob" placeholder="Campaign Objective" />
    </div>
    <div>
        Campaign Sent Date
        <Field type="date" name="campdate" placeholder="Campaign Sent Date" />
    </div>
    <div>
        Campaign Channel
        <Field type="string" name="campchan" placeholder="Campaign Channel" />
    </div>
    <div>
        Campaign Max Target Size
        <Field type="string" name="targetsize" placeholder="Campaign Max Target Size" />
    </div>
    <div>
        Holdout Sample Size
        <Field type="string" name="holdoutsize" placeholder="Holdout Sample Size" />
    </div>
    <div>
        Program Selection
        <Field component="select" name="program" >
            <option value="cfh">CFH Program</option>
            <option value="money">Money Program</option>
            <option value="club">Club Program</option>
        </Field>
    </div>
    <div>
        Nature
        <Field component="select" name="nature" >
            <option value="cfh">Sell CFH</option>
            <option value="awareness">Drive Awareness</option>
        </Field>
    </div>
    <div>
        Marketing Type
        <Field component="select" name="marketingtype" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
    </div>
    <div>
        Consent Type
        <Field component="select" name="consenttype" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
    </div>
    <div>
        Product Consent
        <Field type="string" name="productconsent" placeholder="Product Consent" />
    </div>
    <div>
        Business Division
        <Field component="select" name="bussdiv" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
    </div>    
    <div>
        Data To Be Passed To:
        <Field component="select" name="passto" >
            <option value="thirdparty">Third Party</option>
            <option value="adobe">Adobe</option>
        </Field>
    </div>
    <div>
        Requisite Fields
        <Field type="text" name="requisitefields" placeholder="Required Fields" />
    </div>
    <div>
        Personalisztion
        <Field type="string" name="personalisation" placeholder="Personalisation" />
    </div>
    <div>
        Data Selection
        <Field type="string" name="dataselect" placeholder="Data Selection" />
    </div>
    <div>
        Data Exclusions
        <Field type="string" name="dataexclusions" placeholder="Data Exclusions" />
    </div>
    <div>
        Campaign Exclusions
        <Field type="string" name="campaignexclusions" placeholder="Campaign Exclusions" />
    </div>
    <div>
        Comments
        <Field type="string" name="comments" placeholder="Comments" />
    </div>
    <div>
        Post Campaign Analysis
        <Field type="string" name="postcampainanalysis" placeholder="Post Campaign Analysis" />
    </div>
        <button type="submit" disabled={isSubmitting} >Submit</button>    
    </Form>
);

const FormikAckermansPage = withFormik({
    mapPropsToValues({ submitdate, campno, campname }) {
        return {
            submitdate: submitdate || '',
            campno: campno || '',
            campname: campname || ''
        }
    },
    validationSchema: Yup.object().shape({
        submitdate: Yup.date("Please imput a date").required("Date is required"),
        campno: Yup.string().required("Campaign Number is required"),
        campname: Yup.string().required("Campaign Name is required")
    }),
    handleSubmit(values) {
        console.log(values)
    }
})(AckermansPage)

export default FormikAckermansPage;