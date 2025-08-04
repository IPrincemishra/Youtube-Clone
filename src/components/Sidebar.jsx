import React from 'react';
import { useSelector } from 'react-redux';

function Sidebar() {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)

    return (!isMenuOpen && <aside className="w-52 bg-white shadow px-4 py-5 ">
        <div className="py-2 border-b mb-3">
            <ul className="space-y-2 text-[15px]">
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
        </div>
        <div className="py-2 border-b mb-3">
            <h2 className="font-bold mb-2 text-sm">Subscription</h2>
            <ul className="space-y-2 text-[15px]">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
        <div className="py-2 border-b mb-3">
            <h2 className="font-bold mb-2 text-sm">Watch Later</h2>
            <ul className="space-y-2 text-[15px]">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    </aside>
    );
}

export default Sidebar;
