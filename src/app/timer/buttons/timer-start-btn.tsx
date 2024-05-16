import React from "react";

export default function TimerStartBtn({startTimer}: { startTimer: () => void }) {
    let audio: any;
    if (typeof window !== 'undefined') {
        audio = new Audio("/click.mp3");
    }
    const start = () => void audio.play();

    return (
        <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {startTimer(); start();}}>
            Start
        </button>
    )
}