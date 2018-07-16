import React from 'react';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';

const PepMoneyPage = ({
    values,
    errors,
    touched,
    isSubmitting
}) => (
    <Form>
        <Field type="date" name="submitdate" placeholder="Date" />
        <Field type="string" name="campno" placeholder="Campaign Number" />
        <Field type="string" name="campname" placeholder="Campaign Name" />
        <Field type="string" name="contactid" placeholder="Contact Person" />
        <Field type="string" name="opno" placeholder="Adobe OP Number" />
        <Field type="string" name="campob" placeholder="Campaign Objective" />
        <Field type="date" name="campdate" placeholder="Campaign Sent Date" />
        <Field type="string" name="campchan" placeholder="Campaign Channel" />
        <Field type="string" name="targetsize" placeholder="Campaign Max Target Size" />
        <Field type="string" name="holdoutsize" placeholder="Holdout Sample Size" />
        <Field component="select" name="program" >
            <option value="cfh">CFH Program</option>
            <option value="money">Money Program</option>
            <option value="club">Club Program</option>
        </Field>
        <Field component="select" name="nature" >
            <option value="cfh">Sell CFH</option>
            <option value="awareness">Drive Awareness</option>
        </Field>
        <Field component="select" name="marketingtype" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <Field component="select" name="consenttype" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <Field type="string" name="productconsent" placeholder="Product Consent" />
        <Field component="select" name="bussdiv" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <div>
            <Field component="select" name="passto" >
                <option value="thirdparty">Third Party</option>
                <option value="adobe">Adobe</option>
            </Field>
        </div>

        <label>
            <Field type="checkbox" name="newsletter" checked={values.newsletter} />
            Join our Newsletter   
        </label>
        <Field component="select" name="plan" >
            <option value="free">Free</option>
            <option value="premium">Premium</option>
        </Field>
        <button disabled={isSubmitting} >Submit</button>    
    </Form>
);

const FormikPepMoneyPage = withFormik({
    mapPropsToValues({  }) {
        return {
            
        }
    },
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(9, 'Password must be 9 characters or longer').required('Password is required')
    }),
    handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
        setTimeout(() => {
            if(values.email === 'mykillergamer@gmail.com') {
                setErrors({ email: 'That email is already taken' })
            } else {
                resetForm()
            }
            setSubmitting(false)
        }, 2000)
        console.log(values)
    }
})(PepMoneyPage)

export default FormikPepMoneyPage;