import React, { useEffect, useState, useRef } from 'react';
import {
  Flex,
  Button,
  Box,
  Text,
  Divider,
  useDisclosure,
  chakra,
  Checkbox,
  Container,
} from '@chakra-ui/react';
import { FiPlusCircle, FiSettings, FiDelete, FiVolume2 } from 'react-icons/fi';
import BasicModalAdd from './BasicModalAdd';
import { deleteVocabulary, speak, updateVocabulary } from '../config';
import { useParams } from 'react-router';
function DetailVocabulary() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleClickBtnModal = type => {
    onOpen();
  };
  const [dataVocal, setDataVocal] = useState(null);
  const PAGE_LIMIT = 5;
  const CURENT_PAGE = 1;
  const [limit, setLimit] = useState(PAGE_LIMIT);
  const [page, setPage] = useState(CURENT_PAGE);
  const [disablePage, setDisablePage] = useState(false);
  const [maxPage, setMaxPage] = useState();
  const [reRender, setReRender] = useState('');
  const { course } = useParams();
  const pageRef = useRef(page);
  //handle add page
  useEffect(() => {
    if (page < maxPage) {
      setDisablePage(false);
    } else {
      setDisablePage(true);
    }
  }, [page, maxPage]);

  //handle set page
  const handlePage = () => {
    pageRef.current = pageRef.current + 1;

    if (pageRef.current < maxPage) {
      setPage(page => page + 1);
    } else {
      setPage(page => page + 1);
    }
  };

  useEffect(() => {
    const dataVocabulary = JSON.parse(localStorage.getItem('vocabulary'));
    if (dataVocabulary) {
      const [resultVocal] = dataVocabulary.filter(item => item.name === course);
      setDataVocal(resultVocal.data);
      setMaxPage(Math.ceil(resultVocal.data?.length / limit));
    }
  }, [localStorage.getItem('vocabulary')]);

  const handleClickCheckBox = (nameVocabulary, { isRemember }) => {
    updateVocabulary(course, nameVocabulary, { isRemember: !isRemember });
    setReRender(`${Math.random()} ${Math.random()}`);
  };
  const handleClickDelete = vocabulary => {
    deleteVocabulary(course, vocabulary);
    setReRender(`${Math.random()} ${Math.random()}`);
  };
  return (
    <Container textAlign="center" fontSize="xl" maxW="1200px" m="0 auto">
      <BasicModalAdd
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        course={course}
      />
      <Flex justifyContent="space-evenly" mt={10}>
        <Button
          leftIcon={<FiPlusCircle />}
          colorScheme="blue"
          variant="outline"
          onClick={() => handleClickBtnModal('ADD')}
        >
          Thêm Từ Vựng
        </Button>
      </Flex>
      <Box mt={10}>
        <Flex align="center" mt={10}>
          <Box
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            w={1 / 10}
          ></Box>

          <Box
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            w={3 / 10}
          >
            Từ Vựng
          </Box>
          <Box
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            w={2 / 10}
          >
            Audio
          </Box>
          <Box
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            w={3 / 10}
          >
            Nghĩa
          </Box>
          <Box
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="gray.500"
            w={1 / 10}
          ></Box>
        </Flex>
      </Box>

      {dataVocal?.slice(0, page * limit)?.map(item => (
        <Box key={item.id} mt={2}>
          <Flex align="center">
            <Box
              w={1 / 10}
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Checkbox
                isChecked={item.isRemember}
                onChange={() =>
                  handleClickCheckBox(item.vocabulary, {
                    isRemember: item.isRemember,
                  })
                }
              />
            </Box>
            <Button fontSize="sm" w={3 / 10} variant="link">
              {' '}
              {item.vocabulary}
            </Button>
            <Box w={2 / 10}>
              <Button
                fontSize="sm"
                colorScheme="blue"
                variant="link"
                onClick={() => speak(item.vocabulary)}
              >
                Phát
              </Button>
            </Box>
            <Text w={3 / 10} fontSize="sm">
              {item.means}
            </Text>
            <Box
              w={1 / 10}
              d="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Button
                fontSize="sm"
                colorScheme="blue"
                variant="link"
                onClick={() => handleClickDelete(item.vocabulary)}
              >
                Xóa
              </Button>
            </Box>
          </Flex>
          <Divider mt={2} colorScheme="blue" />
        </Box>
      ))}
      <Button
        isDisabled={disablePage}
        colorScheme="blue"
        variant="link"
        mt={5}
        mb={5}
        fontSize="sm"
        onClick={handlePage}
      >
        Xem Thêm
      </Button>
    </Container>
  );
}

export default DetailVocabulary;
