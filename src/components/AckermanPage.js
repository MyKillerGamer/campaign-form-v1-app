import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

// const date = new Date();
const now = moment();
export default class campaignForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            submitDate: props.campaign ? moment(props.campaign.submitDate) : moment(),
            campaignNumber: props.campaign ? props.campaign.campaignNumber : '',
            campaignName: props.campaign ? props.campaign.campaignName : '',
            contactID: props.campaign ? props.campaign.contactID : '',  // Need to find out how to render from logged in account
            OPNumber: props.campaign ? props.campaign.OPNumber : '',    // Non-compulsory
            campaignObjective: props.campaign ? props.campaign.campaignObjective : '',
            campaignSentDate: props.campaign ? moment(props.campaign.campaignSentDate) : moment().add(5, "days"),
            campaignChannel: props.campaign ? props.campaign.campaignChannel : '',
            maxTargetSize: props.campaign ? props.campaign.maxTargetSize : '',  // Non-compulsory
            holdoutSize: props.campaign ? props.campaign.holdoutSize : '10%',
            adobeProgram: props.campaign ? props.campaign.adobeProgram : 'CFHProgram',
            adobeNature: props.campaign ? props.campaign.adobeNature : 'etc',
            adobeMarketingType: props.campaign ? props.campaign.adobeMarketingType : 'etc',
            adobeConsentType: props.campaign ? props.campaign.adobeConsentType : 'Marketing',
            adobeProductConsent: props.campaign ? props.campaign.adobeProductConsent : '',
            adobeBusinessDivision: props.campaign ? props.campaign.adobeBusinessDivision : '',
            passTo: props.campaign ? props.campaign.passTo : 'thirdparty',   // Adobe by default, string when 3rd party is selected
            thirdPartySpec: props.campaign ? props.campaign.thirdPartySpec : '',
            fieldsForDataExtract: props.campaign ? props.campaign.fieldsForDataExtract : '',    // Related to ^, Non-compulsory -> Need to have it so that it is compulsory if third party is selected
            personalisationFields: props.campaign ? props.campaign.personalisationFields : '',
            dataSelectionInstructions: props.campaign ? props.campaign.dataSelectionInstructions : '',
            dataSelectionExclusions: props.campaign ? props.campaign.dataSelectionExclusions : '',
            campaignNumberExclusions: props.campaign ? props.campaign.campaignNumberExclusions : '',
            comments: props.campaign ? props.campaign.comments : '',    // Non-compulsory
            postCampaignAnalysis: props.campaign ? props.campaign.postCampaignAnalysis : '',    // Non-compulsory

            submitFocused: false,
            sentFocused: false,
            error: ''
        };
    }
    
    onChange = (e) => {
        const x = e.target.value;
        this.setState(() => ({ x }));
    };
    
    onCampaignNumberChange = (e) => {
        const campaignNumber = e.target.value;
        this.setState(() => ({ campaignNumber }));
    };
    onCampaignNameChange = (e) => {
        const campaignName = e.target.value;
        this.setState(() => ({ campaignName }));
    };
    onOPNumberChange = (e) => {
        const OPNumber = e.target.value;
        this.setState(() => ({ OPNumber }));
    };
    onCampaignObjectiveChange = (e) => {
        const campaignObjective = e.target.value;
        this.setState(() => ({ campaignObjective }));
    };
    onCampaignChannelChange = (e) => {
        const campaignChannel = e.target.value;
        this.setState(() => ({ campaignChannel }));
    };
    onTargetSizeChange = (e) => {
        const maxTargetSize = e.target.value;
        this.setState(() => ({ maxTargetSize }));
    };
    onHoldoutChange = (e) => {
        const holdoutSize = e.target.value;
        this.setState(() => ({ holdoutSize }));
    };
    onAdobeProgramChange = (e) => {
        const adobeProgram = e.target.value;
        this.setState(() => ({ adobeProgram }));
    };
    onAdobeNatureChange = (e) => {
        const adobeNature = e.target.value;
        this.setState(() => ({ adobeNature }));
    };
    onAdobeMarketingTypeChange = (e) => {
        const adobeMarketingType = e.target.value;
        this.setState(() => ({ adobeMarketingType }));
    };
    onAdobeConsentTypeChange = (e) => {
        const adobeConsentType = e.target.value;
        this.setState(() => ({ adobeConsentType }));
    };
    onProductConsentChange = (e) => {
        const adobeProductConsent = e.target.value;
        this.setState(() => ({ adobeProductConsent }));
    };
    onAdobeBusinessDivisionChange = (e) => {
        const adobeBusinessDivision = e.target.value;
        this.setState(() => ({ adobeBusinessDivision }));
    };
    onPassToChange = (e) => {
        const passTo = e.target.value;
        this.setState(() => ({ passTo }));
    };
    onThirdPartySpecChange = (e) => {
        const thirdPartySpec = e.target.value;
        this.setState(() => ({ thirdPartySpec }));
    };
    onFieldsForDataExtractChange = (e) => {
        const fieldsForDataExtract = e.target.value;
        this.setState(() => ({ fieldsForDataExtract }));
    };
    onPersonalisationFieldsChange = (e) => {
        const personalisationFields = e.target.value;
        this.setState(() => ({ personalisationFields }));
    };
    onDataSelectionInstructionsChange = (e) => {
        const dataSelectionInstructions = e.target.value;
        this.setState(() => ({ dataSelectionInstructions }));
    };
    onDataSelectionExclusionsChange = (e) => {
        const dataSelectionExclusions = e.target.value;
        this.setState(() => ({ dataSelectionExclusions }));
    };
    onCampaignNumberExclusionsChange = (e) => {
        const campaignNumberExclusions = e.target.value;
        this.setState(() => ({ campaignNumberExclusions }));
    };
    onCommentsChange = (e) => {
        const comments = e.target.value;
        this.setState(() => ({ comments }));
    };
    onPostCampaignAnalysisChange = (e) => {
        const postCampaignAnalysis = e.target.value;
        this.setState(() => ({ postCampaignAnalysis }));
    };
    onSubmitDateChange = (submitDate) => {
        if (submitDate) {
        this.setState(() => ({ submitDate }));
        }
    };
    onSentDateChange = (campaignSentDate) => {
        if (campaignSentDate) {
        this.setState(() => ({ campaignSentDate }));
        }
    };
    onSubmitFocusChange = ({ focused }) => {
        this.setState(() => ({ submitFocused: focused }))
    };
    onSentFocusChange = ({ focused }) => {
        this.setState(() => ({ sentFocused: focused }))
    };
    onSubmit = (e) => {
        e.preventDefault();
    
        if (!this.state.campaignNumber || !this.state.campaignName || !this.state.campaignObjective) {
            this.setState(() => ({ error: 'Please provide all fields not labelled optional' }));
        } else {
            this.setState(() => ({ error: '' }));
            // this.props.onSubmit({
            //     description: this.state.description,
            //     amount: parseFloat(this.state.amount, 10) * 100,
            //     createdAt: this.state.createdAt.valueOf(),
            //     note: this.state.note
            // });
            this.props.onSubmit({
                submitDate: this.state.submitDate.valueOf() ,
                campaignNumber: this.state.campaignNumber ,
                campaignName: this.state.campaignName ,
                contactID: this.state.contactID ,  // Need to find out how to render from logged in account
                OPNumber: this.state.OPNumber ,    // Non-compulsory
                campaignObjective: this.state.campaignObjective ,
                campaignSentDate: this.state.campaignSentDate.valueOf() ,
                campaignChannel: this.state.campaignChannel ,
                maxTargetSize: this.state.maxTargetSize ,  // Non-compulsory
                holdoutSize: this.state.holdoutSize ,
                adobeProgram: this.state.adobeProgram ,
                adobeNature: this.state.adobeNature ,
                adobeMarketingType: this.state.adobeMarketingType ,
                adobeConsentType: this.state.adobeConsentType ,
                adobeProductConsent: this.state.adobeProductConsent ,
                adobeBusinessDivision: this.state.adobeBusinessDivision ,
                passTo: this.state.passTo ,   // Adobe by default, string when 3rd party is selected //TODO: add text field for third party name entry
                fieldsForDataExtract: this.state.fieldsForDataExtract ,    // Related to ^, Non-compulsory -> Need to have it so that it is compulsory if third party is selected
                personalisationFields: this.state.personalisationFields ,
                dataSelectionInstructions: this.state.dataSelectionInstructions ,
                dataSelectionExclusions: this.state.dataSelectionExclusions ,
                campaignNumberExclusions: this.state.campaignNumberExclusions ,
                comments: this.state.comments ,    // Non-compulsory
                postCampaignAnalysis: this.state.postCampaignAnalysis , 
            });
        }
    };
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>  
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    
                    <label>
                        <h4>Entry Date</h4>
                        <SingleDatePicker
                            placeholder="Submit Date"
                            date={this.state.submitDate}
                            onDateChange={this.onSubmitDateChange}
                            focused={this.state.submitFocused}
                            onFocusChange={this.onSubmitFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </label>
                    <input 
                        type="text"
                        placeholder="Campaign Number"
                        autoFocus
                        className="text-input"
                        value={this.state.campaignNumber}
                        onChange={this.onCampaignNumberChange}
                    />
                    <input 
                        type="text"
                        placeholder="Campaign Name"
                        className="text-input"
                        value={this.state.campaignName}
                        onChange={this.onCampaignNameChange}
                    />
                    {
                        // Contact Person Rendered From login
                    }
                    <input 
                        type="text"
                        placeholder="OP Number (Optional)"
                        className="text-input"
                        value={this.state.OPNumber}
                        onChange={this.onOPNumberChange}
                    />
                    <textarea
                        placeholder="Campaign Objective"
                        className="textarea"
                        value={this.state.campaignObjective}
                        onChange={this.onCampaignObjectiveChange}
                    >
                    </textarea>
                    <label>
                        <h4>Date of First Contact</h4>
                        <SingleDatePicker 
                            placeholder="Send Date"
                            date={this.state.campaignSentDate}
                            onDateChange={this.onSentDateChange}
                            focused={this.state.sentFocused}
                            onFocusChange={this.onSentFocusChange}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </label>
                    <textarea
                        placeholder="Campaign Channel"
                        className="textarea"
                        value={this.state.campaignChannel}
                        onChange={this.onCampaignChannelChange}
                    />
                    <textarea    
                        placeholder="Max Target Size (Optional, Excludes Holdout)"
                        className="textarea"
                        value={this.state.maxTargetSize}
                        onChange={this.onTargetSizeChange}
                    />
                    <input
                        type="text"
                        placeholder="Holdout Sample Size (Default 10%)"
                        className="text-input"
                        value={this.state.holdoutSize}
                        onChange={this.onHoldoutChange} 
                    />
                    <label>
                        <h4>Adobe Program</h4>
                        <select 
                            className="select"
                            value={this.props.adobeProgram} 
                            onChange={this.onAdobeProgramChange} 
                        >
                        {
                            // Needs to change based on which brand is accessed
                        }
                            <option value="CFHProgram" >CFH Program</option>
                            <option value="DriveAvareness" >Drive Awareness</option>
                            <option value="etc" >Etc</option>
                        </select>
                    </label>
                    <label>
                        <h4>Adobe Nature</h4>
                        <select
                            // options based on brand accessed
                            className="select"
                            value={this.props.adobeNature} 
                            onChange={this.onAdobeNatureChange} 
                        >
                            <option value="etc" >Etc</option>
                        </select>
                    </label>
                    <label>
                        <h4>Adobe Marketing Type</h4>
                        <select
                            // Based on brand accessed 
                            className="select"
                            value={this.props.adobeMarketingType} 
                            onChange={this.onAdobeMarketingTypeChange} 
                        >
                            <option value="etc" >Etc</option>
                        </select>
                    </label>
                    <label>
                        <h4>Adobe Consent Type</h4>
                        <select 
                            className="select"
                            value={this.props.adobeConsentType} 
                            onChange={this.onAdobeConsentTypeChange} 
                        >
                            <option value="Marketing" >Marketing</option>
                            <option value="Operational" >Operational</option>
                        </select>
                    </label>
                    <input
                        type="text"
                        placeholder="Adobe Product Consent"
                        className="text-input"
                        value={this.state.adobeProductConsent}
                        onChange={this.onProductConsentChange} 
                    />
                    <label>
                        <h4>Adobe Business Division</h4>
                        <select 
                            className="select"
                            value={this.props.adobeBusinessDivision} 
                            onChange={this.onAdobeBusinessDivisionChange} 
                        >
                            <option value="etc" >Etc</option>
                        </select>
                    </label>
                    <label>
                        <h4>Data to be Passed to</h4>
                        <select 
                            className="select"
                            value={this.props.passTo} 
                            onChange={this.onPassToChange} 
                        >
                            <option value="adobe" >Adobe</option>
                            <option value="thirdparty" >Third Party (Please Specify)</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Third Party Specification (If applicable)"
                            className="text-input"
                            value={this.state.thirdPartySpec}
                            onChange={this.onThirdPartySpecChange}
                        />
                    </label>
                    <textarea
                        placeholder="Fields For Data Extraction"
                        className="textarea"
                        value={this.state.fieldsForDataExtract}
                        onChange={this.onFieldsForDataExtractChange}
                    />
                    <textarea
                        placeholder="Personalisation"
                        className="textarea"
                        value={this.state.personalisationFields}
                        onChange={this.onPersonalisationFieldsChange}
                    />
                    <textarea 
                        placeholder="Data Selection Instructions"
                        className="textarea"
                        value={this.state.dataSelectionInstructions}
                        onChange={this.onDataSelectionInstructionsChange}
                    />
                    <textarea
                        placeholder="Data Selection Exclusions"
                        className="textarea"
                        value={this.state.dataSelectionExclusions}
                        onChange={this.onDataSelectionExclusionsChange}
                    />
                    <textarea
                        placeholder="Campaign Number Exclusions"
                        className="textarea"
                        value={this.state.campaignNumberExclusions}
                        onChange={this.onCampaignNumberExclusionsChange}
                    />
                    <textarea
                        placeholder="Comments"
                        className="textarea"
                        value={this.state.comments}
                        onChange={this.onCommentsChange}
                    />
                    <textarea
                        placeholder="Post Analysis"
                        className="textarea"
                        value={this.state.postCampaignAnalysis}
                        onChange={this.onPostCampaignAnalysisChange}
                    />

                    <div>
                        <button className="button">Save campaign</button>
                    </div>
            </form>
        )
    }
}

// export default () => {
//     <Form>
//             <div>
//                 <Field type="date" name="submitdate" placeholder="Date" />
//             </div>
//             <div>
//                 <Field type="string" name="campno" placeholder="Campaign Number" />
//             </div>
//             <div>
//                 <Field type="string" name="campname" placeholder="Campaign Name" />
//             </div>
//             <div>
//                 Contact Person
//                 <Field type="string" name="contactid" placeholder="Contact Person" />
//             </div>
//             <div>
//                 Adobe OP Number
//                 <Field type="string" name="opno" placeholder="Adobe OP Number" />
//             </div>
//             <div>
//                 Campaign Objective
//                 <Field type="string" name="campob" placeholder="Campaign Objective" />
//             </div>
//             <div>
//                 Campaign Sent Date
//                 <Field type="date" name="campdate" placeholder="Campaign Sent Date" />
//             </div>
//             <div>
//                 Campaign Channel
//                 <Field type="string" name="campchan" placeholder="Campaign Channel" />
//             </div>
//             <div>
//                 Campaign Max Target Size
//                 <Field type="string" name="targetsize" placeholder="Campaign Max Target Size" />
//             </div>
//             <div>
//                 Holdout Sample Size
//                 <Field type="string" name="holdoutsize" placeholder="Holdout Sample Size" />
//             </div>
//             <div>
//                 Program Selection
//                 <Field component="select" name="program" >
//                     <option value="cfh">CFH Program</option>
//                     <option value="money">Money Program</option>
//                     <option value="club">Club Program</option>
//                 </Field>
//             </div>
//             <div>
//                 Nature
//                 <Field component="select" name="nature" >
//                     <option value="cfh">Sell CFH</option>
//                     <option value="awareness">Drive Awareness</option>
//                 </Field>
//             </div>
//             <div>
//                 Marketing Type
//                 <Field component="select" name="marketingtype" >
//                     <option value="free">Free</option>
//                     <option value="premium">Premium</option>
//                 </Field>
//             </div>
//             <div>
//                 Consent Type
//                 <Field component="select" name="consenttype" >
//                     <option value="free">Free</option>
//                     <option value="premium">Premium</option>
//                 </Field>
//             </div>
//             <div>
//                 Product Consent
//                 <Field type="string" name="productconsent" placeholder="Product Consent" />
//             </div>
//             <div>
//                 Business Division
//                 <Field component="select" name="bussdiv" >
//                     <option value="free">Free</option>
//                     <option value="premium">Premium</option>
//                 </Field>
//             </div>    
//             <div>
//                 Data To Be Passed To:
//                 <Field component="select" name="passto" >
//                     <option value="thirdparty">Third Party</option>
//                     <option value="adobe">Adobe</option>
//                 </Field>
//             </div>
//             <div>
//                 Requisite Fields
//                 <Field type="text" name="requisitefields" placeholder="Required Fields" />
//             </div>
//             <div>
//                 Personalisztion
//                 <Field type="string" name="personalisation" placeholder="Personalisation" />
//             </div>
//             <div>
//                 Data Selection
//                 <Field type="string" name="dataselect" placeholder="Data Selection" />
//             </div>
//             <div>
//                 Data Exclusions
//                 <Field type="string" name="dataexclusions" placeholder="Data Exclusions" />
//             </div>
//             <div>
//                 Campaign Exclusions
//                 <Field type="string" name="campaignexclusions" placeholder="Campaign Exclusions" />
//             </div>
//             <div>
//                 Comments
//                 <Field type="string" name="comments" placeholder="Comments" />
//             </div>
//             <div>
//                 Post Campaign Analysis
//                 <Field type="string" name="postcampainanalysis" placeholder="Post Campaign Analysis" />
//             </div>
//                 <button type="submit" disabled={isSubmitting} onSubmit={this.onSubmit} >Submit</button>
//                 <button disabled={isSubmitting} onSubmit={this.onRemove} >Delete</button>    
//             </Form>
// }