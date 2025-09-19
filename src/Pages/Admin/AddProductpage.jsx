import React, { useState, useEffect } from "react";
import Sidebar from "../Admin/components/Sidebar";
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase";
import { X, Trash2, Edit } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  // Fetch products
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    setProducts(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete Product
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "products", id));
    fetchProducts();
  };

  // Validation Schema
  const ProductSchema = Yup.object().shape({
    name: Yup.string().required("Product name is required"),
    price: Yup.number().required("Price is required").positive(),
    description: Yup.string().required("Description is required"),
    imageUrl: Yup.string().url("Enter a valid image URL").required("Image URL is required"),
    category: Yup.string().required("Category is required"),
  });

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content with margin-left to avoid overlap */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen ml-64">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Products</h2>
          <button
            onClick={() => {
              setEditingProduct(null);
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            + Add Product
          </button>
        </div>
        <p className="text-gray-600 mt-2">Manage all your products from here.</p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <img
                src={prod.imageUrl}
                alt={prod.name}
                className="h-40 w-full object-cover rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold">{prod.name}</h3>
              <p className="text-gray-600">₹{prod.price}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{prod.description}</p>
              <p className="text-xs text-gray-400 mt-1">Category: {prod.category}</p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => {
                    setEditingProduct(prod);
                    setIsModalOpen(true);
                  }}
                  className="flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                >
                  <Edit size={16} /> Edit
                </button>
                <button
                  onClick={() => handleDelete(prod.id)}
                  className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-bold mb-4">
                {editingProduct ? "Edit Product" : "Add Product"}
              </h3>

              <Formik
                initialValues={
                  editingProduct || {
                    name: "",
                    price: "",
                    description: "",
                    imageUrl: "",
                    category: "",
                  }
                }
                validationSchema={ProductSchema}
                onSubmit={async (values, { resetForm }) => {
                  try {
                    if (editingProduct) {
                      await updateDoc(doc(db, "products", editingProduct.id), {
                        ...values,
                        price: parseFloat(values.price),
                      });
                      alert("✅ Product updated successfully!");
                    } else {
                      await addDoc(collection(db, "products"), {
                        ...values,
                        price: parseFloat(values.price),
                        createdAt: new Date(),
                      });
                      alert("✅ Product added successfully!");
                    }
                    fetchProducts();
                    resetForm();
                    setIsModalOpen(false);
                  } catch (error) {
                    console.error("Error saving product:", error);
                    alert("❌ Failed to save product!");
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="space-y-4">
                    <div>
                      <label className="block text-gray-700">Product Name</label>
                      <Field
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-3 py-2"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Price</label>
                      <Field
                        type="number"
                        name="price"
                        className="w-full border rounded-lg px-3 py-2"
                      />
                      <ErrorMessage
                        name="price"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Description</label>
                      <Field
                        as="textarea"
                        name="description"
                        className="w-full border rounded-lg px-3 py-2"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Image URL</label>
                      <Field
                        type="text"
                        name="imageUrl"
                        className="w-full border rounded-lg px-3 py-2"
                      />
                      <ErrorMessage
                        name="imageUrl"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700">Category</label>
                      <Field
                        type="text"
                        name="category"
                        className="w-full border rounded-lg px-3 py-2"
                      />
                      <ErrorMessage
                        name="category"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                      {editingProduct ? "Update Product" : "Add Product"}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
