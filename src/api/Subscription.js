export default class Subscription {

    subNumber;
    subName;
    streamName;
    streamDate;

    constructor(subNumber, subName, streamName, streamDate) {
        this.subNumber = subNumber;
        this.subName = subName;
        this.streamName = streamName;
        this.streamDate = streamDate;
    }

    toJSON() {
        return {
            subNumber: this.subNumber,
            subName: this.subName,
            streamName: this.streamName,
            streamDate: this.streamDate
        }
    }
}