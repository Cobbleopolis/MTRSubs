export default class Subscription {

    subNumber;
    subName;
    streamName;
    subDate;

    constructor(subNumber, subName, streamName, subDate) {
        this.subNumber = subNumber;
        this.subName = subName;
        this.streamName = streamName;
        this.subDate = subDate;
    }

    toJSON() {
        return {
            subNumber: this.subNumber,
            subName: this.subName,
            streamName: this.streamName,
            subDate: this.subDate
        }
    }
}
