import Image from "next/image";
import { Modal } from "@/components/ui/modal";

export default function Home() {
  return (
    <Modal
      title="Teste Modal"
      description="Modal Description"
      isOpen
      onClose={() => {}}
    >
      Children Here
    </Modal>
  );
}
