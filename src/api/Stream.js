export default class Stream {

    streamDate;
    streamName;
    numberOfSubs;
    outOfStreamSubs;
    totalSubs;


    constructor(streamDate, streamName, numberOfSubs, outOfStreamSubs, totalSubs) {
        this.streamDate = streamDate;
        this.streamName = streamName;
        this.numberOfSubs = numberOfSubs;
        this.outOfStreamSubs = outOfStreamSubs;
        this.totalSubs = totalSubs;
    }

    toJSON() {
        return {
            streamDate: this.streamDate,
            streamName: this.streamName,
            numberOfSubs: this.numberOfSubs,
            outOfStreamSubs: this.outOfStreamSubs,
            totalSubs: this.totalSubs
        }
    }
}