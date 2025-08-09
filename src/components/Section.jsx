function Section({ title, action, children, className = '' }) {
  return (
    <section className={`bg-white rounded-lg p-4 mb-6 ${className}`}>
      {title && (
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          {action && (
            <a 
              href={action.href} 
              className="text-sm text-orange-500 hover:underline font-medium"
            >
              {action.label} →
            </a>
          )}
        </div>
      )}
      {children}
    </section>
  )
}

export default Section
