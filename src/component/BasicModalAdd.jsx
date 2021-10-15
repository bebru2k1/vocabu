import React from 'react';
import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
} from '@chakra-ui/react';
import { useState } from 'react/cjs/react.development';
import { addVocabulary } from '../config';
import { v4 as uuidv4 } from 'uuid';
function BasicModal({ isOpen, onOpen, onClose, course }) {
  const [formData, setFormData] = useState({
    vocabulary: '',
    vocalize: '',
    audio: '',
    means: '',
    isRemember: false,
  });
  const handleOnChangeInput = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleClickAdd = () => {
    addVocabulary({ course: course, data: { ...formData, id: uuidv4() } });
    onClose();
  };
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Thêm Từ Vựng</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl id="email">
              <FormLabel>Từ Vựng Mới</FormLabel>
              <Input
                type="text"
                name="vocabulary"
                onChange={handleOnChangeInput}
              />

              {/* <FormLabel>Cách Phát Âm</FormLabel>
              <Input
                type="text"
                name="vocalize"
                onChange={handleOnChangeInput}
              /> */}

              {/* <FormLabel>Audio(Link)</FormLabel>
              <Input type="text" name="audio" onChange={handleOnChangeInput} /> */}

              <FormLabel>Nghĩa</FormLabel>
              <Input type="text" name="means" onChange={handleOnChangeInput} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={handleClickAdd}>
              Thêm
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default BasicModal;
