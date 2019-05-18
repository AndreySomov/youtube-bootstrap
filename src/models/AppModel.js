import CardModel from './CardModel';
import fetchData from '../utills';

export default class AppModel {
  constructor(key, domain) {
    this.key = key;
    this.domain = domain;
  }

  async getClipIds(inputValue, newToken) {
    const token = newToken ? `pageToken=${newToken}&` : '';
    const url = `${this.domain}search?part=snippet&maxResults=15&${token}q=${inputValue}&fields=items%2Fid%2FvideoId%2CnextPageToken&key=${this.key}`;
    const data = await fetchData(url);
    const { nextPageToken } = data;
    const ids = data.items.map(clip => clip.id.videoId).join();

    return { ids, nextPageToken };
  }

  async getClipInfo(ids) {
    const url = `${this.domain}videos?part=snippet%2C+statistics&id=${ids}=items(id%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2Cthumbnails%2Fmedium%2Ctitle)%2Cstatistics(commentCount%2CdislikeCount%2ClikeCount%2CviewCount))&key=${this.key}`;
    const result = await fetchData(url);

    return result;
  }

  static parseData(clipInfo) {
    return clipInfo.items.map(item => new CardModel(item));
  }
}
