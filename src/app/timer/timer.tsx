import React, {useCallback, useEffect, useRef} from "react";
import TimerDisplay from "@/app/timer/timer-display";
import TimerButtons from "@/app/timer/timer-buttons";

interface TimerProps {
    startTime: number;
    nextStep: () => void;
}

export default function Timer({startTime, nextStep}: TimerProps) {

    const [started, setStarted] = React.useState(false);
    const [time, setTime] = React.useState(startTime);
    let intervalId = useRef();

    const startTimer = () => {
        setStarted(true);
        // @ts-ignore
        intervalId.current = setInterval(() => {
            setTime(oldValue => oldValue - 1);
        }, 1000);
    }

    function stopTimer() {
        setStarted(false);
        clearInterval(intervalId.current);
    }

    const resetTimer = useCallback(() => {
        stopTimer();
        nextStep();
    }, [nextStep]);

    useEffect(() => {
        if (time <= 0) {
            let audio = new Audio("/bell.mp3");
            void audio.play();
            resetTimer();
        }
    }, [resetTimer, time]);


    return (
        <div className="w-full flex flex-col items-center">
            <TimerDisplay time={time}/>
            <TimerButtons started={started} startTimer={startTimer} stopTimer={stopTimer} resetTimer={resetTimer}/>
        </div>
    );
}