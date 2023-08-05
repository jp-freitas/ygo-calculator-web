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
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction, useContext } from "react";
import { DuelistContext } from "../contexts/DuelistsContext";

interface DuelModalProps extends UseDisclosureProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function ConfirmationModal({
  isOpen,
  onOpen,
  onClose,
}: DuelModalProps) {
  const { setDuel } = useContext(DuelistContext);
  const router = useRouter()

  function GoBack() {
    setDuel(
      prevState => ({
        ...prevState,
        firstDuelist: "0",
        secondDuelist: "0",
      })
    )
    router.back();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent w={"95%"}>
        <ModalHeader>Você deseja realmente sair?</ModalHeader>
        <ModalCloseButton />
        <ModalFooter w={"100%"}>
          <Button colorScheme='blue' mr={3} onClick={GoBack}>
            Confirmar
          </Button>
          <Button colorScheme='blue' mr={3} onClick={onClose}>
            Cancelar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}