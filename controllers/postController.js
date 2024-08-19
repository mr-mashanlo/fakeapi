class PostController {

  constructor() {
    this.posts = [
      {
        id: 1,
        title: 'Exploring the Universe',
        body: '<p>The cosmos is vast and full of mysteries. <strong>Space exploration</strong> has uncovered many secrets, yet theres much more to discover.</p>',
        created: '2024-08-19T08:45:00Z',
        author: 101
      },
      {
        id: 2,
        title: 'Healthy Eating Tips',
        body: '<p>Maintaining a balanced diet is essential for <em>good health</em>. Include <strong>fruits</strong>, <strong>vegetables</strong>, and <strong>whole grains</strong> in your meals.</p>',
        created: '2024-08-19T09:00:00Z',
        author: 102
      },
      {
        id: 3,
        title: 'The Future of Technology',
        body: '<p>Technology is evolving rapidly, bringing innovations like <em>AI</em>, <strong>VR</strong>, and <strong>quantum computing</strong>. The future holds endless possibilities.</p>',
        created: '2024-08-19T09:15:00Z',
        author: 103
      },
      {
        id: 4,
        title: 'Mastering JavaScript',
        body: '<p><strong>JavaScript</strong> is a versatile language that powers the modern web. From <em>interactive</em> UIs to <strong>server-side</strong> applications, its everywhere.</p>',
        created: '2024-08-19T09:30:00Z',
        author: 104
      },
      {
        id: 5,
        title: 'Traveling the World',
        body: '<p>Travel opens the mind to new cultures and experiences. Visit <strong>historic sites</strong>, explore <em>natural wonders</em>, and immerse yourself in <strong>local traditions</strong>.</p>',
        created: '2024-08-19T09:45:00Z',
        author: 105
      },
      {
        id: 6,
        title: 'The Power of Meditation',
        body: '<p>Meditation helps in achieving <em>inner peace</em> and <strong>mental clarity</strong>. Practice daily to reap the <strong>benefits</strong> for your mind and body.</p>',
        created: '2024-08-19T10:00:00Z',
        author: 106
      },
      {
        id: 7,
        title: 'Introduction to Machine Learning',
        body: '<p><strong>Machine Learning</strong> is transforming industries. Learn the basics, experiment with <em>algorithms</em>, and understand the impact of <strong>AI</strong> on society.</p>',
        created: '2024-08-19T10:15:00Z',
        author: 107
      },
      {
        id: 8,
        title: 'Home Gardening Tips',
        body: '<p>Gardening can be a relaxing hobby. Start with <strong>easy-to-grow plants</strong> like <em>herbs</em> and <strong>vegetables</strong>, and enjoy the fruits of your labor.</p>',
        created: '2024-08-19T10:30:00Z',
        author: 108
      },
      {
        id: 9,
        title: 'Building a Personal Brand',
        body: '<p>Your <em>personal brand</em> is your reputation. Use social media, create valuable content, and network to build a <strong>strong presence</strong> online.</p>',
        created: '2024-08-19T10:45:00Z',
        author: 109
      },
      {
        id: 10,
        title: 'Understanding Blockchain',
        body: '<p><strong>Blockchain</strong> technology is revolutionizing industries from finance to supply chain. Learn how it works and the potential it holds for the future.</p>',
        created: '2024-08-19T11:00:00Z',
        author: 110
      }
    ];
  }

  getAll = ( req, res, next ) => {
    try {
      return res.send( this.posts );
    } catch ( error ) {
      next( error );
    }
  };

  getOne = ( req, res, next ) => {
    try {
      const id = req.params.id;
      const post = this.posts.find( post => post.id === id );
      return res.send( post );
    } catch ( error ) {
      next( error );
    }
  };

  create = ( req, res, next ) => {
    try {
      const { post } = req.body;
      return res.send( [ ...this.posts, post ] );
    } catch ( error ) {
      next( error );
    }
  };

  update = ( req, res, next ) => {
    try {
      const { id, body } = req.body;
      const post = this.posts.find( post => post.id === id );
      return res.send( [ ...this.posts, { ...post, ...body } ] );
    } catch ( error ) {
      next( error );
    }
  };

  delete = ( req, res, next ) => {
    try {
      const id = req.params.id;
      const posts = this.posts.filter( post => post.id !== id );
      return res.send( posts );
    } catch ( error ) {
      next( error );
    }
  };

};

const postController = new PostController();

module.exports = postController;