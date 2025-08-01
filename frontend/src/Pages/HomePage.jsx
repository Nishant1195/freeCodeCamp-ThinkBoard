import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import NavBar from "../components/NavBar.jsx"
import RateLimiterUI from '../components/RateLimiterUI.jsx'
import NotesNotFound from '../components/NotesNotFound.jsx'
import api from '../libs/axios.js'
import NoteComponent from './NoteComponent.jsx'
const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes");
        console.log(res);
        setNotes(res.data);
        setIsRateLimited(false);
        
      } catch (error) {
        console.log("Error fetching notes", error);
        if(error.response.status === 429){
          setIsRateLimited(true);
        }else{
          toast.error("Failed to Load Notes")
        }
      } finally{
        setLoading(false);
      }
    }
    fetchNotes();
  }, [])
  return (
    <div className='min-h-screen'>
      <NavBar />
      {isRateLimited && <RateLimiterUI/>}
      <div className='max-w-7xl mx-auto p-4 mt-6'>
        {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}
        {notes.length == 0 && !isRateLimited && <NotesNotFound />}
        {notes.length > 0 && !isRateLimited && (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
              notes.map((note)=>{
                return (
                  <NoteComponent key={note._id} note={note} setNotes={setNotes}/>
                )
              })
            }

          </div>
        )}
      </div>
      </div>
  )
}

export default HomePage