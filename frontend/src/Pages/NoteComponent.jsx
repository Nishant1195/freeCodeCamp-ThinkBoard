import { Link } from 'react-router' // ✅ use react-router-dom
import React from 'react'
import { PenSquareIcon, Trash2Icon } from 'lucide-react'
import api from "../libs/axios"
import toast from "react-hot-toast"

const NoteComponent = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return; // ✅ early return

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id)); // ✅ use _id
      toast.success("Your note deleted successfully");
    } catch (error) {
      toast.error("Failed to delete note");
    }
  };

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
            <button onClick={(e) => handleDelete(e, note._id)}>
              <Trash2Icon className="w-6 h-6 text-gray-500 hover:text-red-500 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NoteComponent;
