import React from "react";

export default function TimerDisplay({time}: { time: number }) {
    return (
        <h2 id="time" className="text-8xl font-bold">
            {Math.floor(time / 60).toString().padStart(2, '0')}:{(time % 60).toString().padStart(2, '0')}
        </h2>
    );
}