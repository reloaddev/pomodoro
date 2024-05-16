export default function TimerStartBtn({startTimer}: { startTimer: () => void }) {
    return (
        <button className="w-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={startTimer}>
            Start
        </button>
    )
}