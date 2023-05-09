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
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

interface DuelModalProps extends UseDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  duel: Duel;
  setDuel: Dispatch<SetStateAction<Duel>>;
}

export function DuelModal({
  isOpen,
  onOpen,
  onClose,
  duel,
  setDuel,
}: DuelModalProps) {
  const router = useRouter()

  function handleSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    setDuel(
      prevState => ({
        ...prevState,
        [event.target.name]: event.target.value,
      })
    )
  }

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
              <Select variant='outline' name='firstDuelist' value={duel.firstDuelist} onChange={handleSelectChange}>
                <option value="0">Selecione um Duelista</option>
                <option value="João Pedro">João Pedro</option>
                <option value="Renan Martins">Renan Martins</option>
                <option value="João Paulo">João Paulo</option>
                <option value="Paulo César">Paulo César</option>
                <option value="Gabriel">Gabriel</option>
                <option value="Alex">Alex</option>
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Duelista 2</FormLabel>
              <Select variant='outline' name='secondDuelist' value={duel.secondDuelist} onChange={handleSelectChange}>
                <option value="0">Selecione um Duelista</option>
                <option value="João Pedro">João Pedro</option>
                <option value="Renan Martins">Renan Martins</option>
                <option value="João Paulo">João Paulo</option>
                <option value="Paulo César">Paulo César</option>
                <option value="Gabriel">Gabriel</option>
                <option value="Alex">Alex</option>
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