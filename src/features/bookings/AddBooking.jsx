import ButtonIcon from "../../ui/ButtonIcon";
import Modal from "../../ui/Modal";

import { IoIosAddCircle } from "react-icons/io";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <ButtonIcon size="large">
          {<IoIosAddCircle title="Add new cabin" />}
        </ButtonIcon>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateBookingForm />
      </Modal.Window>
    </Modal>
  );
}

export default AddBooking;
