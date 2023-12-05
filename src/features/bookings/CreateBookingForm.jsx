import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useForm } from "react-hook-form";
import { useCreateBooking } from "./hooks/useCreateBooking";
import Row from "../../ui/Row";
import Heading from "../../ui/Heading";

function CreateBookingForm({ onCloseModal }) {
  // const { id: editId, ...editValues } = cabinToEdit;
  // const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  const { isCreating, createBooking } = useCreateBooking();

  function onSubmit(data) {
    createBooking(
      { ...data },
      {
        onSuccess: () => {
          reset();
          onCloseModal?.();
        },
      }
    );
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <Row type="vertical">
      <Heading as="h1">Create new cabin</Heading>
      <Form
        onSubmit={handleSubmit(onSubmit, onError)}
        type={onCloseModal ? "modal" : "regular"}
      >
        <FormRow label="Cabin name" error={errors?.name?.message}>
          <Input
            type="text"
            id="name"
            {...register("name", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
          <Input
            type="number"
            id="maxCapacity"
            {...register("maxCapacity", {
              required: "This field is required",
              min: {
                value: 1,
                message: "Capacity should be at least 1",
              },
            })}
          />
        </FormRow>

        <FormRow label="Regular price" error={errors?.regularPrice?.message}>
          <Input
            type="number"
            id="regularPrice"
            {...register("regularPrice", {
              required: "This field is required",
            })}
          />
        </FormRow>

        <FormRow label="Discount" error={errors?.discount?.message}>
          <Input
            type="number"
            id="discount"
            defaultValue={0}
            {...register("discount", {
              required: "This field is required",
              validate: (value) =>
                value <= Number(getValues().regularPrice) ||
                "Discount shouldbe less than the regular price",
            })}
          />
        </FormRow>

        <FormRow
          label="Description for website"
          error={errors?.description?.message}
        >
          <Textarea
            id="description"
            defaultValue=""
            {...register("description", { required: "This field is required" })}
          />
        </FormRow>

        <FormRow>
          {/* type is an HTML attribute! */}
          <Button
            variation="secondary"
            type="reset"
            onClick={() => onCloseModal?.()}
          >
            Cancel
          </Button>
          <Button disabled={isCreating}>Create</Button>
        </FormRow>
      </Form>
    </Row>
  );
}

export default CreateBookingForm;
