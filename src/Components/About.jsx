import React from 'react';


const About = () => {

    const pics = [
        "imgItaly/img.jpg",
        "imgItaly/img2.jpg",
        "imgItaly/img3.jpg",
        "imgItaly/img4.jpg",
        "imgItaly/img5.jpg",
        "imgItaly/img6.webp",
        "imgItaly/img7.jpg",
        "imgItaly/img8.jpg",
        "imgItaly/img9.jpg",
        "imgItaly/img10.jpg",
        "imgItaly/img.11.jpg"
      ]
     
  return (


    <div id='about' className=''>
        <div className='section flex flex-col justify-center items-center mt-20 gap-x-4 '>
            <img className='size-60' src='img/business-3d-black-young-woman-in-glasses-sitting-and-drinking-coffee-with-eyes-closed.png' alt='me' />
            <div className='box flex flex-col space-y-8 m-10 ' >
                <div><h1 className='title text-violet-600 uppercase text-3xl sm:text-6xl lg:text-6xl font-bold'style={{fontFamily:"Wood"}} >Things about me (3.)</h1></div>
                <div className='description space-y-2 w-full text-base sm:text-base md:text-lg lg:text-xl' style={{fontFamily:"Public"}}>
                    <p className='border-b-2 border-black p-4'>Background in Marketing and Sales</p>
                    <p className='border-b-2 border-black p-4'>Studing at Ada Tech School to be a Front-End Developer</p>
                    <p className='border-b-2 border-black p-4'>I like to create user interface with engaging animations for a memorable user experience</p>
                </div>            
            </div>
        </div>
        
        {/* <AppContainer>
            <Wrapper>
            <Text>This is where I come from</Text>
            <Marquee>
                <MarqueeGroup>
                {
                    pics.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup>
                <MarqueeGroup>
                {
                    pics.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup>
            </Marquee>
            </Wrapper>
        </AppContainer> */}

    </div>
  )
}

export default About

// const AppContainer = styled.div `
//   whidth:100vh;
//   height: 50vh;
//   color: #000000;
//   position:relative;
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   overflow: hidden;
// `;

// const Wrapper = styled.div `
//   width: 100%;
//   height: fit-content;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `
// const Text = styled.div `
//   font-size: 20px;
//   font-weight: 400;
//   margin-right: auto;
 
//   color:#fffS;

// `

// const Marquee = styled.div `
//   display: flex;
//   width: 100rem;
//   user-section:none;
//   overflow: hidden;
// `
// const scrollX= keyframes `
// from {
//   left: translateX(0);
// }
// to {
//   transform: translateX(-100%);
// }
// `

// const common = css`
//   flex-shrink: 0;
//   display: flex;
//   align-items: center;
//   white-space: nowrap;
  
//   animation : ${scrollX} 90s linear infinite;
// `

// const MarqueeGroup = styled.div`
//   ${common}
//  `

// const ImageGroup = styled.div `
//   display: grid;
//   place-items: center; 
//  `;

// const Image = styled.img `
 
//   object-fit: cover;
//   width: 100%; 
//   height: 40vh; 
//   border-radius: 0.5rem;
//   padding: 5px ;
//   box-shadow: rgba(99, 99,99, 0.2) 0px 2px 8px 0px;
//   `


