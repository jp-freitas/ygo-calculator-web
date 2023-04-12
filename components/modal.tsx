import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button
} from '@chakra-ui/react';

export function Modal() {
  return (
    function BasicUsage() {
      const { isOpen, onOpen, onClose } = useDisclosure()

      return (
        <div>
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <input type="text" placeholder='Player 1 Name' />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant='ghost'>Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      )
    }
  )
}