import { FaUserCheck, FaUserTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxioSequre from "../../Hooks/useAxiosSequre";

const SingleRequestCard = ({ data, refetch }) => {
  const { image, name, timeStamp, userEmail, _id } = data;
  const [axiosSequre] = useAxioSequre();

  // accepts connection request function
  const handleRequesetAccept = (email) => {
    axiosSequre.patch(`/conformrequest/${email}`).then((data) => {
      if (data?.data?.modifiedCount) {
        Swal.fire({
          icon: "success",
          title: `Accepted <b>${name}</b> her request!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  // delete connection request function
  const handleRequestDelete = (id) => {
    axiosSequre.delete(`/deleterequest/${id}`).then((data) => {
      console.log(data);
      if (data?.data?.deletedCount > 0) {
        Swal.fire({
          icon: "success",
          title: `Delete <b>${name}</b> her request!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="w-full shadow-2xl rounded-lg relative">
      {/* profile and cover img section  */}
      <div>
        <img
          className="h-20 w-full rounded-tl-lg rounded-tr-lg"
          src="https://i.ibb.co/b79tz7t/Banner-3.png"
          alt="cover photo"
          draggable="false"
        />
        <div className="flex justify-center -mt-12">
          <img
            className="h-[100px] w-[100px] rounded-full"
            src={image}
            draggable="false"
          />
        </div>
      </div>
      {/* profile and cover img section  */}

      {/* user details div */}
      <div className="text-center">
        <h1 className="text-lg font-semibold">{name}</h1>
        <p className="leading-5 line-clamp-2">
          Mern-Stack Web Developer React.js Developer
        </p>
        <p className="text-sm"> {timeStamp}</p>
      </div>
      {/* user details div */}

      {/* bottom button div  */}
      <div className="pb-4 pt-5 flex flex-col justify-center items-center text-center">
        <button
          onClick={() => handleRequestDelete(_id)}
          className="px-16 text-blue-500 font-semibold rounded-full flex items-center border-2 border-blue-500 hover:scale-105 transform transition-transform duration-300"
        >
          <FaUserTimes className="text-xl mr-2" /> Delete
        </button>

        <button
          onClick={() => handleRequesetAccept(userEmail)}
          className="px-16 mt-2 text-blue-500 font-semibold rounded-full flex items-center border-2 border-blue-500 hover:scale-105 transform transition-transform duration-300"
        >
          <FaUserCheck className="text-xl mr-2" /> Accept
        </button>
      </div>
      {/* bottom button div  */}
    </div>
  );
};

export default SingleRequestCard;
