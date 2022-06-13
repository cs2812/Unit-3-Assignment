import * as type from "./actionType";
// import { FETCH_BLOG_POST_SUCCESS ,FETCH_BLOG_POST_REQUEST} from "./actionType";
import axios from "axios";

const FetchBlogPostRequest=(payload)=>{
    return {
        type:type.FETCH_BLOG_POST_REQUEST,
        payload
    }
}
const FetchBlogPostSuccess=(payload)=>{
    // console.log("success",payload)
   
    return {
        type:type.FETCH_BLOG_POST_SUCCESS,
        payload:payload
    }
}
const FetchBlogPostFailure=(payload)=>{
    return {
        type:type.FETCH_BLOG_POST_FAILURE,
        payload
    }
}
const FetchBlogPost=(payload)=>(dispatch)=>{
    dispatch(FetchBlogPostRequest())
    axios.get("/blogs")
    .then((r)=>{
        // console.log("r.data",r.data)
    dispatch(FetchBlogPostSuccess(r.data))})
    .catch((e)=>dispatch(FetchBlogPostFailure(e.data)));
}


const FetchSingleBlogPostRequest=(payload)=>{
    return {
        type:type.FETCH_SINGLE_BLOG_POST_REQUEST,
        payload
    }
}
const FetchSingleBlogPostSuccess=(payload)=>{
    // console.log("AcSinsuc",payload)
   
    return {
        type:type.FETCH_SINGLE_BLOG_POST_SUCCESS,
        payload
    }
}
const FetchSingleBlogPostFailure=(payload)=>{
    return {
        type:type.FETCH_SINGLE_BLOG_POST_FAILURE,
        payload
    }
}
const FetchSingleBlogPost=(payload)=>(dispatch)=>{
    // console.log("sing",payload)
    dispatch(FetchSingleBlogPostRequest())
    axios.get(`/blogs/${payload}`)
    .then((r)=>{
        // console.log("Iddata",r.data)
    dispatch(FetchSingleBlogPostSuccess(r.data))})
    .catch((e)=>dispatch(FetchSingleBlogPostFailure(e.data)));
}


const CreateBlogPostFalure=(payload)=>{
return{
    type:type.CREATE_BLOG_POST_FAILURE,
    payload
}
}
const CreateBlogPostRequest=(payload)=>{
    return{
        type:type.CREATE_BLOG_POST_REQUEST,
        payload
    }
}
const CreateBlogPostSuccess=(payload)=>{
    return{
        type:type.CREATE_BLOG_POST_SUCCESS,
        payload
    }
    }
const CreateBlogPost=(payload)=>(dispatch)=>{
    dispatch(CreateBlogPostRequest())
    axios.post("/blogs",payload)
    .then((r)=>{
        // console.log("Post",r.data)
        dispatch(CreateBlogPostSuccess(r.data))
    })
    .catch((e)=>dispatch(CreateBlogPostFalure(e.data)))
}

const UpdateBlogPostFalure=(payload)=>{
    return{
        type:type.UPDATE_BLOG_POST_FAILURE,
        payload
    }
    }
    const UpdateBlogPostRequest=(payload)=>{
        return{
            type:type.UPDATE_BLOG_POST_REQUEST,
            payload
        }
    }
    const UpdateBlogPostSuccess=(payload)=>{
        return{
            type:type.UPDATE_BLOG_POST_SUCCESS,
            payload
        }
        }
    const UpdateBlogPost=(payload)=>(dispatch)=>{
        dispatch(UpdateBlogPostRequest())
        axios.patch(`/blogs/${payload.id}`,payload)
        .then((r)=>{
            // console.log("Post",r.data)
            dispatch(UpdateBlogPostSuccess(r.data))
        })
        .catch((e)=>dispatch(UpdateBlogPostFalure(e.data)))
    }
export{FetchBlogPost,FetchSingleBlogPost,CreateBlogPost,UpdateBlogPost}; 