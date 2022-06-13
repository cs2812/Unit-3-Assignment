import { 
    FETCH_BLOG_POST_FAILURE,
    FETCH_BLOG_POST_REQUEST,
    FETCH_BLOG_POST_SUCCESS,
    FETCH_SINGLE_BLOG_POST_FAILURE,
    FETCH_SINGLE_BLOG_POST_REQUEST,
    FETCH_SINGLE_BLOG_POST_SUCCESS,
    // CREATE_BLOG_POST_SUCCESS,
    // CREATE_BLOG_POST_REQUEST,
    // CREATE_BLOG_POST_FAILURE,
 } from "./actionType";

const initialState={
    blogs:[],
    current:{},
    loading:false,
    error:false
}
export const reducer =(state=initialState,{type,payload})=>{
switch(type){
case FETCH_BLOG_POST_REQUEST:
    return{
        ...state,
        loading:true,
        error:false,
}
case FETCH_BLOG_POST_SUCCESS:
    // console.log("suc",payload)
    return{
        ...state,
        loading:false,
        blogs:payload,
        error:false,
    }
case FETCH_BLOG_POST_FAILURE:
    return{
        ...state,
        error:payload
    }
case FETCH_SINGLE_BLOG_POST_REQUEST:
    return{
        ...state,
        loading:true,
        error:false,
}
case FETCH_SINGLE_BLOG_POST_SUCCESS:
    // console.log("sing",payload)
    return{
        ...state,
        loading:false,
        current:payload,
        error:false,
    }
case FETCH_SINGLE_BLOG_POST_FAILURE:
    return{
        ...state,
        error:payload
    }
// case CREATE_BLOG_POST_REQUEST:
//     return{
//         ...state,
//         loading:true,
//         error:false,
//     }
// case CREATE_BLOG_POST_SUCCESS:
//     return{
//         ...state,
//         loading:false,
//         error:false,
//     }
// case CREATE_BLOG_POST_FAILURE:
//     return{
//         ...state,
//         loading:true,
//         error:false,
//     }

default:{
    return state;
}  
}
}