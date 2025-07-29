import express, { json } from "express";
import Notes from "../model/notes.js";

export const getALLNotes = async (req, res) => {
    try {
        const notes = await Notes.find();
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error at getAllNotes");
        res.status(500).json("Internal Server Error")
    }
};

export const createNote = async (req, res) => {
    try {
        const {title, content} = req.body;
        const Note = new Notes({title, content});
    
        const savedNote = await Note.save();
        res.status(201).json(savedNote);
        
    } catch (error) {
        console.log(error);
        
        res.status(500).json({message: "Internal Server Error!"});
        
    }
};

export const updateNote = async (req,res) => {
    try {
        const {title, content} = req.body;
        await Notes.findByIdAndUpdate(req.params.id, {title, content});

        res.status(201).json({message:"Note updated successfully"});
    } catch (error) {
        console.log(error);
        res.send(500).json({error:"Internal server error"})
        
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deleteNote = req.params.id;
        await Notes.findByIdAndDelete(deleteNote);

        res.status(201).json({message:"Note Deleted Successfully"});
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"Internal Server Error"});
        
    }
};