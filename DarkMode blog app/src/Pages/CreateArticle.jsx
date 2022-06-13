import {
  Box,
  Container,
  Heading,
} from "@chakra-ui/react";
import React from "react";

import ArticleUpdate from "../Components/ArticleUpdate";
const CreateArticle = () => {
  // console.log(formData);
  return (
    <Container>
      <Box textAlign="center" py={{ base: 2, md: 10 }}>
        <Heading>Create Article</Heading>
      </Box>
      <ArticleUpdate/>
     </Container>
  );
};

export default CreateArticle;
