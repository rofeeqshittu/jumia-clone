function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function CardContent({ children, className = '', ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <div className={`p-4 pb-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <div className={`p-4 pt-2 ${className}`} {...props}>
      {children}
    </div>
  )
}

export { Card, CardContent, CardHeader, CardFooter }
