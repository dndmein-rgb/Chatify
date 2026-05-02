import { useChatStore } from "../store/useChatStore";

function ActiveTabSwitch() {
  const { activeTab, setActiveTab } = useChatStore();

  return (
    <div className="flex gap-2 p-3 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-200 dark:border-gray-800">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
          activeTab === "chats" 
            ? "bg-emerald-600 text-white shadow-md" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Chats
      </button>

      <button
        onClick={() => setActiveTab("contacts")}
        className={`flex-1 py-2 px-4 rounded-lg font-medium text-sm transition-all ${
          activeTab === "contacts" 
            ? "bg-emerald-600 text-white shadow-md" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
        }`}
      >
        Contacts
      </button>
    </div>
  );
}
export default ActiveTabSwitch;