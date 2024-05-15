export default function TimerResetBtn({resetTimer}: { resetTimer: () => void }) {
    return (
        <button className="w-1/2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={resetTimer}>
            Skip
        </button>
    )
}