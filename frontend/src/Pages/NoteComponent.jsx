import { Link } from 'react-router'
import React from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'

const NoteComponent = ({ note }) => {
  return (
    <Link to={`/detail/${note._id}`} className="block">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 truncate">
          {note.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
          {note.content}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-500">
            {new Date(note.createdAt).toLocaleDateString()}
          </p>
          <div className="flex space-x-2" onClick={(e) => e.preventDefault()}>
            <button>
              <PenSquareIcon className="w-6 h-6 text-gray-500 hover:text-blue-500 cursor-pointer" />
            </button>
            <button>
              <Trash2Icon className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default NoteComponent