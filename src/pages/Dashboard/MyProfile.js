import useAuth from "./../../hooks/useAuth";
const MyProfile = ({ order }) => {
  const { user } = useAuth();

  return (
    <div className="shadow rounded-xl text-white">
      <h2 className="text-2xl font-bold pt-4 pl-10 mb-2">My Profile</h2>
      <div className="pl-4 pb-10 lg:pl-10">
        <div className="flex flex-col lg:flex-row lg:gap-20 mb-2">
          <div className="flex gap-x-2 items-center lg:flex-col lg:items-start">
            <label className="font-bold text-2xl">Name:</label>
            <p>{user?.displayName}</p>
          </div>
          <div className="flex gap-x-2 items-center lg:flex-col lg:items-start">
            <label className="font-bold text-2xl">Email:</label>
            <p>{user?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
