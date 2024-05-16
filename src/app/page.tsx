"use client";

import Timer from "@/app/timer/timer";
import {Step} from "@/app/step";
import {useState} from "react";

export default function Home() {

    const pomodoroTime = 1500;
    const shortBreakTime = 300;
    const longBreakTime = 900;

    const [stepCount, setStepCount] = useState(1);

    return (
        <main className="flex flex-col items-center p-20 bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-8">Pomodoro Timer</h1>
            <div className="w-3/4 flex flex-col flex-auto items-center justify-center">
                <div className="w-1/2 flex flex-col items-center bg-gray-200 rounded-2xl py-10">
                    <Step
                        activeStep={stepCount % 8 === 0 ? "longBreak" : (stepCount % 2 === 0 ? "shortBreak" : "pomodoro")}/>
                    <Timer key={stepCount}
                           startTime={stepCount % 8 === 0 ? longBreakTime : (stepCount % 2 === 0 ? shortBreakTime : pomodoroTime)}
                           nextStep={() => setStepCount((old => old + 1))}/>
                </div>
            </div>
        </main>
    );
}