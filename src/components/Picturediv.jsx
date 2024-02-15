import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
function Picturediv() {
  return (
    <>
    <Navbar expand="lg" className="" style={{ backgroundColor:" #FFFFED  " ,sticky:"top"}}>
      <Container fluid>
        <Navbar.Brand href="#">
BellaÖ</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">blog</Nav.Link>
            
            <Nav.Link href="#action2">shop</Nav.Link>
            <Nav.Link href="#action2">about</Nav.Link>
            <Nav.Link href="#action2">contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="m"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  
    <div className='img1 d-flex'>
    <div><img  src="https://static.wixstatic.com/media/2a1a02_bb6ad769335646339f7fe4f3dc710e86~mv2.jpg/v1/fill/w_613,h_1250,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_bb6ad769335646339f7fe4f3dc710e86~mv2.jpg" alt="" style={{width:'757px', height: '800px'}}></img>
<div class="top-left">BLOG</div> </div>
  <div className='img2 d-flex'><img src="https://static.wixstatic.com/media/2a1a02_e4c45388988b4575a2f8126e4103e717~mv2.jpg/v1/fill/w_490,h_1000,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2a1a02_e4c45388988b4575a2f8126e4103e717~mv2.jpg" alt="" style={{width:' 757px', height:'800px'  }}>
    </img>  <div class="top-right">SHOP</div></div></div><br /><br /><br /><br />
    <div  style={{textAlign:'center'}}>BellaÖ<br /><h3 style={{fontSize:'50px',}}><b> My Latest Posts</b></h3></div> 
   <div className='container'>
    <div className=' row container d-flex  '>
          <div className="col-lg-4">
          <Card style={{ width: '18rem',background:' #FFFFED' }}>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/2a1a02_8d3c13a136fd4791940e267e44a25825~mv2.jpg/v1/fill/w_384,h_288,fp_0.50_0.50,q_90,enc_auto/2a1a02_8d3c13a136fd4791940e267e44a25825~mv2.jpg" />
      <Card.Body>
        <Card.Title><br/><p className='admin'> Admin <br />Mar 22, 2023 1 min</p></Card.Title>
      <Card.Text>
    <h4 className='ccard'>  <b> 2021  Face Mask trends</b></h4> 
    <hr /><i class="fa-regular fa-eye"></i>0 <span id='qq1'>4<i id='qq' class="fa-regular fa-heart"></i></span>
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>

        <div className=" col-lg-4">
          <Card style={{ width: '18rem' ,background:'#FFFFED'}}>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/2a1a02_81956f8134244232b60d0e5a4cd0526d~mv2.jpg/v1/fill/w_384,h_288,fp_0.50_0.50,q_90,enc_auto/2a1a02_81956f8134244232b60d0e5a4cd0526d~mv2.jpg" />
      <Card.Body>
        <Card.Title><p className='admin'> Admin <br />Mar 22, 2023 1 min</p></Card.Title>
        <Card.Text>
        <h4 className='ccard'>  <b>      What to wear to an at-home workout?</b></h4> 
        <hr /><i class="fa-regular fa-eye"></i>0 <span id='qq1'>4<i id='qq' class="fa-regular fa-heart"></i></span>

        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div className=" col-lg-4">
          <Card style={{ width: '18rem',background:' #FFFFED' }}>
      <Card.Img variant="top" src="https://static.wixstatic.com/media/2a1a02_aa003724e10a42c7bf891908a86ab49b~mv2.jpg/v1/fill/w_383,h_288,fp_0.50_0.50,q_90,enc_auto/2a1a02_aa003724e10a42c7bf891908a86ab49b~mv2.jpg" />
      <Card.Body>
        <Card.Title><p className='admin'> Admin <br />Mar 22, 20231 min</p></Card.Title>

        <Card.Text> <h4 className='ccard'>  <b> The benefits of CBD skin care products</b></h4> 
        <hr /><i class="fa-regular fa-eye"></i>0 <span id='qq1'>4<i id='qq' class="fa-regular fa-heart"></i></span>
 

        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>     

    </div>
    </div>
   <div className=' col-lg-12 ' style={{textAlign:"center",alignItems:'500px'}}> 
   <br /> <br /><br />
<br /><br />
    <button className='button'  style={{width:'190px',height:'50px', border:'solid',textAlign:'center',alignItems:'center', border: '1px rgba(0, 0, 0, 0.05);' }} >Read More</button>

   </div>
   <div className='divvv col-lg-12' style={{backgroundColor:'#FFFFED'}}><br/><br/><br/><br/><br/><h4  style={{fontSize:'50px',textAlign:'center'}}><b> Shop The Look</b></h4>
   <div className='row container justify-content-center'>
    
    <div className="col-lg-3"><img src="https://static.wixstatic.com/media/2a1a02_de64075a3cf24c36a710213bf90a9aa2~mv2.jpg/v1/fill/w_275,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/01.jpg" alt="" ></img></div>
    <div className="col-lg-3"><img src="https://static.wixstatic.com/media/2a1a02_2d1e3da52eaa4be6a79ccafacf840b42~mv2.jpg/v1/fill/w_275,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/04.jpg" alt=""></img></div>
    <div className="col-lg-3"><img src="https://static.wixstatic.com/media/2a1a02_b87f6a9a24484995a4451207a182eba3~mv2.jpg/v1/fill/w_275,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/10_2.jpg" alt="" ></img></div>
    <div className="col-lg-3"><img src="https://static.wixstatic.com/media/2a1a02_36be1667e7ac4870ac7016bd97e49b1d~mv2.jpg/v1/fill/w_275,h_413,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/02.jpg" alt="" ></img></div>
   </div></div>
   <br /><br /><br /><br /><br />
   <div className=' col-lg-12 ' style={{textAlign:"center",alignItems:'500px'}}>
    <button className='button'  style={{width:'190px',height:'50px', border:'solid',textAlign:'center', }} >View more</button>
    </div><br/><br/><br/><br/>

    <div className='row'>
    <div className='col-lg-1 '></div>
    <div className='col-lg-5 '>
    <h3  style={{textAlign:'left'}}>BellaÖ</h3><br />
    <img src="https://static.wixstatic.com/media/2a1a02_06f10725cc4f46ef8f2d87c3e129986f~mv2.jpg/v1/fill/w_396,h_394,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/shutterstock_1806621169_edited.jpg" alt=""></img>
    <p style={{padding:'20px'}}>I'm a paragraph. Click here to add <br/>your own text and edit me. I’m a<br/> great place for you to tell a story <br/> and let yourusers know a little <br/> more about you.</p>
    <button className='button'  style={{width:'190px',height:'50px', border:'solid',textAlign:'center',alignItems:'center', border: '1px rgba(0, 0, 0, 0.05);' }} >View more</button>
    </div>
    <div className='col-lg-3'></div>
    <div className='col-lg-3 '></div>
    </div>
 <br /><br /><br />
    </>
  )
}

export default Picturediv