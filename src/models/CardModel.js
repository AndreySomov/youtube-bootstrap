export default class CardModel {
  constructor(item) {
    this.title = item.snippet.title;
    this.description = item.snippet.description ? `${item.snippet.description.slice(0, 100)}...` : 'No description :(';
    this.viewCount = item.statistics.viewCount;
    this.dislikeCount = item.statistics.dislikeCount;
    this.likeCount = item.statistics.likeCount;
    this.channelTitle = item.snippet.channelTitle;
    this.publishedAt = `${item.snippet.publishedAt.slice(0, 10)}`;
    this.imgUrl = item.snippet.thumbnails.medium.url;
    this.id = item.id;
  }
}
