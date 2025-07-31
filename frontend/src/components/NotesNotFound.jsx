import React from 'react'
import { Link } from 'react-router'

const NotesNotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 dark:bg-gray-900 rounded-lg shadow-md p-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
        No Notes Found
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 text-center">
        It looks like you haven't created any notes yet.
      </p>
      <Link to="/create" className="px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition-colors duration-300">
        Create Your First Note
      </Link>
    </div>
  )
}

export default NotesNotFound