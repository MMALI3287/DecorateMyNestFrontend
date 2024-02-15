// import React from 'react';
import { useEffect, useRef } from "react";
import { FaMicrophone } from "react-icons/fa6";

const ProjectProgress = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    // Access the current property of the ref to get the DOM element
    const scrollContainer = scrollContainerRef.current;

    // Scroll to the bottom of the container
    scrollContainer.scrollTop = scrollContainer.scrollHeight;
  }, []); // The empty dependency array ensures this effect runs only once after initial render
  return (
    <div className="font-sans">
      <div className="flex h-[800px] ">
        {/* Sidebar */}
        <div className="w-72  bg-gray-700 p-4">
          <div className="flex justify-between">
            <h1>Live Chat</h1>
            <div className="flex">
              <div className="avatar online">
                <div className="w-8 rounded-full">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <h1 className="ml-3">John doe</h1>
            </div>
          </div>

          <div>
            <div className="mt-5 flex hover:cursor-pointer hover:bg-gray-400 p-2 rounded-xl">
              <div>
                <img
                  className="mask mask-circle w-14 "
                  src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg"
                />
              </div>
              <div>
                <h1 className="ml-3 text-xl">John Doe</h1>
                <p className="ml-3 text-sm text-gray-300">recent message</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main chat area */}
        <div
          ref={scrollContainerRef}
          className="w-full h-[800px] bg-gray-300 overflow-y-scroll"
        >
          {/* Chat header */}
          <div className="bg-gray-500 p-4">Chat with John Doe</div>

          {/* Chat messages */}
          <div className="overflow-y-scroll mt-[500px]">
            {/* Individual messages go here */}

            <div className="chat chat-start mt-auto">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>

              <div className="chat-bubble">You were the Chosen One!</div>

              <div className="chat-footer opacity-50">Delivered</div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS chat bubble component"
                    src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  />
                </div>
              </div>

              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">Seen at 12:46</div>
            </div>
            <div className="flex items-center w-full">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 border rounded p-2 text-black ml-2 mb-4"
              />
              <div className="flex">
                <FaMicrophone className="text-3xl" />
                <button className="bg-blue-500 text-white px-2 py-1 mr-6 rounded">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Message input */}
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
