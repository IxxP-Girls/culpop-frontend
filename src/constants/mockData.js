export const carouselData = [
  {
    image:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best forests to visit in North America',
    date: '23.11.03 - 12.06',
    location: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hawaii beaches review: better than you think',
    date: '23.11.23 - 12.06',
    location: 'beach',
  },
  {
    image:
      'https://images.unsplash.com/photo-1608481337062-4093bf3ed404?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    date: '23.11.23 - 12.13',
    location: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1507272931001-fc06c17e4f43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Aurora in Norway: when to visit for best experience',
    date: '23.11.24 - 12.06',
    location: 'nature',
  },
  {
    image:
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Best places to visit this winter',
    date: '23.12.03 - 12.15',
    location: 'tourism',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Active volcanos reviews: travel at your own risk',
    date: '23.12.03 - 12.14',
    location: 'nature',
  },
];

export const tags = [
  '가치공간',
  '팝업스토어',
  '브랜드',
  '마조네',
  '코이무이',
  '오디에르',
  '트리마치',
  '디어리쉬',
  '무르',
  '제리쉬',
  '더블쿼츠',
  '러브어스유',
  '오앨',
  '더발론',
  '디자이너',
  '성수',
  '블랙프라이데이',
  '세일',
  '쇼핑',
  '의류',
  '옷',
];

export const commentsData = [
  {
    postId: 1,
    commentId: 1,
    username: 'yunseul',
    content: '정말 좋은 글이네요!',
    createdAt: 1851654987,
    likeCount: 7,
    likeCheck: true,
    children: [
      {
        postId: 1,
        commentId: 2,
        parentId: 1,
        username: 'woojeong',
        content: '감사합니다.',
        createdAt: 1851654987,
        likeCount: 0,
        likeCheck: false,
      },
      {
        postId: 1,
        commentId: 4,
        parentId: 1,
        username: 'yunseul',
        content: '네~ 꼭 다음에 가보세요!',
        createdAt: 1851655987,
        likeCount: 0,
        likeCheck: false,
      },
      {
        postId: 1,
        commentId: 5,
        parentId: 1,
        username: 'woojeong',
        content: '넵 ㅎㅎ',
        createdAt: 1851664987,
        likeCount: 0,
        likeCheck: false,
      },
    ],
  },
  {
    postId: 1,
    commentId: 10,
    username: 'test',
    content: '잘 보고 갑니다.',
    createdAt: 6851654987,
    likeCount: 0,
    likeCheck: false,
    children: null,
  },
  {
    postId: 1,
    commentId: 3,
    username: 'juyeon',
    content: '잘 보고 갑니다.',
    createdAt: 1851654987,
    likeCount: 0,
    likeCheck: false,
    children: [
      {
        postId: 1,
        commentId: 6,
        parentId: 1,
        username: 'woojeong',
        content: '네 감사합니다.',
        createdAt: 1851654987,
        likeCount: 0,
        likeCheck: false,
      },
    ],
  },
];

export const postData = [
  { category: '후기', title: '블랙핑크 콘서트 후기', counts: '8', writer: 'test', timestamp: 1698852838700 },
  {
    category: '동행 구해요',
    title: '도라에몽 팝업 같이 가실 분',
    counts: '9',
    writer: 'test2',
    timestamp: 1698852899900,
  },
  {
    category: '자유롭게 소통해요',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test3',
    timestamp: 1698862838701,
  },
  {
    category: '동행 구해요',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test3',
    timestamp: 1698862838702,
  },
  {
    category: '자유롭게 소통해요',
    title: '요즘 볼만한 팝업 뭐가 있을까요?',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838703,
  },
  {
    category: '후기',
    title: '도라에몽 팝업 후기',
    counts: '25',
    writer: 'test2',
    timestamp: 1698862838704,
  },
  {
    category: '자유소통',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test',
    timestamp: 1698862838705,
  },
  {
    category: '거래해요',
    title: '도라에몽 팝업 표 양도합니다.',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838760,
  },
  {
    category: '거래해요',
    title: '촉촉한 초코칩 팝업 25일 티켓 양도합니다',
    counts: '11',
    writer: 'test2',
    timestamp: 1698862838770,
  },
  {
    category: '자유소통',
    title: '다들 요즘 뭐 하시고 사나요?',
    counts: '11',
    writer: 'test',
    timestamp: 1698862838788,
  },
];

export const userProfile = {
  userId: 1,
  username: 'test',
  email: 'test@test.com',
  postList: [
    {
      postId: 1,
      title: '블랙핑크 콘서트 같이 가실 분',
      cateName: '[동행]',
      createdAt: 185468269255,
    },
    {
      postId: 2,
      title: '시눈 팝업 추천 후기',
      cateName: '[후기]',
      createdAt: 185468269255,
    },
    {
      postId: 3,
      title: '스폰지밥 팝업 후기',
      cateName: '[후기]',
      createdAt: 185468269255,
    },
  ],
};

export const userInterests = [
  {
    popupId: 1,
    img: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    address: '서울특별시 종로구',
    startDate: '23.12.03',
    endDate: '23.12.14',
    checkLike: false,
  },
  {
    popupId: 2,
    img: 'https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    title: '티퍼런스 팝업스토어 <잠시, 멈춤 5분>',
    address: '서울특별시 종로구',
    startDate: '23.12.03',
    endDate: '23.12.14',
    checkLike: true,
  },
];
