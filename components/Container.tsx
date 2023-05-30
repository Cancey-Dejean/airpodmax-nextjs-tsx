type ContainerProps = {
  children: React.ReactNode
  classes?: string
}

const Container = ({ children, classes }: ContainerProps) => {
  return (
    <div className={` mx-auto w-full max-w-[1024px] px-[22px] ${classes}`}>
      {children}
    </div>
  )
}

export default Container
