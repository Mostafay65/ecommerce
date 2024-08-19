import axios from "axios";
import { TokenContext } from "./Token";
const { createContext, useContext, useState } = require("react");

export const CartContext = createContext(); 



export default function CartProvider({children}){
    const endPoint = 'https://ecommerce.routemisr.com/api/v1/cart';
    const {token} =useContext(TokenContext);
    const headers ={
        token: localStorage.getItem("userToken"),
    }
    let[numOfItems,setNumOfItems] = useState(0)
    let[numOfWishList,setNumOfWishList] = useState(0)
    let[cartId,setCartId] = useState(null)

    async function getCart(){
      try{
        const {data} = await axios.get(endPoint,{headers})
        setNumOfItems(data.numOfCartItems);
        setCartId(data.data._id);
        return data ;
      }
      catch(err){
        console.log(err);
      }
    }

     async function getWishlist() {
      try {
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/wishlist`,{headers,})
        setNumOfWishList(data.count) 
        return data ;
        
      } catch (error) {
        
      }
     } 

    async function addProductToWishlist(productId){
      try {
        let{data} = await axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId},{headers,})
        setNumOfWishList(data.data.length)
        return data
        
      } catch (error) {
        console.log(error);
        
      }
    }
    async function removeFromWishlist(id){
      try {
        const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}` , {headers}) ;
        setNumOfWishList(data.data.length)
        return data ;
      } catch (error) {
        console.log(error);
      }
    }
  
    async function addToCart(productId){
        try{
            const {data} = await axios.post(endPoint,{
                productId,
            },{
                headers,
            });
            setNumOfItems(data.numOfCartItems);
            return data; 
        }
        catch(error){
            console.log(error);
        }
    }

    async function removeFromCart(id){
      try {
        const {data} = await axios.delete(`${endPoint}/${id}` , {headers}) ;
        setNumOfItems(data.numOfCartItems);
        return data ;
      } catch (error) {
        console.log(error);
      }
    }

    async function clearCart(){
      try {
        const {data} = await axios.delete(`${endPoint}` , {headers}) ;
        setNumOfItems(data.numOfCartItems);
        return data ;
      } catch (error) {
        console.log(error);
      }
    }
    async function updateProductQty(id,count){
      try {
        const {data} = await axios.put(`${endPoint}/${id}`,
       {
        count,
       },
       {headers}
     );
       
     return data ;
      } catch (error) {
        console.log(error);
      }
}
     
return ( <CartContext.Provider value ={{numOfItems,numOfWishList,getWishlist,addProductToWishlist,removeFromWishlist,addToCart,getCart,setNumOfItems,removeFromCart,clearCart,updateProductQty,cartId}}>
{children}
</CartContext.Provider>
)

}
