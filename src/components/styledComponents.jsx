import styled from 'styled-components'

export const StyledHome = styled.span`

   a { 
       font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    color:#fcf9f9;
    padding:10px;
    }
`
export const StyledDivHome = styled.div`
display:flex;
   a { 
   font-size:2em;
  
       font-family: 'Times New Roman', Times, serif;
    text-decoration: none;
    color:#fcf9f9;
    padding-left:20px;
    margin:10px;
    margin-bottom:10px;  
    margin-top:5px;
    text-align: center;
    padding-top:10px;}
`
export const StyledFormSelect = styled.div`
  margin:20px;
  margin-left:50px;
  display:flex;
 
`
export const StyledSelect = styled.select`
 width: 300px;
 padding:10px;
  color:#fcf9f9;
  background:transparent;
  margin-left:16px;
  border:0.5px solid white;
  option{
  background:#131d13;
  padding:5px;
}


`
export const StyledSearch = styled.input`
margin-left:150px;
  color:#fcf9f9;
width:300px;
background:transparent;
border:0.5px solid white;
padding: 5px 30px;

`
export const StyledButton = styled.button`
padding:5px 30px;
color: white;
font-size:1em;
background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
:hover{
background:#162218;}
margin-left:160px;
border:0.5px solid white;
    `

export const StyledDivCont = styled.div`
  display: wrap ;
  
  justify-content: space-between;
  align-content: space-between;
  max-width:90%;
 
`
export const StyledDivItem = styled.div`
   margin:50px 70px;
   border:0.5px solid #191f17;
   border-radius: 8px;
   display: inline-block;
   background: linear-gradient(rgba(247, 250, 246, 0.3),rgba(22, 32, 19, 0.3));
    
     width:250px;
     height:250px;

   a { font-weight: bold;
       font-family: 'Times New Roman', Times, serif;
    text-decoration: none;
    color:#fcf9f9;
    text-align:center;
    font-size:1.2em;
    
    }
    p{
        color:#fcf9f9;
        font-family: 'Times New Roman', Times, serif;
        text-align:center;
        
    }
    span{
      font-weight:bold;
      font-family: 'Times New Roman', Times, serif;
      padding-left:10px;
     
    }
    img{
        display:block;
       height:125px ;
        width:250px ;
        border-radius:8px;   }
`
export const StyledOneItem = styled.div`
div{
  margin-left: 200px;
  display:inline-block;
}

p{
  font-family: 'Times New Roman', Times, serif;
  
  padding:9px;
  background: linear-gradient(rgba(133, 138, 133, 0.1),rgba(247, 250, 246, 0.1))
}
  font-size:1.5em;
  display:flex;
  
  padding: 20px;
  color: #fcf9f9; 
  span{
  font-weight:bold;
  font-family: 'Times New Roman', Times, serif;
}
  img{
      width:200px;
      height:200px;
      border-radius:30px;

  }
  button{
    margin-left:50px;
    height:40px;
    padding:5px 30px;
    color: white;
   font-size:1em;
    background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
    border:0.5px solid white;
:hover{
  background:green;
  
  }
}
`
export const StyledLoginDiv = styled.div`
margin-top:150px;
display:flex;
justify-content:space-between;
flex-direction:column;
align-items:center;
input{
  width:500px;
  padding:15px 30px;
  margin-top:8px;
  /* background: transparent; */
  border:1px solid white;
 
}

`
export const StyledLoginButton = styled.input`
color: white;
font-size:1em;
background: linear-gradient(rgba(247, 250, 246, 0.1),rgba(22, 32, 19, 0.9));
:hover{
background:#162218;
}
`