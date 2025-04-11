import React from 'react';

const handleSubmit = (e) => {
  e.preventDefault();
  const form = e.target;

  const productName = form.productName.value;
  const category = form.category.value;
  const price = form.price.value;
  const description = form.description.value;
  const images = form.images.files;

  if (images.length !== 4) {
    alert("Please select exactly 4 images.");
    return;
  }

  console.log({
    productName,
    category,
    price,
    description,
    images: Array.from(images),
  });

  form.reset();
};

const AddProduct = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-gray-100 to-white flex justify-center items-center p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-2xl shadow-xl p-8 border border-gray-200"
      >
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-8">
          Add New Product
        </h1>

        {/* Basic Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="font-medium mb-1 block">Product Name</label>
            <input
              name="productName"
              type="text"
              placeholder="Enter Product Name"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="font-medium mb-1 block">Product Price</label>
            <input
              name="price"
              type="text"
              placeholder="Price $"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="font-medium mb-1 block">Product Images</label>
            <input
              name="images"
              type="file"
              accept="image/*"
              multiple
              required
              className="w-full border border-gray-300 rounded px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-sm text-gray-500 mt-1">You must select exactly 4 images.</p>
          </div>
          <div>
            <label className="font-medium mb-1 block">Category</label>
            <select
              name="category"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select a category</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Home & Kitchen">Home & Kitchen</option>
              <option value="Beauty">Beauty</option>
              <option value="Sports">Sports</option>
              <option value="Books">Books</option>
              <option value="Toys">Toys</option>
              <option value="Grocery">Grocery</option>
            </select>
          </div>
        </div>

        {/* Description */}
        <div className="mb-8">
          <label className="font-medium mb-2 block">Description</label>
          <textarea
            name="description"
            placeholder="Enter product description..."
            rows={4}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Submit */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 transition text-white py-3 rounded-lg font-semibold text-lg shadow"
          >
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
