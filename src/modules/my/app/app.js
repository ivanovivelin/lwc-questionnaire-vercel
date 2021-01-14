import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {

    @track customCtor;

    connectedCallback() {
        this.loadSubmitQuestionComp();
    }

    async loadSubmitQuestionComp() {
        const ctor = await import("my/questionPublisher");
        this.customCtor = ctor.default;
    }
}
