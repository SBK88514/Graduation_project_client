import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

function WelcomeAdmin() {
  const { user } = useContext(AuthContext);

  const url = `/general/getalllength`;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["get_alllength"],
    queryFn: async () => (await axios.get(url)).data,
    select: (data) => ({
      countIssue: data.countIssue,
      countUsers: data.countUsers,
    }),
  });
  console.log(data);

  return (
    <div className="bg-gradient-to-br from-amber-50 via-purple-50 to-amber-100 p-8 rounded-2xl shadow-lg max-w-3xl mx-auto w-5/6">
      {isLoading && <div>Loading...</div>}
      {isError && <div>{error}</div>}

      <div className="flex justify-center mb-6 space-x-2">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-12 bg-gradient-to-b from-amber-500 to-amber-300 rounded-full transform hover:scale-110 transition-transform duration-300"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Main Welcome Text */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-500  via-amber-600 to-amber-300 text-transparent bg-clip-text mb-4">
          Welcome <span className="text-amber-800">{user.manager_name}</span>
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-300 mx-auto rounded-full mb-4" />
        <p className="text-amber-700 text-lg">
          Your command center for managing everything as{" "}
          <span className="text-amber-950">{user.permission}</span>.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-8 text-center">
        <div className="bg-white/80 py-4 px-2 rounded-xl shadow-sm backdrop-blur-sm">
          <div className="text-amber-600 text-sm font-medium mb-1">
            Active Users
          </div>
          <div className="text-2xl font-bold text-amber-400">
            {data?.countUsers}
          </div>
        </div>
        <div className="bg-white/80 py-4 px-2 rounded-xl shadow-sm backdrop-blur-sm">
          <div className="text-amber-600 text-sm font-medium mb-1">
            Total Issues
          </div>
          <div className="text-2xl font-bold text-amber-400">
            {data?.countIssue}
          </div>
        </div>
        <div className="bg-white/80 py-4 px-2 rounded-xl shadow-sm backdrop-blur-sm">
          <div className="text-amber-600 text-sm font-medium mb-1">
            Buildings
          </div>
          <div className="text-2xl font-bold text-amber-400">12</div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex justify-center space-x-4">
        <button className="px-6 py-3 bg-gradient-to-r from-amber-500  via-amber-600 to-amber-300 text-white rounded-xl hover:from-amber-500 hover:to-amber-300 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
          View Dashboard
        </button>
        <button className="px-6 py-3 bg-white text-amber-400 rounded-xl hover:bg-amber-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
          Manage Users
        </button>
      </div>

      {/* Decorative Bottom Pattern */}
      <div className="flex justify-center mt-8 space-x-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-2 h-8 bg-gradient-to-b from-amber-400 to-amber-300 rounded-full opacity-50"
          />
        ))}
      </div>
    </div>
  );
}

export default WelcomeAdmin;
