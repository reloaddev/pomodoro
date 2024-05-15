import React from 'react';

export type step = "pomodoro" | "shortBreak" | "longBreak";

export function Step({activeStep}: { activeStep: step }) {

    function renderStep() {
        if (activeStep === "pomodoro") return "Pomodoro";
        if (activeStep === "shortBreak") return "Short Break";
        if (activeStep === "longBreak") return "Long Break";
    }

    return (
        <div className="shadow-md rounded w-40 py-2 text-center bg-white text-blue-500">
            {renderStep()}
        </div>
    );
}