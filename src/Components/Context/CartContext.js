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
  async function addToCart(productId){
        try{
            const {data} = await axios.post(endPoint,{
                productId,
            },{
                headers,
            });
            setNumOfItems(data.numOfCartItems);
            console.log(numOfItems);
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
     
return ( <CartContext.Provider value ={{numOfItems,addToCart,getCart,setNumOfItems,removeFromCart,clearCart,updateProductQty,cartId}}>
{children}
</CartContext.Provider>
)

}
