import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import {  useNavigate, useParams } from 'react-router';
import api from '../libs/axios';
import { LoaderIcon } from 'lucide-react';
import { Link } from 'react-router';
import { ArrowLeftIcon, Trash2Icon } from 'lucide-react';

const PageDetail = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const {id} = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
      const res = await api.get(`/notes/${id}`);
      setNotes(res.data)
    } catch (error) {
      toast.error("Error in Page Detail Page.")
    }finally{
      setLoading(false);
    }
    };
    fetchNote();
  }, [id])

 
  const handleDelete = async(e) => {
    if(!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      navigate("/")
      toast.success("Note deleted successfully");
    } catch (error) {
      toast.error("Error while deleting note.")
    }
  }

  const handleSave = async () => {
    if(!window.confirm("Are you sure you want to update the note?")) return;
    if(!notes.title.trim() || !notes.content.trim()){
      toast.error("Please update both the title and content");
      return;
    }
    setSaving(true);
    try {
      await api.put(`/notes/${id}`, notes);
      navigate("/")
      toast.success("Updated Note Successfully");
    } catch (error) {
      toast.error("Could not update the note!")
    }finally{
      setSaving(false)
    }
  }

  if(loading) {
    return(
      <div className='min-h-screen bg-base-200 flex items-center justify-center'>
        <LoaderIcon className='animate-spin size-10'/>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-base-200'>
      <div className='container mx-auto px-4 py-8'>
        <div className="max-w-2xl mx-auto">
          <div className='flex items-center justify-between mb-6'>
            <Link to="/" className='btn btn-ghost'>
            <ArrowLeftIcon className='h-5 w-5'/>
            Back to Notes
            </Link>
            <button onClick={handleDelete}  className='btn btn-error btn-outline'>
              <Trash2Icon className='h-5 w-5'/>
              Delete Note
            </button>
          </div>
          <div className="card bg-base-100">
            <div className='card-body'>
              <div className="form-control mb-4">

              <label className='label'>
                    <span className='label-text'>Title</span>
                  </label>
                  <input type="text" placeholder='Note Title' className='input input-bordered' value={notes.title} onChange={(e) => setNotes({...notes, title:e.target.value})}/>
              </div>
              <div className="form-control mb-4">

                  <label className='label'>
                    <span className='label-text'>Content</span>
                  </label>
                  <textarea type="text" placeholder='Note Content' className='input input-bordered' value={notes.content} onChange={(e) => setNotes({...notes, content: e.target.value})}/>
              </div>
              <div className='card-actions justify-end'>
                <button className='btn btn-primary' disabled={saving} onClick={handleSave}>
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  )
}

export default PageDetail