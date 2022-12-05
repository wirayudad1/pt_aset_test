import { Container, Heading, Text, Button, Box } from "@chakra-ui/react";

import { useNavigate } from "react-router-dom";
import productsData from "../products.json";

const HomePage = () => {
  const navigate = useNavigate();
  let card='';
  return (
    <Container maxW="container.xl">
     
      {
        productsData.map((val)=>
        {
          return( 
            <div>
             <Box>
                {val.name}
              </Box>
              <Box>
                {val.price}
              </Box>
              <Button
                  onClick={(button)=>{
                    console.log(val.price)
                  }}
              >
              
                  Add To Chart
              </Button>

            </div> 
           

          )

         
        }
        )
      } 
      <Box>
          Display Val
      </Box>     
      <Button
        onClick={(button) => {
          // console.log(button)
          // let data=document.getElementById("disp_val")
          // data?.innerText
          // tmp+=1000

         // navigate("/about");
        }}
      >
        Item 2
        Add To Chart (Rp.1000)      </Button>
      <br></br>
      <Button
        onClick={() => {
          //navigate("/about");
          // tmp+=1000
          // console.log(tmp)

        }}
      >
        Item 1
        Add To Chart (Rp.1000)
      </Button>
    </Container>
    
  );
};

export default HomePage;
