export default function WeeklyWorkouts() {
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold leading-none text-gray-900">
          This Weeks Workouts
        </h1>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h2 className="font-bold text-black">S</h2>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate ">
                  Neil Sims
                </p>
                <p className="text-sm text-gray-500 truncate ">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                $320
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1>S</h1>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Bonnie Green
                </p>
                <p className="text-sm text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1>M</h1>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Michael Gough
                </p>
                <p className="text-sm text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $67
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1>T</h1>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Lana Byrd
                </p>
                <p className="text-sm text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $367
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <h1>W</h1>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Thomes Lean
                </p>
                <p className="text-sm text-gray-500 truncate">
                  email@windster.com
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
