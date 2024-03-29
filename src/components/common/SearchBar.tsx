import { Flex, Drawer, Divider, TextInput, ActionIcon, Container, Button } from '@mantine/core';
import { GrPrevious } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { KeyboardEvent, useState } from 'react';
import { ModalProps } from '../../types/types';
import { tags } from '../../constants/tags';

const SearchBar: React.FC<ModalProps> = ({ opened, close }) => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;

    navigate(`/popups/search?word=${value}`);
  };

  return (
    <Drawer.Root
      opened={opened}
      onClose={close}
      position="top"
      styles={{
        root: {
          '--drawer-justify': 'center',
        },
      }}
      shadow="0 2px green"
      size={'xs'}>
      <Drawer.Overlay backgroundOpacity={0} />
      <Drawer.Content w={960} pos="fixed" h={220}>
        <Drawer.Body>
          <Flex align={'center'}>
            <ActionIcon variant="transparent" onClick={close} mr={20}>
              <GrPrevious size={20} />
            </ActionIcon>
            <TextInput
              w={'100%'}
              radius={20}
              size="md"
              placeholder={'지역, 팝업스토어명, 테마 키워드 검색'}
              value={value}
              onChange={e => setValue(e.currentTarget.value)}
              onKeyDown={handleKeyDown}
            />
          </Flex>
          <Divider my={20} />
          <Container pb={20}>
            {tags.map(tag => (
              <Button mr={10} variant="default" color="dark.0" radius="xl" bg={'transparent'} key={tag}>
                {tag}
              </Button>
            ))}
          </Container>
          <Flex justify={'center'} mt={10}>
            <Button
              variant="transparent"
              color="dark.0"
              td="underline"
              fw={200}
              fz={14}
              onClick={() => navigate('/popups/list')}>
              상세 검색
            </Button>
          </Flex>
        </Drawer.Body>
      </Drawer.Content>
    </Drawer.Root>
  );
};

export default SearchBar;
