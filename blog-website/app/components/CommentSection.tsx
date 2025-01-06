"use client"

import React, { useState } from 'react'

interface Comment {
  id: number
  author: string
  content: string
  createdAt: Date
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim() === '') return

    const comment: Comment = {
      id: Date.now(),
      author: 'Anonymous',
      content: newComment,
      createdAt: new Date()
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  const formatDate = (date: Date) => {
    return date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 ">
      <h2 className="text-md font-bold font-sans mb-4">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          className="w-full p-2 border rounded"
          rows={3}
        />
        <button 
          type="submit"
          className="mt-2 px-4 py-2 font-semibold bg-green-500 text-white rounded hover:bg-blue-600"
        >
          Post Comment
        </button>
      </form>

      <div>
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-100 p-4 rounded mb-2">
            <div className="flex justify-between items-center mb-2">
              <p className="font-bold">{comment.author}</p>
              <p className="text-sm text-gray-500">{formatDate(comment.createdAt)}</p>
            </div>
            <p>{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

