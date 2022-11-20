import { useContext, useState } from "react";
import { AvailableAppointmentsType } from "../../types/availableAppointmentsType";
import { format } from "date-fns";
import { AuthContext } from "../../context/AuthContext";
import { SubmitHandler, useForm } from "react-hook-form";
import useBookingsData from "../../hooks/useBookingsData";
import SpinLoader from "../loaders/SpinLoader";
import toast from "react-hot-toast";

interface BookingModalProps {
  option: AvailableAppointmentsType;
  selectedDate: Date;
}

interface BookingsInputTypes {
  patientName: string;
  userEmail: string;
  appointmentDate: string;
  phone: number;
  slot: string;
  treatment: string;
}

const BookingModal = ({ option, selectedDate }: BookingModalProps) => {
  const [showModal, setShowModal] = useState(false);

  const authContext = useContext(AuthContext);

  const { mutate, isLoading } = useBookingsData();

  const { register, handleSubmit, reset } = useForm<BookingsInputTypes>();

  const onSubmitHandler: SubmitHandler<BookingsInputTypes> = (data) => {
    mutate(data);
    reset();
    setShowModal(false);
  };

  return (
    <>
      <button
        className=" rounded bg-gradient-to-r from-primary-100 px-6 py-2 to-primary-50 p-2 text-sm uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-pink-600"
        type="button"
        onClick={() => setShowModal(true)}
        disabled={option.slots.length < 1}
      >
        Book Appointment
      </button>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-auto max-w-3xl">
              {/*content*/}
              <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between rounded-t border-b border-solid border-slate-200 p-5">
                  <div className="text-2xl font-semibold">Appointment</div>
                  <button
                    className="float-right ml-auto border-0 bg-red-500 rounded-full w-10 h-10 text-2xl text-white  outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                {authContext?.user?.uid ? (
                  <form
                    onSubmit={handleSubmit(onSubmitHandler)}
                    className="relative flex-auto p-4 space-y-2"
                  >
                    <input
                      type="text"
                      defaultValue={option.name}
                      className="modal-input"
                      {...register("treatment")}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      defaultValue={format(selectedDate, "PP")}
                      className="modal-input"
                      {...register("appointmentDate")}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="modal-input"
                      defaultValue={authContext.user.email || ""}
                      {...register("userEmail")}
                      name=""
                      id=""
                    />
                    <input
                      type="text"
                      placeholder="Full name"
                      className="modal-input"
                      defaultValue={authContext.user?.displayName || ""}
                      {...register("patientName")}
                      name=""
                      id=""
                    />
                    <select className="modal-input" id="" {...register("slot")}>
                      {option.slots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      placeholder="Phone No"
                      className="modal-input"
                      {...register("phone")}
                      id=""
                    />
                    <button type="submit">
                      {isLoading ? <SpinLoader /> : "Submit"}
                    </button>
                  </form>
                ) : (
                  <div>Login to book appointment</div>
                )}

                {/*footer*/}
                <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-4">
                  <button
                    className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="mr-1 mb-1 rounded bg-blue-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                    type="button"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default BookingModal;
