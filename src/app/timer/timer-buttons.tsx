import TimerStartBtn from "@/app/timer/buttons/timer-start-btn";
import TimerStopBtn from "@/app/timer/buttons/timer-stop-btn";
import TimerResetBtn from "@/app/timer/buttons/timer-reset-btn";
import React from "react";

export default function TimerButtons({started, startTimer, stopTimer, resetTimer}: {
    started: boolean,
    startTimer: () => void,
    stopTimer: () => void,
    resetTimer: () => void
}) {

    return (
        <div className="w-1/2 flex justify-center gap-2">
            {!started && <TimerStartBtn startTimer={startTimer}/>}
            {started && <TimerStopBtn stopTimer={stopTimer}/>}
            <TimerResetBtn resetTimer={resetTimer}/>
        </div>
    )
}