import ButtonIcon from "../../ui/ButtonIcon";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";
import { IoIosAddCircle } from "react-icons/io";

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <ButtonIcon size="large">
          {<IoIosAddCircle title="Add new cabin" />}
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddCabin;
