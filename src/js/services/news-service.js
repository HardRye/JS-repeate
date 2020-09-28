const baseUrl = 'http://newsapi.org/v2/everything';

export default {
  page: 1,
  query: '',

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },

  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },

  fetchArticles() {
    const options = {
      headers: {
        Authorization: '5cdfbcee73d448d2878b7ff733413e1c',
      },
    };

    const requestParams = `?q=${this.query}&page=${this.page}`;

    return fetch(baseUrl + requestParams, options)
      .then(res => res.json())
      .then(data => {
        this.incrementPage();
        return data.articles;
      })
      .catch(console.log);
  },
};
