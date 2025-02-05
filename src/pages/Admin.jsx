import React, { useState } from 'react';

function Admin() {
  const [active, setActive] = useState('Dashboard');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    Price: '',
    category: '',
    stock: '',
    image: null,
    specification:''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('price', formData.Price);
    data.append('category', formData.category);
    data.append('stock', formData.stock);
    data.append('image', formData.image);
    data.append('specification', formData.specification)
    try {
      const response = await fetch(`http://localhost:8000/api/v1/admin/createproduct`, {
        method: 'POST',
        body: data,
      });

      if (!response) {
        console.log('Not able to create new product');
      } else {
        console.log('New product created', response.json());
      }
    } catch (error) {
      console.log(`Error creating new product`, error);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="h-auto md:h-full w-full sm:w-1/3 md:w-1/5 p-6 border-r border-gray-300 bg-gray-100">
        <div>
          <span className="text-2xl font-bold">Sumukhji</span>
          {['Dashboard', 'Report', 'Products', 'Analytics'].map((item) => (
            <div key={item} className="mt-5 text-sm text-gray-600">
              <button
                className={`w-full text-left p-2 rounded-md ${
                  active === item ? 'bg-gray-500 text-white' : 'hover:bg-gray-300'
                } focus:outline-none`}
                onClick={() => setActive(item)}
              >
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 md:p-10 h-full w-full md:w-4/5 overflow-y-auto">
        <h1 className="h-[10vh] w-full bg-gray-100 rounded-lg flex items-center p-4 text-xl font-bold shadow-sm">
          {active} Page
        </h1>

        {/* Product Creation Form */}
        {active === 'Products' && (
          <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Create a Product</h2>
            <form className="space-y-4 max-w-lg">
              {[
                { label: 'Product Title', type: 'text', name: 'title' },
                { label: 'Description', type: 'textarea', name: 'description' },
                { label: 'Price', type: 'text', name: 'Price' },
                { label: 'Category', type: 'text', name: 'category' },
                { label: 'Stock', type: 'number', name: 'stock' },
                { label: 'Specification', type: 'text', name: 'specification' },
              ].map(({ label, type, name }) => (
                <div key={name}>
                  <label className="block text-gray-700 font-medium">{label}</label>
                  {type === 'textarea' ? (
                    <textarea
                      name={name}
                      placeholder={`Enter ${label.toLowerCase()}`}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleInputChange}
                    ></textarea>
                  ) : (
                    <input
                      type={type}
                      name={name}
                      placeholder={`Enter ${label.toLowerCase()}`}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
              <div>
                <label className="block text-gray-700 font-medium">Image</label>
                <input
                  type="file"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleFileChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-200"
                onClick={handleSubmit}
              >
                Create Product
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
