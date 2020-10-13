import Product from '../../models/Product';

export const VIEW_PRODUCT = 'VIEW_PRODUCT';


export const fetchProduct = () =>{
    return async dispatch=>{
        // any asyn code u want
        try{
            const response = await fetch(
                'http://3.18.128.248:8000/jasm/jasmapp/1.0.4/product/findByCategoryAndStore?storeId=1&productCategoryId=8'
            );
            if(!response.ok){
                throw new Error('Something is went wrong')
            }

            const resData = await response.json()
            const loadedProduct = []
            console.log(loadedProduct)
            console.log(resData)
            for (const key in resData){
                loadedProduct.push(
                    new Product(
                        resData[key].id,
                        resData[key].productName,
                        resData[key].productCategoryId,
                        resData[key].productCategoryName,
                        resData[key].productCategoryId2,
                        resData[key].productCategoryName2,
                        resData[key].unit,
                        resData[key].variants,
                        resData[key].msrp,
                        resData[key].unitPrice,
                        resData[key].productImage,
                    )
                );
            }

            dispatch({type : VIEW_PRODUCT, products: loadedProduct})

        }catch(err){
            // send to custom analytics server
            throw err;
        }

    }
};