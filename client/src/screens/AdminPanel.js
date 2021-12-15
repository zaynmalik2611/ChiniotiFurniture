import './AdminPanel.css';
import { useState } from 'react';

const AdminPanel = () => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [price, setPrice] = useState(0);
   const [countInStock, setCountInStock] = useState(0);
   const [imageUrl, setImageUrl] = useState('');

   const handleSubmit = (e) => {
      e.preventDefault();
      let payload = {
         name,
         description,
         price,
         countInStock,
      };
      console.log(payload);
   };
   return (
      <div>
         Admin Panel
         <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Name</label>
            <input
               type="text"
               id="name"
               name="name"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
               type="text"
               id="description"
               name="description"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
               type="number"
               id="price"
               name="price"
               value={price}
               onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="name">Count In Stock</label>
            <input
               type="number"
               id="countInStock"
               name="countInStock"
               value={countInStock}
               onChange={(e) => setCountInStock(e.target.value)}
            />
            <input type="submit" value="submit" />
         </form>
      </div>
   );
};

export default AdminPanel;
