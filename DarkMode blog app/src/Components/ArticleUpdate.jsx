import {
    Box,
    Container,
    FormControl,
    FormLabel,
    Input,
    Select,
    Stack,
    Button,
    Textarea,
  } from "@chakra-ui/react";

  import { useDispatch } from "react-redux";
  import React, { useEffect, useReducer } from "react";
  import { CreateBlogPost, UpdateBlogPost } from "../Redux/blog/action";
  import {useNavigate} from "react-router-dom"

const ArticleUpdate = ({current}) => {
  
    const initialValues = {
      title: "",
      sub_title: "",
      thumbnail_pic: "",
      description: "",
      author_name: "",
      author_profile_pic:"",
        // "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60",
      
      };
    const dispatch=useDispatch()
    const navigate=useNavigate()
  
    const [formData, setFormData] = useReducer(
      (currData, newData) => ({ ...currData, ...newData }),
      initialValues
    );
  
    const handleFormDataChange = (event) => {
      const { name, value } = event.target;
      setFormData({ [name]: value });
    };











  const createApplicationHandler=()=>{
      const newData={
          title: formData.title,
          sub_title: formData.sub_title,
          thumbnail_pic: formData.thumbnail_pic,
          description: formData.description,
          author: {
            name: formData.author.name,
            profile_pic: formData.author.profile_pic,
            publish_date: new Date().toLocaleDateString(),
          }
      }
      dispatch(CreateBlogPost(newData))
      navigate("/articles")
  }

  // update------->
  useEffect(()=>{
    if(current && Object.keys(current).length){
        setFormData({
            title: current.title,
            sub_title: current.sub_title,
            thumbnail_pic: current.thumbnail_pic,
            description: current.description,
            author_name: current.author.name,
            author_profile_pic:current.author.profile_pic
        })
    }
  },[current])
  const handleUpdate=()=>{
    const UpdateBlog={
        id:current.id,
        title: formData.title,
        sub_title: formData.sub_title,
        thumbnail_pic: formData.thumbnail_pic,
        description: formData.description,
        author: {
          name: formData.author_name,
          profile_pic:formData.author_profile_pic,
          publish_date: new Date().toLocaleDateString(),
        }
    }
    dispatch(UpdateBlogPost(UpdateBlog))
  }

  return (
    <Container>
        <Box>
        <Stack spacing="24px">
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              id="title"
              placeholder="Please enter blog title"
              value={formData.title}
              name="title"
              onChange={handleFormDataChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="sub-title">Sub-Title</FormLabel>
            <Input
              id="sub-title"
              placeholder="Please enter blog sub-title"
              name="sub_title"
              value={formData.sub_title}
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="url">Thumbnail Pic URL</FormLabel>

            <Input
              type="url"
              id="url"
              name="thumbnail_pic"
              value={formData.thumbnail_pic}
              placeholder="Please enter thumbnail pic URL"
              onChange={handleFormDataChange}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="author">Select Author</FormLabel>
            <Select
              id="author"
              defaultValue={formData.author_name}
              name="author_name"
              value={formData.author_name}
              onChange={handleFormDataChange}
              placeholder="Select Author"
            >
              <option value="Masai School">Masai School</option>
              <option value="Chetan Sharma">Chetan Sharma</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="desc">Description</FormLabel>
            <Textarea
              id="desc"
              name="description"
              value={formData.description}
              onChange={handleFormDataChange}
            />
          </FormControl>
        </Stack>
        {current?<Button colorScheme={"blue"} onClick={handleUpdate}>Update</Button>:<Button onClick={createApplicationHandler}>Create Application</Button>}
      </Box>

    </Container>
  )
}

export default ArticleUpdate

  