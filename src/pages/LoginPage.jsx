function LoginPage() {
  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <div className="bg-white border rounded-lg p-8">
        <h1 className="text-2xl font-bold text-center mb-8">Welcome to Jumia</h1>
        
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Login</h2>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email or Phone Number
              </label>
              <input 
                type="text" 
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your email or phone number"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input 
                type="password" 
                className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button className="w-full bg-orange-500 text-white py-3 rounded font-medium hover:bg-orange-600">
              LOG IN
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account? 
              <a href="#" className="text-orange-500 hover:underline ml-1">Sign up</a>
            </p>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              <button className="w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 flex items-center justify-center">
                <span className="mr-2">📞</span>
                Continue with Phone
              </button>
              <button className="w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 flex items-center justify-center">
                <span className="mr-2">🌐</span>
                Continue with Google
              </button>
              <button className="w-full border border-gray-300 py-2 px-4 rounded hover:bg-gray-50 flex items-center justify-center">
                <span className="mr-2">📘</span>
                Continue with Facebook
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="text-xs text-gray-600 text-center">
          By continuing, you agree to Jumia's 
          <a href="#" className="text-orange-500 hover:underline"> Terms and Conditions</a> and 
          <a href="#" className="text-orange-500 hover:underline"> Privacy Policy</a>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
