
import React from 'react'

const RateLimiterUI = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]"> {/* Adjusted height to account for NavBar */}
      <div className="p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Too Many Requests!</h2>
        <p className="mb-6">
          You have exceeded the rate limit. Please try again later.
        </p>
      </div>
    </div>
  )
}
export default RateLimiterUI