import Category from '../../models/Category';

export const VIEW_CATEGORY = 'VIEW_CATEGORY';


export const fetchCategory = () =>{
    return async dispatch=>{
        // any asyn code u want
        try{
            const response = await fetch(
                'http://3.18.128.248:8000/jasm/jasmapp/1.0.4/category/findByStore?storeId=1'
            );
            if(!response.ok){
                throw new Error('Something is went wrong')
            }

            const resData = await response.json()
            const loadedCategory = []
            // console.log(loadedCategory)
            // console.log(resData)
            for (const key in resData){
                loadedCategory.push(
                    new Category(
                        resData[key].id,
                        resData[key].categoryName,
                        resData[key].categoryImage,
                        resData[key].subCategoryExists,
                    )
                );
            }

            dispatch({type : VIEW_CATEGORY, categories : loadedCategory})

        }catch(err){
            // send to custom analytics server
            throw err;
        }

    }
};