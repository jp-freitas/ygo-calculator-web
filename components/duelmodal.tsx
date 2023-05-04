import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  UseDisclosureProps,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface DuelModalProps extends UseDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function DuelModal({
  isOpen,
  onOpen,
  onClose,
}: DuelModalProps) {
  const router = useRouter()

  function startDuel() {
    onClose();
    router.push('/calculator');
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent w={"95%"}>
          <ModalHeader>Nomes dos Duelistas</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={"4"}>
              <FormLabel>Duelista 1</FormLabel>
              <Input type='text' value="João Pedro" />
            </FormControl>
            <FormControl>
              <FormLabel>Duelista 2</FormLabel>
              <Select variant='outline'>
                <option value="0">Selecione um Duelista</option>
                <option value="1">Renan Martins</option>
                <option value="2">João Paulo</option>
                <option value="3">Paulo César</option>
                <option value="4">Gabriel</option>
                <option value="5">Alex</option>
              </Select>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={startDuel}>
              Duelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}