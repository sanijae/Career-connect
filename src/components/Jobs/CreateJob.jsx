import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreateJob() {
  const { register, handleSubmit, control, formState: { errors } } = useForm();
  const [description, setDescription] = useState('');

  const onSubmit = data => {
    data.description = description;
    console.log(data);
    // Add your form submission logic here (e.g., send data to Firebase)
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-6">Post a Job</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Title</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('title', { required: 'Job title is required' })}
          />
          {errors.title && <span className="text-red-600">{errors.title.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Company</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('company', { required: 'Company name is required' })}
          />
          {errors.company && <span className="text-red-600">{errors.company.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('location', { required: 'Location is required' })}
          />
          {errors.location && <span className="text-red-600">{errors.location.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Description</label>
          <Controller
            control={control}
            name="description"
            render={({ field }) => (
              <ReactQuill
                {...field}
                value={description}
                onChange={(content, delta, source, editor) => setDescription(editor.getHTML())}
                className="mt-1"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Salary</label>
          <input
            type="text"
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('salary', { required: 'Salary is required' })}
          />
          {errors.salary && <span className="text-red-600">{errors.salary.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Job Type</label>
          <select
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('jobType', { required: 'Job type is required' })}
          >
            <option value="">Select job type</option>
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
          {errors.jobType && <span className="text-red-600">{errors.jobType.message}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Experience Level</label>
          <select
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            {...register('experienceLevel', { required: 'Experience level is required' })}
          >
            <option value="">Select experience level</option>
            <option value="entry">Entry</option>
            <option value="mid">Mid</option>
            <option value="senior">Senior</option>
          </select>
          {errors.experienceLevel && <span className="text-red-600">{errors.experienceLevel.message}</span>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
}

export default CreateJob;
