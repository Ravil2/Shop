interface AuthWrapperProps {
  children: React.ReactNode
  imgSrc?: string
}

export const AuthWrapper = ({ children, imgSrc }: AuthWrapperProps) => {
  return (
    <div className="min-h-screen flex md:p-10 lg:p-20 p-10 justify-center">
      <div className="lg:w-1/3 w-0 md:w-0 hidden md:flex bg-gray-100 items-center justify-center rounded-4xl">
        {imgSrc && <img src={imgSrc} alt="Security" className="rounded-2xl" />}
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 flex flex-col justify-center p-0 md:p-5 lg:p-10 gap-8">
        {children}
      </div>
    </div>
  )
}
