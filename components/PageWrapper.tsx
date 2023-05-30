type PageWrapperProps = {
  children: React.ReactNode
  classes?: string
}

export default function PageWrapper({ children, classes }: PageWrapperProps) {
  return <div className={classes}>{children}</div>
}
