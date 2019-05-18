export default class CardView {
  constructor(item) {
    this.element = document.createElement('li');
    this.element.innerHTML = `<div class='card-container'>
                            <div class='card'>
                            <div class='card-head' style = 'background-image: url(${item.imgUrl});'>
                                <div class='title'>
                                <a href='https://www.youtube.com/watch?v=${item.id}' target='_blank'>
                                    <p>${item.title}</p>
                                </a>
                                </div>
                            </div>
                            <div class='card-info'>
                                <div class='channel-title'>
                                <img src='src/assets/imgs/man.png'><span>${item.channelTitle}</span>
                                </div>
                                <div class='published-at'>
                                <img src='src/assets/imgs/calendar.png'><span>${item.publishedAt}</span>
                                </div>
                                <div class='view-count'>
                                <img src='src/assets/imgs/eye.png'><span>${item.viewCount}</span>
                                </div>
                                <div class='like-count'>
                                <img src='src/assets/imgs/like.png'><span>${item.likeCount}</span>
                                <img src='src/assets/imgs/dislike.png'><span>${item.dislikeCount}</span>
                                </div>
                            </div>
                            <div class='description'>
                                <p>${item.description}</p>
                            </div>
                            </div>
                        </div>`;
  }
}
