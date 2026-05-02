import { XIcon } from "lucide-react";
import { useChatStore } from "../store/useChatStore";
import { useEffect } from "react";
import { useAuthStore } from "../store/useAuthStore";

function ChatHeader() {
  const { selectedUser, setSelectedUser } = useChatStore();
  const {onlineUsers}=useAuthStore();
 const isOnline=onlineUsers.includes(selectedUser._id);

  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape") setSelectedUser(null);
    };

    window.addEventListener("keydown", handleEscKey);

    // cleanup function
    return () => window.removeEventListener("keydown", handleEscKey);
  }, [setSelectedUser]);

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 h-16 px-6 shadow-sm">
      <div className="flex items-center space-x-3">
        <div className={`avatar ${isOnline?'online':'offline'}`}>
          <div className="w-11 rounded-full ring-2 ring-emerald-500/30">
            <img src={selectedUser.profilePic || "/avatar.png"} alt={selectedUser.fullName} />
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-gray-100 font-semibold">{selectedUser.fullName}</h3>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{isOnline?'online':'offline'}</p>
        </div>
      </div>

      <button onClick={() => setSelectedUser(null)}>
        <XIcon className="w-5 h-5 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors cursor-pointer" />
      </button>
    </div>
  );
}
export default ChatHeader;