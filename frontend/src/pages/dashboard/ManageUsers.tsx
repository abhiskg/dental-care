import PingLoader from "../../components/loaders/PingLoader";
import useUsersData from "../../hooks/useUsersData";
import ConfirmationModal from "../../modal/ConfirmationModat";

const ManageUsers = () => {
  const { isLoading, data } = useUsersData();

  if (isLoading) {
    <PingLoader />;
  }

  return (
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
            <th className="p-3">User Name</th>
            <th className="p-3">Email</th>
            <th className="p-3 text-right">Edit</th>
            <th className="p-3 text-right">Delete</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((user) => (
              <tr
                key={user._id}
                className="border-b border-gray-300 border-opacity-20 bg-gray-50"
              >
                <td className="p-3">
                  <p>{user.name}</p>
                </td>
                <td className="p-3">
                  <p>{user.email}</p>
                </td>
                <td className="p-3 text-center">
                  <p>Make Admin</p>
                </td>
                <td className="p-3 text-right">
                  <ConfirmationModal id={user._id} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
