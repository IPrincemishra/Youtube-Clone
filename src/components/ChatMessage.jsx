import { PF_ICON } from "../utils/constants";


const ChatMessage = ({ name, message }) => {
    return (
        <div className="shadow py-2 px-3 bg-gray-500/20 rounded-2xl">
            <div className="flex items-center gap-2">
                <img src={PF_ICON} alt="UserIcon" className="w-8 rounded-full" />
                <span className="text-[16px] font-bold">{name}</span>
            </div>
            <div className="px-10">{message}</div>
        </div>
    );
};

export default ChatMessage;