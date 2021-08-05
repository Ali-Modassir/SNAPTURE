import React, { useState, useEffect, useContext, useRef } from "react";
import style from "../../style/Message.module.css";
import { Avatar, CircularProgress } from "@material-ui/core";
import db from "../../../../firebase/firebase";
import { useHttpClient } from "../../../../customHooks/httpHook";
import { AuthContext } from "../../../../context/authContext";

const Message = () => {
  const { sendRequest, isLoading } = useHttpClient();
  const { userId } = useContext(AuthContext);
  const [chats, setChats] = useState([]);
  const [friends, setAllFriends] = useState([]);
  const messageEl = useRef(null);
  const [inpMsg, setInpMsg] = useState("");
  const [currFriendId, setCurrFriendId] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [conversationId, setConversationId] = useState(null);

  const chatHandler = (friendId) => {
    if (!!friends) {
      const friendIdx = friends.findIndex(
        (friend) => friend.friendId === friendId
      );
      setCurrFriendId(friendId);
      setConversationId(friends[friendIdx].conversationId);
      setChats([]);
    }
  };

  const messageSendHandler = () => {
    const reqData = {
      inpMsg,
      userId,
      currFriendId,
      timestamp: Date.now(),
    };
    setTimeout(async () => {
      try {
        await db.ref(conversationId).push(reqData);
        setInpMsg("");
      } catch (err) {
        console.log(err);
      }
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.code === "Enter") messageSendHandler();
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      db.ref(conversationId).on("value", (snapshot) => {
        const newMessage = snapshot.val();
        if (!newMessage) return;
        const data = Object.keys(newMessage).map((key) => {
          return newMessage[key];
        });
        console.log(data);
        setChats(data);
        setIsLoading(false);
      });
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  }, [conversationId]);

  useEffect(() => {
    sendRequest(`${process.env.REACT_APP_BASE_URL}/auth/allFriends/${userId}`)
      .then((res) => {
        if (res.ok) {
          setAllFriends(res.friends);
          setConversationId(
            res.friends && res.friends[0] && res.friends[0].conversationId
          );
        }
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  return (
    <>
      {friends.length === 0 && (
        <div className={style.heading}>No Friends For Chat</div>
      )}
      <div className={style.container}>
        {isLoading && <CircularProgress style={{ color: "orangered" }} />}
        <div className={style.peopleContainer}>
          {friends.map((friend, index) => {
            if (index === 0)
              if (currFriendId == null) setCurrFriendId(friend.friendId);
            return (
              <div
                className={style.people}
                onClick={() => chatHandler(friend.friendId)}
                key={index}
                style={{
                  backgroundColor: friend.friendId === currFriendId && "black",
                }}
              >
                <Avatar
                  src={friend.friendProfilePic || "/broken-image.jpg"}
                  style={{ background: "transparent", color: "white" }}
                />
                <div className={style.name}>{friend.friendName}</div>
              </div>
            );
          })}
        </div>
        <div className={style.chatContainer}>
          <div className={style.message} ref={messageEl}>
            {chats.length === 0 && (
              <div className={style.heading}>Start Conversation</div>
            )}
            {chats.map((chat, index) => {
              if (chat.userId === userId) {
                return (
                  <div className={style.senderContainer} key={index}>
                    {chat.inpMsg}
                  </div>
                );
              } else {
                return (
                  <div className={style.receiverContainer} key={index}>
                    {chat.inpMsg}
                  </div>
                );
              }
            })}
          </div>
          {conversationId && (
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="Type Message ....."
                className={style.inputMessage}
                onChange={(e) => setInpMsg(e.target.value)}
                value={inpMsg}
                onKeyPress={handleKeyPress}
              />
              <button className={style.messageBtn} onClick={messageSendHandler}>
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Message;
