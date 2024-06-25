import { inyectionContainer } from '@/features/shared/infra/inyection-container';
import React, { useState } from 'react';

export default function AddPublication({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleOpenConfirm = () => {
    setIsConfirmOpen(true);
  };

  const handleCloseConfirm = async () => {
    setIsConfirmOpen(false);
    // const { apiPostRepository } = inyectionContainer();
    // await apiPostRepository.getAll();
  };

  const handleSubmit = async () => {
    onSubmit({ title, description, imageFile });
    setTitle('');
    setDescription('');
    setImageFile(null);
    handleCloseConfirm();
    onClose();
  };

  const handleCloseModal = () => {
    setTitle('');
    setDescription('');
    setImageFile(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Edit Modal */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseModal}>
        <div
          className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Edit Profile</h2>
            <button onClick={handleCloseModal} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">&times;</button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="imageFile">Profile Picture</label>
            <input
              type="file"
              id="imageFile"
              className="w-full text-black dark:text-white p-2 border border-gray-300 rounded"
              onChange={handleImageChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              className="w-full text-black dark:text-black p-2 border border-gray-300 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              className="w-full text-black dark:text-black p-2 border border-gray-300 rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleOpenConfirm}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Confirm Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={handleCloseConfirm}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Are you sure you want to save changes?</h2>
            <div className="flex justify-between">
              <button
                onClick={handleCloseConfirm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
