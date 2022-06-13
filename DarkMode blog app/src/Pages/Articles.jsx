import { Box, Container, Heading,Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import BlogCard from "../Components/BlogCard";
import { FetchBlogPost } from "../Redux/blog/action";

const Articles = () => {

const blogs =useSelector((store)=>store.reducer.blogs); 

/* console.log("Arts",blogs)*/
const dispatch=useDispatch();

useEffect(()=>{
  if(blogs?.length===0){
    // console.log(blogs?.length)
    dispatch(FetchBlogPost());
  }
},[blogs?.length, dispatch]);

  return (
    <Container maxW={"3xl"}>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Trending</Heading>
      </Box>
      <Flex flexWrap={"wrap"} justifyContent={"space-around"}>
        {blogs.length && blogs.map((product)=>{
          // console.log("product",product)
          return <BlogCard key={product.id} blog={product}/>
        })}
      </Flex>
    </Container>
  );
};

export default Articles;
