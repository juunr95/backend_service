import { useUserData } from "@nhost/react"
import {useNavigate} from "react-router-dom";

function User() {
  const user = useUserData();
  const navigate = useNavigate();

  function createdAt() {
    if (user?.createdAt) {
      const date = new Date(user.createdAt)
      return `Joined in ${Intl.DateTimeFormat().format(date)}`;
    }

    return '';
  }

  function handleClick() {
    return navigate('/settings');
  }

  return (
    <div id="user-menu" className="absolute z-10 right-0 pr-8 pt-8">
      <div className="flex items-center space-x-4 relative z-10">
        <div className="font-medium text-dark">
          <div>{user?.metadata.firstName as string}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{createdAt()}</div>
        </div>
        <img onClick={handleClick} className="w-10 h-10 rounded-full hover:scale-110 transition-transform cursor-pointer" src={user?.avatarUrl} alt="" />
      </div>
    </div>
  )
}

export default User;