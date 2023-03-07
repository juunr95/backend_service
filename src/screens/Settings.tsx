import {useUserData} from "@nhost/react";
import {BiCheck} from "react-icons/all";
import {useNavigate} from "react-router-dom";


export const Settings = () => {
	const userData = useUserData();
	const navigate = useNavigate();

	function handleQuit() {
		return navigate('/');
	}

	return (
		<>
			<div className="w-full h-screen bg-gray-100 py-24">
				<div className="max-w-xl flex flex-col mx-auto relative rounded-xl bg-white shadow-lg">
					<div className="header border-b w-full px-8 py-8">
						<h1 className="text-3xl font-bold text-slate-800">Settings</h1>
					</div>
					<div className="content w-full h-full border-b py-8 flex flex-col space-y-8">
						<div className="w-full h-full px-8">
							<div className="flex items-center space-x-4">
								<img className="w-16 h-16 rounded-full bg-gray-200" src={ userData?.avatarUrl } alt="Profile Image" />
								<div className="flex flex-col">
									<h1 className="text-xl font-bold text-slate-700">{ userData?.displayName }</h1>
									<small>Joined at { new Date(userData?.createdAt as string).toDateString() }</small>
								</div>
							</div>
						</div>
						<div className="w-full h-full px-8">
							<div className="flex items-center space-x-4">
								<div className="flex flex-col w-full">
									<label className="text-gray-400" htmlFor="email">Email</label>
									<h1 className="text-md py-2 px-4 font-semibold w-full rounded-lg bg-gray-100 text-slate-700">
										{ userData?.email }
									</h1>
								</div>
							</div>
						</div>
						<div className="w-full h-full px-8">
							<div className="flex items-center space-x-4">
								<div className="flex w-full">
									<BiCheck className="text-purple-500 text-xl"/>
									<label className="text-gray-400 mx-2" htmlFor="emailVerified">Email Verified</label>
								</div>
							</div>
						</div>
					</div>
					<div className="footer w-full h-full">
						<div className="w-full h-full px-8 py-8">
							<div className="flex items-center space-x-4">
								<div className="flex space-x-4">
									<a onClick={handleQuit} className="text-md py-2 px-4 rounded-lg shadow-sm bg-indigo-600 hover:bg-indigo-700 cursor-pointer transition-transform text-white">Close</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}