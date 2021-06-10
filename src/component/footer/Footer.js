import React from 'react'
import {Footers,TopLine,Subcribe,InputEmail,Btn,Ptag,Heading,Detail,FooterDetail} from './Footer.element'

const Footer = () => {
    return (
        <>
            <Footers>
                <TopLine>Join our exclusive membership
                     to receive the 
                     latest news and trends</TopLine>
                    <Subcribe>
                       <InputEmail />
                        <Btn>Subcribe</Btn>
                     </Subcribe>
                  <FooterDetail>
                      <Detail>
                          <Heading>About Us</Heading>
                          <Ptag>How its work</Ptag>
                          <Ptag>carrers</Ptag>
                          <Ptag>Invester</Ptag>
                      </Detail>

                      <Detail>
                          <Heading>Contact Us</Heading>
                          <Ptag>Contact</Ptag>
                          <Ptag>Support</Ptag>
                          <Ptag>Description</Ptag>
                          <Ptag>Sponsership</Ptag>
                          
                      </Detail>


                      <Detail>
                          <Heading>Videos</Heading>
                          <Ptag>Submit Video</Ptag>
                          <Ptag>Agency</Ptag>
                          <Ptag>Influencer</Ptag>
                         
                      </Detail>


                      <Detail>
                          <Heading>Social Media</Heading>
                          <Ptag>Instagram</Ptag>
                          <Ptag>facebook</Ptag>
                          <Ptag>Youtube</Ptag>
                          <Ptag>Twitter</Ptag>  
                      </Detail>
                  </FooterDetail>   
            </Footers>
        </>
    )
}

export default Footer
