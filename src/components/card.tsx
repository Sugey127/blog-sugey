"use client"; // Esta línea asegura que el componente se renderiza en el cliente

import React, { useState, useEffect } from 'react';
import Image from "next/image";

export default function Card({ cards, showAdminButtons }) {
  const [openMenuIndex, setOpenMenuIndex] = useState(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isEditConfirmOpen, setIsEditConfirmOpen] = useState(false);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [editIndex, setEditIndex] = useState(null);
  const [commentIndex, setCommentIndex] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [commentText, setCommentText] = useState('');

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.menu-button') && !event.target.closest('.menu')) {
        setOpenMenuIndex(null);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleMenuToggle = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const openConfirm = (index) => {
    setDeleteIndex(index);
    setIsConfirmOpen(true);
  };

  const closeConfirm = () => {
    setIsConfirmOpen(false);
    setDeleteIndex(null);
  };

  const handleDelete = () => {
    console.log(`Deleting card at index: ${deleteIndex}`);
    // Aquí, agregar la lógica para eliminar la publicación
    closeConfirm();
  };

  const openEditModal = (index) => {
    setEditIndex(index);
    setEditTitle(cards[index].title);
    setEditDescription(cards[index].description);
    setIsEditOpen(true);
  };

  const closeEditModal = () => {
    setIsEditOpen(false);
    setEditIndex(null);
    setEditTitle('');
    setEditDescription('');
  };

  const handleEditSubmit = () => {
    setIsEditOpen(false);
    setIsEditConfirmOpen(true);
  };

  const handleEditConfirm = () => {
    console.log(`Editing card at index: ${editIndex}`);
    console.log(`New title: ${editTitle}, New description: ${editDescription}`);
    // Aquí, agregar la lógica para guardar los cambios
    setIsEditConfirmOpen(false);
  };

  const closeEditConfirm = () => {
    setIsEditConfirmOpen(false);
  };

  const openCommentModal = (index) => {
    setCommentIndex(index);
    setCommentText('');
    setIsCommentOpen(true);
  };

  const closeCommentModal = () => {
    setIsCommentOpen(false);
    setCommentIndex(null);
    setCommentText('');
  };

  const handleCommentSubmit = () => {
    console.log(`Adding comment to card at index: ${commentIndex}`);
    console.log(`Comment: ${commentText}`);
    // Aquí, agregar la lógica para agregar el comentario
    closeCommentModal();
  };

  return (
    <>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-5">
        {cards.map((card, index) => (
          <div key={index} className="w-full lg:max-w-full lg:flex relative">
            <div
              className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
              style={{ backgroundImage: `url(${card.image})` }}
              title={card.title}
            ></div>
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Image width={40} height={40} className="w-10 h-10 rounded-full mr-4" src={card.avatar} alt={`Avatar of ${card.author}`} />
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">{card.author}</p>
                      <p className="text-gray-600">{card.date}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleMenuToggle(index)}
                    className="menu-button text-gray-600 hover:text-gray-900 focus:outline-none"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6h.01M12 12h.01M12 18h.01M12 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <div className="text-gray-900 font-bold text-xl mb-2 mt-2">{card.title}</div>
                <p className="text-gray-700 text-base mb-5">{card.description}</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="fill-current text-gray-500 w-4 h-4 mr-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
                    <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9 9 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.4 10.4 0 0 1-.524 2.318l-.003.011a11 11 0 0 1-.244.637c-.079.186.074.394.273.362a22 22 0 0 0 .693-.125m.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6-3.004 6-7 6a8 8 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a11 11 0 0 0 .398-2"/>
                  </svg>
                  <p className="text-sm text-gray-600">{card.commentsCount} Comments</p>
                </div>
              </div>
            </div>
            {openMenuIndex === index && (
              <div className="menu absolute top-0 right-0 mt-8 mr-4 w-48 bg-white border border-gray-300 rounded shadow-lg">
                <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => openCommentModal(index)}>Comment</button>
                {showAdminButtons && (
                  <>
                    <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => openEditModal(index)}>Edit</button>
                    <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200" onClick={() => openConfirm(index)}>Delete</button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Confirm Delete Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeConfirm}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Are you sure you want to delete this publication?</h2>
            <div className="flex justify-between">
              <button
                onClick={closeConfirm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Modal */}
      {isEditOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeEditModal}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Edit Publication</h2>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2" htmlFor="editTitle">
                Title
              </label>
              <input
                id="editTitle"
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2" htmlFor="editDescription">
                Description
              </label>
              <textarea
                id="editDescription"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                value={editDescription}
                rows="10"
                onChange={(e) => setEditDescription(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeEditModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Edit Modal */}
      {isEditConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeEditConfirm}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Confirm Changes</h2>
            <p className="text-gray-700 dark:text-gray-100 mb-4">Are you sure you want to save these changes?</p>
            <div className="flex justify-between">
              <button
                onClick={closeEditConfirm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleEditConfirm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Comment Modal */}
      {isCommentOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeCommentModal}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Add Comment</h2>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-100 text-sm font-bold mb-2" htmlFor="commentText">
                Comment
              </label>
              <textarea
                id="commentText"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-black dark:text-black leading-tight focus:outline-none focus:shadow-outline"
                value={commentText}
                rows="5"
                onChange={(e) => setCommentText(e.target.value)}
              />
            </div>
            <div className="flex justify-between">
              <button
                onClick={closeCommentModal}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleCommentSubmit}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
