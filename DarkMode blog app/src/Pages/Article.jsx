import {
  Avatar,
  Box,
  Center,
  Container,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import {Link, useLocation} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import {useParams} from "react-router-dom"
import { FetchSingleBlogPost } from "../Redux/blog/action";

const Article = () => {
  const {id}=useParams()
  const location=useLocation()
  // console.log(id)
  const dispatch=useDispatch()
  const current =useSelector((store)=>store.reducer.current); 
console.log("cur",current)
  useEffect(()=>{
  if(current.id!==id){
    dispatch(FetchSingleBlogPost(id))
    // console.log("ok")
  }
},[dispatch,id])


  return (
    <Container maxW={"3xl"} pb={"4rem"}>
      <Box textAlign="center" py={{ base: 5, md: 10 }}>
        <Avatar
          name={current?.author?.name}
          size="lg"
          src={`${current?.author?.profile_pic}`}
        />
        <Box>
          <Link to={`${location.pathname}/update`}>
            <EditIcon/>
          </Link>
        </Box>
        <Text fontSize="lg">{current?.author?.name}</Text>
        <Text>{current?.author?.publish_date}</Text>
      </Box>
      <Center textAlign="center">
        <Stack>
          <Heading>
            {current?.title}
          </Heading>
          <Text fontSize="lg">
            {current?.sub_title}
          </Text>
          <Box>
            <Image
              rounded={"lg"}
              src={`${current?.thumbnail_pic}`}
              alt="Thumbnail Image"
            />
          </Box>
          <Box textAlign="left">
            {current?.description}
          </Box>
        </Stack>
      </Center>
    </Container>
  );
};

export default Article;
