const Box = ({className='', children, ...rest}) => {
  return (
    <div className={`box-base ${className}`} {...rest}>{children}</div>
  )
}
export default Box