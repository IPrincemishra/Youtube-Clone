const list = ["All", "Gaming", "Songs", "Live", "Cricket", "Soccer", "Cooking", "News", "Sports", "Music", "Dhh", "Raftaar", "Kr$na"]

function ButtonList() {
    return (
        <div className="flex gap-3.5 pb-4 whitespace-nowrap">
            {list.map((btn, idx) => (
                <button
                    key={idx}
                    className="px-4 py-1 h-fit rounded-full bg-gray-100 font-medium hover:bg-gray-200 transition"
                >
                    {btn}
                </button>
            ))}
        </div>
    )
}

export default ButtonList
