"use client";

import { useState } from 'react';
import NavBar from '@/app/navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openConfirm = () => {
    closeModal();
    setIsConfirmOpen(true);
  };
  const closeConfirm = () => setIsConfirmOpen(false);

  return (
    <>
      <NavBar />
      <div className="h-screen bg-gray-200 dark:bg-gray-800 flex flex-wrap items-center justify-center">
        <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 bg-white shadow-lg transform duration-200 ease-in-out">
          <div className="h-32 overflow-hidden">
            <Image
              width={400}
              height={400}
              className="w-full"
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
              alt="Karen Johnson"
            />
          </div>
          <div className="flex justify-center px-5 -mt-12">
            <Image
              width={400}
              height={400}
              className="h-32 w-32 bg-white p-2 rounded-full"
              src="https://www.befunky.com/images/wp/wp-2023-10-09-backgroundrem-photo-after.jpg?auto=avif,webp&format=jpg&width=944"
              alt="Karen Johnson"
            />
          </div>
          <div>
            <div className="text-center px-14">
              <h2 className="text-gray-800 text-3xl font-bold">Karen Johnson</h2>
              <a className="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/immohitdhiman/" target="_blank">@immohitdhiman</a>
              <p className="mt-2 text-gray-500 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, </p>
            </div>
            <hr className="mt-6" />
            <div className="flex bg-gray-50">
              <div
                onClick={openModal}
                className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square text-black w-6 h-6 mr-2" viewBox="0 0 16 16">
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                  <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                </svg>
                <p className="text-black font-semibold">Edit</p>
              </div>
              <div className="border"></div>
              <Link href="/" legacyBehavior>
                <a className="text-center w-1/2 p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="text-black w-6 h-6 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-black font-semibold">Go to</p>
                </a>
              </Link>
              
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeModal}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-md" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Edit Profile</h2>
              <button onClick={closeModal} className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200">&times;</button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="profilePicture">Profile Picture</label>
              <input
                type="file"
                id="profilePicture"
                className="w-full text-black dark:text-white p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                className="w-full text-black dark:text-black p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="description">Description</label>
              <textarea
                id="description"
                className="w-full text-black dark:text-black p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={openConfirm}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closeConfirm}>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Are you sure you want to save changes?</h2>
            <div className="flex justify-between">
              <button
                onClick={closeConfirm}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
              <button
                onClick={closeConfirm}
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
