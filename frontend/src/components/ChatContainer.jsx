import { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from "../store/useAuthStore";
import ChatHeader from "./ChatHeader";
import NoChatHistoryPlaceholder from "./NoChatHistoryPlaceHolder";
import MessageInput from "./MessageInput";
import MessagesLoadingSkeleton from "./MessagesLoadingSkeleton";

const ChatContainer = () => {
  const {
    selectedUser,
    getMessagesByUserId,
    messages,
    isMessagesLoading,
    subscribeToMessages,
    unsubscribeFromMessages,
  } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);
useEffect(() => {
  if (!selectedUser?._id) return;
  getMessagesByUserId(selectedUser._id);
  subscribeToMessages();

    //clean up
    return () => 
      unsubscribeFromMessages();

  }, [selectedUser, getMessagesByUserId, subscribeToMessages, unsubscribeFromMessages]);
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  if (!selectedUser) return null;
  return (
    <>
      <ChatHeader />
      <div className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {messages.length > 0 && !isMessagesLoading ? (
          <div className="max-w-4xl mx-auto px-4 py-6">
            {messages.map((msg, index) => {
              const isOwnMessage = msg.senderId === authUser._id;
              const showAvatar = index === 0 || messages[index - 1].senderId !== msg.senderId;
              
              return (
                <div
                  key={msg._id || `${msg.senderId}-${msg.createdAt || index}`}
                  className={`flex gap-3 mb-4 ${isOwnMessage ? "flex-row-reverse" : "flex-row"}`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    {showAvatar ? (
                      <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-emerald-500/20 shadow">
                        <img
                          src={
                            isOwnMessage
                              ? authUser.profilePic || "/avatar.png"
                              : selectedUser.profilePic || "/avatar.png"
                          }
                          alt="avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-10 h-10" />
                    )}
                  </div>

                  {/* Message Content */}
                  <div className={`flex flex-col max-w-[65%] ${isOwnMessage ? "items-end" : "items-start"}`}>
                    {showAvatar && (
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400 mb-1 px-2">
                        {isOwnMessage ? "You" : selectedUser.fullName}
                      </span>
                    )}
                    
                    <div
                      className={`rounded-2xl px-4 py-2.5 shadow-sm ${
                        isOwnMessage
                          ? "bg-emerald-600 text-white rounded-tr-sm"
                          : "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-tl-sm border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      {msg.image && (
                        <div className="mb-2">
                          <img
                            src={msg.image}
                            alt="Shared"
                            className="rounded-lg max-w-full h-auto max-h-72 object-cover cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => window.open(msg.image, "_blank")}
                          />
                        </div>
                      )}
                      {msg.text && (
                        <p className="text-sm leading-relaxed whitespace-pre-wrap break-words">
                          {msg.text}
                        </p>
                      )}
                    </div>
                    
                    <span className={`text-[10px] text-gray-500 dark:text-gray-500 mt-1 px-2`}>
                      {new Date(msg.createdAt).toLocaleTimeString(undefined, {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
            <div ref={messageEndRef} />
          </div>
        ) : isMessagesLoading ? (
          <MessagesLoadingSkeleton />
        ) : (
          <NoChatHistoryPlaceholder name={selectedUser.fullName} />
        )}
      </div>
      <MessageInput />
    </>
  );
};

export default ChatContainer;
