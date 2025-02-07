import { Shimmer } from '@zeco-eats-lib/utils-client'

interface NavLinkLoadingProps {
  isNested?: boolean
}

// const NavLinkLoading = ({ isNested = false }: NavLinkLoadingProps) => {
//   return isNested ? (
//     <div className="animate-pulse space-y-2">
//       <div className="flex items-center space-x-2 pl-4">
//         <div className="h-5 w-5 rounded bg-gray-300"></div>
//         <div className="h-4 w-24 rounded bg-gray-300"></div>
//       </div>
//       <div className="space-y-1 pl-8">
//         <div className="h-3 w-20 rounded bg-gray-200"></div>
//         <div className="h-3 w-28 rounded bg-gray-200"></div>
//       </div>
//     </div>
//   ) : (
//     <div className="flex animate-pulse items-center space-x-2 py-2">
//       <div className="h-5 w-5 rounded bg-gray-300"></div>
//       <div className="h-4 w-24 rounded bg-gray-300"></div>
//     </div>
//   )
// }

const NavLinkLoading = ({ isNested = false }: NavLinkLoadingProps) => {
  return isNested ? (
    <div className="space-y-2">
      <div className="flex items-center space-x-2 pl-4">
        <Shimmer className="h-5 w-5 rounded" />
        <Shimmer className="h-4 w-24 rounded" />
      </div>
      <div className="space-y-1 pl-8">
        <Shimmer className="h-3 w-20 rounded" />
        <Shimmer className="h-3 w-28 rounded" />
      </div>
    </div>
  ) : (
    <div className="flex items-center space-x-2 py-2">
      <Shimmer className="h-5 w-5 rounded" />
      <Shimmer className="h-4 w-32 rounded" />
    </div>
  )
}

export default function SideNavLoading() {
  return (
    <div className="h-full w-full space-y-4">
      <NavLinkLoading />
      <NavLinkLoading />
      <NavLinkLoading isNested />
      <NavLinkLoading />
      <NavLinkLoading />
      <NavLinkLoading isNested />
    </div>
  )
}
