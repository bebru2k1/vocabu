import React, { useRef, useState, useEffect, useCallback } from 'react';
import {
  Box,
  Image,
  chakra,
  Container,
  Heading,
  useColorMode,
  Button,
  Flex,
  useDisclosure,
  Code,
  Text,
  Divider,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  TableCaption,
  Input,
} from '@chakra-ui/react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Link, Route, Switch } from 'react-router-dom';
import BasicModal from './component/BasicModalAdd';

import Header from './component/Header';
import { addCourse, speak } from './config';
import Banner from './component/Banner';
import DetailVocabulary from './component/DetailVocabulary';
import ModalDeleteCourse from './component/ModalDeleteCourse';

function App() {
  const [dataVocal, setDataVocal] = useState(null);
  const [isAddCourse, setIsAddCourse] = useState(false);
  const [inputCourse, setInputCourse] = useState('');
  const [errorInput, setErrorInput] = useState(null);
  const [nameCourse, setNameCourse] = useState(null);

  const {
    isOpen: isOpenModalDeleteCourse,
    onOpen: onOpenModalDeleteCourse,
    onClose: onCloseModalDeleteCourse,
  } = useDisclosure();

  useEffect(() => {
    const dataVocabulary = JSON.parse(localStorage.getItem('vocabulary'));
    if (dataVocabulary) {
      setDataVocal(dataVocabulary);
    }
  }, [localStorage.getItem('vocabulary')]);

  const handleAddCourse = () => {
    if (inputCourse !== '') {
      if (inputCourse.length > 20) {
        return setErrorInput(`Vui lòng nhập ít hơn 20 kí tự`);
      }
      if (inputCourse.length < 2) {
        return setErrorInput(`Vui lòng nhập lớn hơn 2 kí tự`);
      }
      const validateInput = inputCourse.match(/[!@#$%^&*/]/g, '');
      if (validateInput) {
        setErrorInput(`Có những kí tự đặc biệt ${validateInput.toString()}`);
      } else {
        addCourse(inputCourse.replace(/\s/g, '').toLowerCase());
        setInputCourse('');
      }
    }
  };
  const handleCountRemember = useCallback(
    item => {
      return item.data.filter(x => x.isRemember === true).length;
    },
    [dataVocal]
  );

  const handleDeleteCourse = name => {
    setNameCourse(name);
    onOpenModalDeleteCourse();
  };
  return (
    <Box textAlign="center" fontSize="xl" maxW="1200px" m="0 auto">
      <ModalDeleteCourse
        isOpen={isOpenModalDeleteCourse}
        onOpen={onOpenModalDeleteCourse}
        onClose={onCloseModalDeleteCourse}
        nameCourse={nameCourse}
      />
      <Container>
        <Heading>Vocabulary</Heading>
        <Banner />
        <Text mt={10} fontSize="md">
          {/* Bạn đang có <Code colorScheme="blue">{dataVocal?.length} </Code> từ vựng*/}
        </Text>
        <Text as={'h4'} colorScheme="blue">
          Chủ đề của bạn
        </Text>
        <Table variant="simple" mt={10} size="sm">
          <TableCaption>Click vào chủ đề để xem chi tiết</TableCaption>
          <Thead>
            <Tr>
              <Th>Chủ đề</Th>
              <Th>Số Từ </Th>
              <Th>Hoàn thành</Th>
              <Th></Th>
            </Tr>
          </Thead>
          {dataVocal?.map(item => (
            <Tbody key={`item.name${Math.random()}`}>
              <Tr>
                <Td>
                  <Button
                    as={Link}
                    to={`/vocabulary/${item.name}`}
                    variant="link"
                    colorScheme="blue"
                  >
                    {item.name}
                  </Button>
                </Td>
                <Td>{item.data.length}</Td>
                <Td>{`${handleCountRemember(item)}/${item.data.length}`}</Td>
                <Td>
                  <Button
                    fontSize="sm"
                    variant="link"
                    colorScheme="blue"
                    onClick={() => handleDeleteCourse(item.name)}
                  >
                    Xóa
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          ))}
        </Table>
        <Button
          colorScheme="blue"
          variant="link"
          onClick={() => setIsAddCourse(!isAddCourse)}
          mb={10}
        >
          Thêm chủ đề
        </Button>
        {isAddCourse && (
          <>
            <Flex align="center" mt={5} mb={5}>
              <Input
                min={3}
                max={20}
                placeholder="Nhập tên chủ đề"
                mr={3}
                value={inputCourse}
                onChange={e => {
                  setErrorInput('');
                  setInputCourse(e.target.value);
                }}
              ></Input>

              <Button onClick={handleAddCourse}>Thêm</Button>
            </Flex>
            {errorInput && (
              <Code mt={5} mb={5} colorScheme="red" fontSize="sm">
                {errorInput}
              </Code>
            )}{' '}
          </>
        )}
      </Container>
    </Box>
  );
}

export default App;
