import React from 'react'
import {
    Center,
    Box,
    Image,
    useColorModeValue,
    Stack,Text,Heading,Avatar
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const BlogCard = ({blog}) => {
    // console.log(blog)
  return (
    <Center my={6}>
        <Box 
        maxW={"445px"}
        w="full"
        bg={useColorModeValue("white","gray.900")}
        boxShadow={"2xl"}
        rounded={'md'}
        p={6}
        overflow={"hidden"}
        >
            <Box>
                <Image src={`${blog.thumbnail_pic}`}/>
            </Box>
            <Link to={`/articles/${blog.id}`}>
            <Stack>
                <Text>Blog</Text>
                <Heading>{blog.title}</Heading>
                <Text>{blog.description}</Text>
            </Stack>
            <Stack>
                <Avatar src={`${blog.author.profile_pic}`} alt={"author"}/>
                <Stack>
                    <Text fontWeight={600}>{blog.author.name}</Text>
                    <Text fontWeight={600}>{blog.author.publish_date}</Text>          
                </Stack>
            </Stack>
            </Link>

        </Box>

    </Center>
  )
}

export default BlogCard
