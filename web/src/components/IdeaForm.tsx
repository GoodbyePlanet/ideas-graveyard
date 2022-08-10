import React from 'react'

export const IdeaForm = ({
  handleSubmit,
  register,
  errors,
  loading,
}): JSX.Element => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <div>
          <input
            type="text"
            placeholder="Title"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            {...register('title', { required: true })}
          ></input>
          {errors.title && <p className="error">Title is required</p>}
        </div>
        <div>
          <textarea
            rows={5}
            cols={80}
            placeholder="Briefly explain your idea"
            className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
            {...register('body', { required: true })}
          ></textarea>
          {errors.body && <p className="error">Body is required</p>}
        </div>
        <button
          type="submit"
          className="mt-6 text-base mr-4 hover:bg-black text-black hover:text-white py-2 px-4 border rounded focus:outline:none"
          disabled={loading}
        >
          Bury it
        </button>
      </div>
    </form>
  )
}
