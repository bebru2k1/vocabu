import React from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Text,
  Lorem,
  ModalFooter,
  Code,
} from '@chakra-ui/react';
import { deleteCourse } from '../config';
function ModalDeleteCourse({ isOpen, onOpen, onClose, nameCourse, idCourse }) {
  const handleDelete = () => {
    deleteCourse(idCourse);
    onClose();
  };
  return (
    <>
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Xóa Chủ Đề</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Bạn chắc chắn muốn xóa{' '}
              <Code colorScheme="blue">{nameCourse}</Code>
            </Text>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Hủy
            </Button>
            <Button variant="ghost" onClick={handleDelete}>
              Xóa
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalDeleteCourse;
