import styled from "styled-components";
import { primaryColor, textcolor } from "../../config/colors.js";

export const Title = styled.h1`
  margin-top: 15px;
  color: ${textcolor};
  text-align: center;
`;

export const Form = styled.form`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  width: 400px;

  @media (max-width: 768px){
      width: 95%;

  
  }
  @media (max-width: 480px) {
        width: 95%;
       
    
  }
  

  input {
    height: 40px;
    border-color: ${textcolor};
    width: 100%;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 0 10px;
    align-items: center;
  }
  textarea{
    border-radius: 4px;
  }
  button {
    margin: 0 auto;
    margin-top: 15px;
    background-color: ${textcolor};
    color: ${primaryColor};
     align-items: center;
     width: 300px;

      @media (max-width: 768px){
      width: 95%;

  
  }
    @media (max-width: 480px) {
        width: 95%;
        margin-bottom: 15px;
       
    
  }
  }
  select{
    padding: 10px;
  border: 1px solid #ccc;
  border-radius: 8px;
 margin-bottom: 10px;
  font-size: 16px;
  width: 100%;
  }
  a{
    text-align: center;
  }
  label{
    text-align: center;
    padding: 10px;
    font-size: 20px;
    color: ${textcolor};
  }
`;


export const Content = styled.div`
      display: flex;
      justify-content: center;
      align-items: flex-start;
      gap: 80px;
      margin-top: 10px;
      margin-bottom: 30px;

      @media (max-width: 768px){
     flex-direction: column-reverse;
     img{
      margin-top: 5px;
        width: 50%;
       }

  
  }
    @media (max-width: 480px) {
      flex-direction: column-reverse;
      height: 100%;
      margin: 0 auto;
      
      justify-content: center;
      align-items: center;
      justify-content: center;
      width: 80%;
      

       img{
        margin-top: 5px;
        width: 50%;
       }
       a{
        font-size: 18px;
       }
    
  }
    
    
`
export const Description = styled.div`
    width: 400px;
   @media (max-width: 768px){
      width: 90%;

  
  }
    @media (max-width: 480px) {
        width: 90%;
    
  }
  
  .Title {
    color: ${textcolor};
    margin-top: 5px;
    
  }
  a {  
    color: #fff
  

}
`

export const Checkbox = styled.div`
  margin: 10px  0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  label{
    display: flex;
    justify-content: center;
    cursor: pointer;
    
    
  }
  input[type="checkbox"] {
    appearance: none;
    margin-left: 8px;
    align-items: center;
    border: 2px solid #555;
    border-radius: 4px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
    transition: 0.2s;
  }
    input[type="checkbox"]:checked {
      background-color: ${primaryColor};
      border-color: #0080ff;
  }
      input[type="checkbox"]:checked::after {
        content: "✓";
        color: ${textcolor};
        font-size: 16px;
        font-weight: bold;
        position: absolute;
        top: -2px;
        left: 4px;
  }


 
`
