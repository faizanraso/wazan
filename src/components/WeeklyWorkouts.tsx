export default function WeeklyWorkouts() {
  return (
    <div className="max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-10 justify-center items-center mx-auto">
      <div className="flex items-center justify-between mb-4 text-center">
        <h1 className="text-xl font-bold leading-none text-gray-900 text-center mx-auto">
          This Week
        </h1>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-3 sm:py-5">
            <div className="flex items-center space-x-3">
              <div className="flex-shrink-0 center">
                <h2 className="font-bold text-black text-2xl">S: </h2>
              </div>
              <div className="flex-1 min-w-0 grid grid-cols-3 gap-3">
                <p className="text-black">CHEST</p>
                <p className="text-black">BACK</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
