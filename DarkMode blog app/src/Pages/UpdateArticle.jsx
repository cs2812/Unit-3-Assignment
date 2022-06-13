import React from 'react'
import {
    Box,
    Container,
    Heading,
  } from "@chakra-ui/react";
  import { useSelector } from 'react-redux';
import ArticleUpdate from '../Components/ArticleUpdate';

const UpdateArticle = () => {
    const current=useSelector((store)=>store.reducer.current)

  return (
    <Container maxW={"3xl"} pb={"4rem"}>
        <Box textAlign={"center"} py={{base:2,md:10}}>
        <Heading>Update Article</Heading>
        </Box>
        <ArticleUpdate current={current}/>
    </Container>
  )
}

export default UpdateArticle;
