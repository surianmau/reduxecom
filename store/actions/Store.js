import Store from '../../models/Store';

export const VIEW_STORE = 'VIEW_STORE';


export const fetchStores = () =>{
    return async dispatch=>{
        // any asyn code u want
        try{
            const response = await fetch(
                'http://3.18.128.248:8000/jasm/jasmapp/1.0.4/store/card/findByFranchise?franchiseId=1'
            );
            if(!response.ok){
                throw new Error('Something is went wrong')
            }

            const resData = await response.json()
            const loadedStore = []
            // console.log(loadedStore)
            // console.log(resData)
            for (const key in resData){
                loadedStore.push(
                    new Store(
                        resData[key].franchiseId,
                        resData[key].storeId,
                        resData[key].storeCode,
                        resData[key].storeName,
                        resData[key].chainName,
                        resData[key].storeImage,
                        resData[key].shortDesc,
                    )
                );
            }

            dispatch({type : VIEW_STORE, stores: loadedStore})

        }catch(err){
            // send to custom analytics server
            throw err;
        }

    }
};