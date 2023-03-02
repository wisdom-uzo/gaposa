import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page</h1>
      <div className="flex flex-wrap -mx-2">
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">Users</h2>
            <p className="text-gray-700">Manage user accounts and permissions.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              View Users
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">Products</h2>
            <p className="text-gray-700">Manage product listings and inventory.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              View Products
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/3 p-2">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold mb-2">Orders</h2>
            <p className="text-gray-700">View and manage customer orders.</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
              View Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;