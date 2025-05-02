import { useState } from "react";
import CommentSection from "./CommentSection";
import { LuCornerDownRight } from "react-icons/lu";
import ReplySection from "./ReplySection";

const CommentDetails = () => {
  const [openReplies, setOpenReplies] = useState({});

  const comments = [
    {
      id: 1,
      initials: "AM",
      name: "Alex Mercer",
      message: "Looking forward to the game! What's the final player count?",
      time: "14 min",
      replies: [
        {
          id: 11,
          initials: "RK",
          name: "Rifat Khan",
          message: "missing few players",
          time: "14 min",
        },
        {
          id: 12,
          initials: "RK",
          name: "Rifat Khan",
          message: "got any friends?",
          time: "14 min",
        },
      ],
    },
    {
      id: 2,
      initials: "AM",
      name: "Alex Mercer",
      message: "Looking forward to the game! What’s the final player count?",
      time: "14 min",
      replies: [],
    },
    {
      id: 3,
      initials: "AM",
      name: "Alex Mercer",
      message: "Looking forward to the game! What’s the final player count?",
      time: "14 min",
      replies: [
        {
          id: 13,
          initials: "RK",
          name: "Rifat Khan",
          message: "got any friends?",
          time: "14 min",
        },
      ],
    },
  ];

  const toggleReplies = (id) => {
    setOpenReplies((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="p-5 space-y-4 bg-[#FFFFFF] rounded-[30px]">
      {comments.map((comment) => (
        <div key={comment.id} className="space-y-2">
          <CommentSection comment={comment} />
          <button
            className="flex items-center space-x-2"
            onClick={() => toggleReplies(comment.id)}
          >
            <LuCornerDownRight className="text-[26px] text-[#808080]" />
            <h1 className="text-lg font-medium text-[#808080]">Reply</h1>
          </button>
          {openReplies[comment.id] && (
            <div className="ml-6 mt-2 space-y-2">
              {comment.replies.length > 0 ? (
                comment.replies.map((reply) => (
                  <div key={reply.id}>
                    <ReplySection reply={reply} />
                  </div>
                ))
              ) : (
                <p className="text-lg text-gray-500 text-center py-5">
                  There is no reply.
                </p>
              )}
            </div>
          )}
        </div>
      ))}

      {/* Comment input */}
      <div className="pt-4">
        <input
          type="text"
          placeholder="Write a comment"
          className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
      </div>
    </div>
  );
};

export default CommentDetails;
