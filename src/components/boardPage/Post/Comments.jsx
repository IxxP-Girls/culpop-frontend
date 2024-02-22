import { commentsData } from '../../../constants/mockData';
import Comment from './Comment';
import { Pagination } from '@mantine/core';

const Comments = () => {
  return (
    <>
      {commentsData.map(({ commentId, username, content, createdAt, likeCount, likeCheck, children }) => (
        <Comment
          key={commentId}
          commentId={commentId}
          username={username}
          content={content}
          createdAt={createdAt}
          likeCount={likeCount}
          likeCheck={likeCheck}
          children={children}
        />
      ))}
      <Pagination
        total={commentsData.length / 10 + 1}
        color="green"
        display={'flex'}
        style={{ justifyContent: 'center' }}
        py={10}
      />
    </>
  );
};

export default Comments;
