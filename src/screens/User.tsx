import { useUserData } from "@nhost/react"


function User() {
  const user = useUserData();

  function createdAt() {
    if (user?.createdAt) {
      const date = new Date(user.createdAt)
      return `Joined in ${date.toDateString()}`;
    }

    return '';
  }

  return (
    <div className="absolute z-10 right-0 pr-8 pt-8">
      <div className="flex items-center space-x-4">
        <div className="font-medium dark:text-white">
          <div>{user?.metadata.firstName as string}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{createdAt()}</div>
        </div>
        <img className="w-10 h-10 rounded-full" src={user?.avatarUrl} alt="" />
      </div>
    </div>
  )
}

export default User;