import { useChatStore } from "../store/useChatStore";

import BorderAnimatedContainer from "../components/BorderAnimatedContainer";
import ProfileHeader from "../components/ProfileHeader";
import ActiveTabSwitch from "../components/ActiveTabSwitch";
import ChatsList from "../components/ChatsList";
import ContactList from "../components/ContactList";
import ChatContainer from "../components/ChatContainer";
import NoConversationPlaceHolder from "../components/NoConversationPlaceHolder";

function ChatPage() {
  const { activeTab, selectedUser } = useChatStore();

  const isChatsTab = activeTab === "chats";

  return (
    <div className="relative w-full max-w-6xl h-screen">
      <BorderAnimatedContainer>
        {/* LEFT SIDE */}
        <div className="w-80 bg-white dark:bg-gray-900 flex flex-col border-r border-gray-200 dark:border-gray-800">
          <ProfileHeader />
          <ActiveTabSwitch />

          <div className="flex-1 overflow-y-auto p-2">
            {isChatsTab ? <ChatsList /> : <ContactList />}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900">
          {selectedUser ? <ChatContainer /> : <NoConversationPlaceHolder />}
        </div>
      </BorderAnimatedContainer>
    </div>
  );
}

export default ChatPage;