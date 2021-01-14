import { LightningElement, api } from 'lwc';

export default class QuestionPublisher extends LightningElement {

    @api subjectLabel;
    @api subjectPlaceholder;
    @api descriptionLabel;
    @api descriptionPlaceholder;
}