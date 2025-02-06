'use client'

export default function DummyMenuNav() {
  return (
    <div className="flex w-full gap-x-4 overflow-x-auto font-medium md:justify-between">
      <div className="flex items-center space-x-8 text-nowrap">
        <div
          className={`cursor-not-allowed border-b-4 border-solid pb-2 text-stone-200`}
        >
          Overview
        </div>
        <div
          className={`cursor-not-allowed border-b-4 border-solid pb-2 text-stone-200`}
        >
          Menu schedule
        </div>
        <div
          className={`cursor-not-allowed border-b-4 border-solid pb-2 text-stone-200`}
        >
          Categories
        </div>
        <div
          className={`cursor-not-allowed border-b-4 border-solid pb-2 text-stone-200`}
        >
          Items
        </div>
        <div
          className={`cursor-not-allowed border-b-4 border-solid pb-2 text-stone-200`}
        >
          Customisations
        </div>
      </div>

      <div>
        <div
          className={`cursor-not-allowed text-nowrap border-b-4 border-solid pb-2 text-stone-200`}
        >
          See changes
        </div>
      </div>
    </div>
  )
}
