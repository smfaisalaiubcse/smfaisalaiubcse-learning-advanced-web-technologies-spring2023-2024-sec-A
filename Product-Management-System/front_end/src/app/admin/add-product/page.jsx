'use client'
import { useState } from "react";
import { useRouter } from "next/navigation"

const AddProduct = () => {
    const router = useRouter();

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');

    const handleAddProduct = () => {
        console.log("Adding product:", { productName, productPrice, productDescription });
        router.push("/admin/add-product");
    };

    const updateProduct = () => {
        router.push("/update-product");
        //router.back();
        //router.forward();
    }

    return (
        <div>
            <h1>Add Product Page</h1>
            <label>
                Product Name:
                <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
            </label>
            <label>
                Product Price:
                <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
            </label>
            <label>
                Product Description:
                <textarea value={productDescription} onChange={(e) => setProductDescription(e.target.value)} />
            </label>
            <button onClick={handleAddProduct}>Add Product</button>

            <p>Create update product? </p>
            <button onClick={updateProduct}>Click Here</button>
        </div>
    )
}

export default AddProduct;
