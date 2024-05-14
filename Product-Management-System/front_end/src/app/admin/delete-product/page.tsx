import React from 'react';

export default function deleteproduct() {
    return (
        <>
            <h2>Delete Product</h2>
            
            <label htmlFor="name">Product Name:</label>
                <input type="text" id="name"  required /><br /><br />
                <label htmlFor="ID">Product ID:</label>
                <input type="text" id="name" name="name" required /><br /><br />

               

                <input type="button" value="Delete Product" />
          
        </>
    );
}