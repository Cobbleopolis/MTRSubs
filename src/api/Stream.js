export default class Stream {

    streamDate;
    streamName;
    inStreamSubs;
    outOfStreamSubs;
    totalSubs;

    constructor(streamDate, streamName, inStreamSubs, outOfStreamSubs, totalSubs) {
        this.streamDate = streamDate;
        this.streamName = streamName;
        this.inStreamSubs = inStreamSubs;
        this.outOfStreamSubs = outOfStreamSubs;
        this.totalSubs = totalSubs;
    }
}
