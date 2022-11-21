import { useContext } from "react";
import PingLoader from "../../components/loaders/PingLoader";
import { AuthContext } from "../../context/AuthContext";
import { useBookingsData } from "../../hooks/useBookingsData";

const MyAppointments = () => {
  const authContext = useContext(AuthContext);

  const { isLoading, data } = useBookingsData(
    authContext?.user?.email as string
  );

  if (isLoading) {
    <PingLoader />;
  }
  return (
    <div className="custom-width mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs">
          <colgroup>
            <col className="w-60" />
            <col />
            <col className="w-24" />
            <col className="w-24" />
          </colgroup>
          <thead className=" bg-gray-300">
            <tr className="text-left">
              <th className="p-3">Patient Name</th>
              <th className="p-3">Treatment</th>
              <th className="p-3 text-right">Date</th>
              <th className="p-3 text-right">Time</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((booking) => (
                <tr
                  key={booking._id}
                  className="border-b border-gray-300 border-opacity-20 bg-gray-50"
                >
                  <td className="p-3">
                    <p>{booking.patientName}</p>
                  </td>
                  <td className="p-3">
                    <p>{booking.treatment}</p>
                  </td>
                  <td className="p-3 text-center">
                    <p>{booking.appointmentDate}</p>
                  </td>
                  <td className="p-3 text-right">
                    <p>{booking.slot}</p>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointments;
