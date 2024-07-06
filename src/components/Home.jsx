// import React, { useEffect, useState } from "react";
// import { Link } from 'react-router-dom';
// import Modal from 'react-modal';
// import "./home.css";

// Modal.setAppElement('#root'); // Set the root element for accessibility

// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ title: "", image: "", type: "", price: "", createdAt: "" });
//   const [editingProduct, setEditingProduct] = useState(null);
//   const [filters, setFilters] = useState({ type: "", minPrice: "", maxPrice: "" });
//   const [sortOrder, setSortOrder] = useState("Newest");
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
//   const [productToDelete, setProductToDelete] = useState(null);

//   const getProducts = async () => {
//     try {
//       const response = await fetch("https://fakestoreapi.com/products");
//       const data = await response.json();
//       const productsWithDetails = data.map(product => ({
//         ...product,
//         type: ["Electronics", "Clothing", "Books"][Math.floor(Math.random() * 3)],
//         price: (Math.random() * 100).toFixed(2),
//         createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString() // random past date
//       }));
//       setProducts(productsWithDetails);
//       setFilteredProducts(productsWithDetails);
//     } catch (error) {
//       console.log("error", error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (editingProduct) {
//       setEditingProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//     } else {
//       setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
//     }
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
//   };

//   const handleSortChange = (e) => {
//     setSortOrder(e.target.value);
//     applyFilters(e.target.value);
//   };

//   const applyFilters = (sortOrder) => {
//     let filtered = products;
//     if (filters.type) {
//       filtered = filtered.filter(product => product.type === filters.type);
//     }
//     if (filters.minPrice) {
//       filtered = filtered.filter(product => parseFloat(product.price) >= parseFloat(filters.minPrice));
//     }
//     if (filters.maxPrice) {
//       filtered = filtered.filter(product => parseFloat(product.price) <= parseFloat(filters.maxPrice));
//     }

//     // Sorting
//     filtered.sort((a, b) => {
//       if (sortOrder === "Newest") {
//         return new Date(b.createdAt) - new Date(a.createdAt);
//       } else {
//         return new Date(a.createdAt) - new Date(b.createdAt);
//       }
//     });

//     setFilteredProducts(filtered);
//   };

//   const addProduct = () => {
//     const newProd = {
//       ...newProduct,
//       id: products.length + 1, // Simple ID generation, better to use a unique ID generator
//       createdAt: new Date().toISOString() // Current date and time
//     };
//     const updatedProducts = [...products, newProd];
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//     setNewProduct({ title: "", image: "", type: "", price: "", createdAt: "" }); // Reset form
//   };

//   const editProduct = (product) => {
//     setEditingProduct(product);
//     setModalIsOpen(true);
//   };

//   const updateProduct = () => {
//     const updatedProducts = products.map((product) =>
//       product.id === editingProduct.id ? editingProduct : product
//     );
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//     setEditingProduct(null);
//     setModalIsOpen(false);
//   };

//   const confirmDeleteProduct = (product) => {
//     setProductToDelete(product);
//     setDeleteModalIsOpen(true);
//   };

//   const deleteProduct = () => {
//     const updatedProducts = products.filter((product) => product.id !== productToDelete.id);
//     setProducts(updatedProducts);
//     setFilteredProducts(updatedProducts);
//     setProductToDelete(null);
//     setDeleteModalIsOpen(false);
//   };

//   useEffect(() => {
//     getProducts();
//   }, []);

//   useEffect(() => {
//     applyFilters(sortOrder);
//   }, [products, filters, sortOrder]);

//   return (
//     <>
//       <div className="top-bar">
//         <Link to={"/login"}>
//           <button type="submit" className="add-product-btn">
//             Logout
//           </button>
//         </Link>
//       </div>
//       <div className="productList">List Of Products</div>

//       <div className="product-form">
//         <input
//           type="text"
//           name="title"
//           placeholder="Product Title"
//           value={editingProduct ? "" : newProduct.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Thumbnail URL"
//           value={editingProduct ? "" : newProduct.image}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Product Price"
//           value={editingProduct ? "" : newProduct.price}
//           onChange={handleInputChange}
//         />
//         {editingProduct ? (
//           // <button onClick={updateProduct}>Update Product</button>
//           <></>
//         ) : (
//           <button onClick={addProduct}>Add Product</button>
//         )}
//       </div>
//       <div className="filter-form">
//         <h3>Filter Products</h3>
//         <select
//           name="type"
//           value={filters.type}
//           onChange={handleFilterChange}
//         >
//           <option value="">All Types</option>
//           <option value="Electronics">Electronics</option>
//           <option value="Clothing">Clothing</option>
//           <option value="Books">Books</option>
//         </select>
//         <select
//           name="minPrice"
//           value={filters.minPrice}
//           onChange={handleFilterChange}
//         >
//           <option value="">Min Price</option>
//           <option value="10">10</option>
//           <option value="20">20</option>
//           <option value="30">30</option>
//           <option value="40">40</option>
//           <option value="50">50</option>
//         </select>
//         <select
//           name="maxPrice"
//           value={filters.maxPrice}
//           onChange={handleFilterChange}
//         >
//           <option value="">Max Price</option>
//           <option value="50">50</option>
//           <option value="60">60</option>
//           <option value="70">70</option>
//           <option value="80">80</option>
//           <option value="90">90</option>
//           <option value="100">100</option>
//         </select>
//         <select
//           name="sortOrder"
//           value={sortOrder}
//           onChange={handleSortChange}
//         >
//           <option value="Newest">Newest First</option>
//           <option value="Oldest">Oldest First</option>
//         </select>
//         <button onClick={() => applyFilters(sortOrder)}>Apply Filters</button>
//       </div>

//       <div className="container">
//         <div className="product-item">
//           {filteredProducts.map((product) => (
//             <div className="prod-id" key={product.id}>
//               <div>
//                 <div className="image">
//                   <img src={product.image} alt={product.title} className="rounded" />
//                 </div>
//                 <div className="items">
//                   <h4>{product.title}</h4>
//                   <span className="title">{product.title}</span>
//                   <p>Type: {product.type}</p>
//                   <p>Price: ${product.price}</p>
//                   <p>Created At: {new Date(product.createdAt).toLocaleString()}</p>
//                   <button onClick={() => editProduct(product)}>Edit</button>
//                   <button onClick={() => confirmDeleteProduct(product)}>Delete</button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         contentLabel="Edit Product"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <h2>Edit Product</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Product Title"
//           value={editingProduct ? editingProduct.title : ""}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="image"
//           placeholder="Thumbnail URL"
//           value={editingProduct ? editingProduct.image : ""}
//           onChange={handleInputChange}
//         />
//         <input
//           type="number"
//           name="price"
//           placeholder="Product Price"
//           value={editingProduct ? editingProduct.price : ""}
//           onChange={handleInputChange}
//         />
//         <button onClick={updateProduct}>Save</button>
//         <button onClick={() => setModalIsOpen(false)}>Cancel</button>
//       </Modal>

//       <Modal
//         isOpen={deleteModalIsOpen}
//         onRequestClose={() => setDeleteModalIsOpen(false)}
//         contentLabel="Delete Product"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >
//         <h2>Are you sure you want to delete this product?</h2>
//         <p>{productToDelete && productToDelete.title}</p>
//         <button onClick={deleteProduct}>Yes</button>
//         <button onClick={() => setDeleteModalIsOpen(false)}>No</button>
//       </Modal>
//     </>
//   );
// };

// export default Home;


import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import "./home.css";

Modal.setAppElement('#root'); // Set the root element for accessibility

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", image: "", type: "", price: "", createdAt: "" });
  const [editingProduct, setEditingProduct] = useState(null);
  const [filters, setFilters] = useState({ type: "", minPrice: "", maxPrice: "" });
  const [sortOrder, setSortOrder] = useState("Newest");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [addProductModalIsOpen, setAddProductModalIsOpen] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const getProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      const productsWithDetails = data.map(product => ({
        ...product,
        type: ["Electronics", "Clothing", "Books"][Math.floor(Math.random() * 3)],
        price: (Math.random() * 100).toFixed(2),
        createdAt: new Date(Date.now() - Math.floor(Math.random() * 10000000000)).toISOString() // random past date
      }));
      setProducts(productsWithDetails);
      setFilteredProducts(productsWithDetails);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    } else {
      setNewProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
    applyFilters(e.target.value);
  };

  const applyFilters = (sortOrder) => {
    let filtered = products;
    if (filters.type) {
      filtered = filtered.filter(product => product.type === filters.type);
    }
    if (filters.minPrice) {
      filtered = filtered.filter(product => parseFloat(product.price) >= parseFloat(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(product => parseFloat(product.price) <= parseFloat(filters.maxPrice));
    }

    // Sorting
    filtered.sort((a, b) => {
      if (sortOrder === "Newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });

    setFilteredProducts(filtered);
  };

  const addProduct = () => {
    const newProd = {
      ...newProduct,
      id: products.length + 1, // Simple ID generation, better to use a unique ID generator
      createdAt: new Date().toISOString() // Current date and time
    };
    const updatedProducts = [...products, newProd];
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setNewProduct({ title: "", image: "", type: "", price: "", createdAt: "" }); // Reset form
    setAddProductModalIsOpen(false); // Close the modal after adding the product
  };

  const editProduct = (product) => {
    setEditingProduct(product);
    setModalIsOpen(true);
  };

  const updateProduct = () => {
    const updatedProducts = products.map((product) =>
      product.id === editingProduct.id ? editingProduct : product
    );
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setEditingProduct(null);
    setModalIsOpen(false);
  };

  const confirmDeleteProduct = (product) => {
    setProductToDelete(product);
    setDeleteModalIsOpen(true);
  };

  const deleteProduct = () => {
    const updatedProducts = products.filter((product) => product.id !== productToDelete.id);
    setProducts(updatedProducts);
    setFilteredProducts(updatedProducts);
    setProductToDelete(null);
    setDeleteModalIsOpen(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    applyFilters(sortOrder);
  }, [products, filters, sortOrder]);

  return (
    <>
      <div className="top-bar">
        <Link to={"/login"}>
          <button type="submit" className="add-product-btn">
            Logout
          </button>
        </Link>
      </div>
      <div className="productList">LIST OF PRODUCTS</div>
      
      <button onClick={() => setAddProductModalIsOpen(true)} className="addProd">Add New Product</button>

      <div className="filter-form">
        <h3>Filter Products</h3>
        <select
          name="type"
          value={filters.type}
          onChange={handleFilterChange}
          className="select"
        >
          <option value="">All Types</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Books">Books</option>
        </select>
        <select
          name="minPrice"
          value={filters.minPrice}
          onChange={handleFilterChange}
          className="select"
        >
          <option value="">Min Price</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <select
          name="maxPrice"
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className="select"
        >
          <option value="">Max Price</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
        </select>
        <select
          name="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="select"
        >
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
        </select>
        <button onClick={() => applyFilters(sortOrder)} className="filter">Apply Filters</button>
      </div>

      <div className="container">
        <div className="product-item">
          {filteredProducts.map((product) => (
            <div className="prod-id" key={product.id}>
              <div>
                <div className="image">
                  <img src={product.image} alt={product.title} className="rounded" />
                </div>
                <div className="items">
                  <h4>{product.title}</h4>
                  <span className="title">{product.title}</span>
                  <p>Type: {product.type}</p>
                  <p>Price: ${product.price}</p>
                  <p>Created At: {new Date(product.createdAt).toLocaleString()}</p>
                  <button onClick={() => editProduct(product)} className="editProd">Edit</button>
                  <button onClick={() => confirmDeleteProduct(product)} className="editProd">Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Edit Product"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Edit Product</h2>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={editingProduct ? editingProduct.title : ""}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="image"
          placeholder="Thumbnail URL"
          value={editingProduct ? editingProduct.image : ""}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={editingProduct ? editingProduct.price : ""}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={updateProduct} className="editProd">Save</button>
        <button onClick={() => setModalIsOpen(false)} className="editProd">Cancel</button>
      </Modal>

      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={() => setDeleteModalIsOpen(false)}
        contentLabel="Delete Product"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Are you sure you want to delete this product?</h2>
        <p>{productToDelete && productToDelete.title}</p>
        <button onClick={deleteProduct} className="deleteProd">Yes</button>
        <button onClick={() => setDeleteModalIsOpen(false)} className="deleteProd">No</button>
      </Modal>

      <Modal
        isOpen={addProductModalIsOpen}
        onRequestClose={() => setAddProductModalIsOpen(false)}
        contentLabel="Add Product"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>Add Product</h2>
        <input
          type="text"
          name="title"
          placeholder="Product Title"
          value={newProduct.title}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="text"
          name="image"
          placeholder="Thumbnail URL"
          value={newProduct.image}
          onChange={handleInputChange}
          className="input"
        />
        <input
          type="number"
          name="price"
          placeholder="Product Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="input"
        />
        <button onClick={addProduct} className="addProd">Add Product</button>
        <button onClick={() => setAddProductModalIsOpen(false)} className="addProd">Cancel</button>
      </Modal>
    </>
  );
};

export default Home;


