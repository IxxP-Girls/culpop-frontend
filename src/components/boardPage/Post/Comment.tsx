import { useState } from 'react';
import ParentComment from './ParentComment';
import SubComment from './SubComment';
import { Textarea, Paper, Flex, Text, Button } from '@mantine/core';
import { IoMdUnlock, IoMdLock } from 'react-icons/io';
import { FaUserCircle } from 'react-icons/fa';
import { TbRadiusBottomLeft } from 'react-icons/tb';
import { CommentProps } from '../../../types/types';

const Comment: React.FC<CommentProps> = ({
  commentId,
  username,
  content,
  createdAt,
  likeCount,
  likeCheck,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ParentComment
        commentId={commentId}
        username={username}
        content={content}
        createdAt={createdAt}
        likeCount={likeCount}
        likeCheck={likeCheck}
        handleClick={() => setIsOpen(!isOpen)}
      />
      {/* {isOpen && (
        <>
          {children &&
            children.map(({ commentId, username, content, createdAt, likeCount, likeCheck, parentId }) => (
              <SubComment
                key={commentId}
                commentId={commentId}
                username={username}
                content={content}
                createdAt={createdAt}
                likeCount={likeCount}
                likeCheck={likeCheck}
                parentId={parentId}
              />
            ))}
          <Flex direction={'column'} py={15}>
            <Flex px={30} gap={10}>
              <TbRadiusBottomLeft size={25} />
              <Paper p={10} withBorder radius={0} w={'100%'} ml={20}>
                <Flex align={'center'} gap={5} mb={5}>
                  <FaUserCircle size={20} />
                  <Text>userName</Text>
                </Flex>
                <Textarea placeholder="댓글을 입력하세요." />
                <Flex align={'center'} justify={'flex-end'} m={5} gap={5}>
                  <Text>비밀댓글</Text>
                  <IoMdUnlock size={20} />
                  <Button variant="outline" radius={0}>
                    등록
                  </Button>
                </Flex>
              </Paper>
            </Flex>
          </Flex>
        </>
      )} */}
    </>
  );
};

export default Comment;
