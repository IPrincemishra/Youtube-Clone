import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandom, makeRandomMsg } from "../utils/helper";

const LiveChat = () => {

    const [liveMsg, setLiveMsg] = useState("")

    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);


    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(addMessage({
                name: generateRandom(),
                message: makeRandomMsg(20)
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, [dispatch]);



    return (
        <div className="border-x-2 px-4 py-3 w-full border-t-2 border-black/20 h-[510px] rounded-2xl shadow-lg bg-slate-100/60 flex flex-col gap-4">
            <div className="h-10/12 flex flex-col-reverse gap-3 overflow-y-auto"
            >
                {chatMessages.map((m, idx) => (
                    <ChatMessage key={idx} name={m.name} message={m.message} />
                ))}
            </div>
            <form className="flex h-2/12 w-full items-center justify-evenly"
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addMessage({
                        name: "Prince mishra",
                        message: liveMsg
                    }))
                    setLiveMsg("")
                }}
            >
                <input
                    type="text"
                    className="h-6/12 w-10/12 border-b-2 outline-none bg-gray-500/10 px-3 py-2"
                    value={liveMsg}
                    onChange={e => setLiveMsg(e.target.value)}
                />
                <button className="h-6/12 bg-black text-white px-4 rounded-2xl">Send</button>
            </form>
        </div>
    );
};

export default LiveChat;
