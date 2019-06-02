export class News {
  Id: number;
  Title: string;
  ImageUrl: string;
  Content: string;
  Summary: string;

  constructor(news: News) {
    if (news) {
      this.Id = news.Id;
      this.Title = news.Title;
      this.Content = news.Content;
      this.ImageUrl = news.ImageUrl;
      this.Summary = news.Summary;
    } else {
      this.Id = 0;
      this.Title = '';
      this.Content = '';
      this.ImageUrl = '';
      this.Summary = '';
    }
  }
}
