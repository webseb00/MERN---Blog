const Post = require('./models/post.model');

const loadTestData = async () => {

  const data = [
    {
      id: '21sd42sdsaaf',
      title: 'How do I get funding for my startup?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'John Doe'
    },
    {
      id: '543fg43gzsd4',
      title: '10 Brilliant Small Bussiness Ideas',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'Franky Wood'
    },
    {
      id: '321fg563gzsd4',
      title: 'Asdfasd asdfa sdf',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'Franky Wood allen'
    },
    {
      id: '34sd21sdsghf',
      title: 'whats up?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'John Doe abraham'
    },
    {
      id: '34sd21ghjghjhf',
      title: '654?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'tre erre'
    },
    {
      id: '34jhghsghf',
      title: '12345?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: '654 fsd sdf sdf'
    },
    {
      id: '34sd3456hf',
      title: 'sdfsddf sdf?',
      content: ' Getting funding for your startup can be a bit frustrating. You want <b>a lot of money</b> and <b>you don\'t have a lot to offer. But don\'t worry.</b> There is something you can do! I\'ll teach you everything you need to know. Are you ready?',
      author: 'lincoln'
    },
    {
      id: '321f23423423sd4',
      title: 'Asdfasd asdfa sdf',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'sdf asdfa s'
    },
    {
      id: '321fg234234d4',
      title: 'Asdfasd asdfa sdf',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'jackie chan'
    },
    {
      id: '321243gzsd4',
      title: 'Asdfasd asdfa sdf',
      content: 'Oh... It won\'t be so easy. I won\'t give you a list. <i>But... I\'m going to give you some tips that will surely help you on the road.</i> So, let\'s get started!',
      author: 'lee'
    },
  ];

  try {
    let counter = await Post.countDocuments();
    if(counter === 0) {
      console.log('No posts. Loading data...');
      await Post.create(data);
      console.log('Test data has been successfully loaded');
    }
  } catch (err) {
    console.log('Couldn\'t load test data', err);
  }

};

module.exports = loadTestData;