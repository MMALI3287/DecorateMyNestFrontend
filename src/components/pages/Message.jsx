
import { FaMicrophone } from "react-icons/fa6";

const Message = () => {
  
  return (
    <div className="flex h-screen overflow-y-scroll font-sans">
      {/* Sidebar */}
      <div className="w-72 bg-gray-700 p-4">
        <input type="text" name="" id="" placeholder="Search" className="w-full rounded-lg p-2 text-black" />
        <div>
          <div className="mt-5 flex hover:cursor-pointer hover:bg-gray-400 p-2 rounded-xl">
            <div>
              <img className="mask mask-circle w-14 " src="https://daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />
            </div>
            <div>
              <h1 className="ml-3 text-xl">John Doe</h1>
              <p className="ml-3 text-sm text-gray-300">recent message</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main chat area */}
      <div className="w-full bg-gray-300">
        {/* Chat header */}
        <div className="bg-gray-500 p-4">
          Chat with John Doe
        </div>

        {/* Chat messages */}
        <div className="overflow-y-scroll absolute bottom-10 w-2/3">
          <div className="overflow-y-scroll flex-1 mt-auto">
            {/* Individual messages go here */}
            <div className="chat chat-start ">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div className="chat-bubble">You were the Chosen One!</div>
              <div className="chat-footer opacity-50">
                Delivered
              </div>
            </div>

            <div className="chat chat-end">
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>

              <div className="chat-bubble">I hate you!</div>
              <div className="chat-footer opacity-50">
                Seen at 12:46
              </div>
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            className="flex-1 border rounded p-2 text-black ml-2 absolute w-full bottom-0"
          />
          <div className="flex">
            <FaMicrophone className="text-3xl" />
            <button
              className=
              'bg-blue-500 text-white px-2 py-1 mr-6 rounded absolute bottom-1 right-4'
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message