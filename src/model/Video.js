const moment = require('moment');

module.exports = class Video {
    constructor(item, position) {
        this.channelId = item.snippet.channelId;
        this.channelTitle = item.snippet.channelTitle;
        this.videoId = item.id;
        this.videoTitle = item.snippet.title;
        this.videoDate = moment(item.snippet.publishedAt).format('YYYY-MM-DD HH:mm:ss');
        this.position = position + 1;
        this.categoryId = item.snippet.categoryId;
        this.thumbnail = item.snippet.thumbnails.high.url;
        this.viewCount = item.statistics.viewCount;
        this.likeCount = item.statistics.likeCount;
        this.dislikeCount = item.statistics.dislikeCount;
        this.commentCount = item.statistics.commentCount;
        this.tags = item.snippet.tags;
    }
}