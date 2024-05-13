import React from 'react';
import styled, { keyframes, css } from 'styled-components';


const Projects = () => {

const ImageCard = ({ image, title, description, techStack, link}) => (
    <div className="max-w-[300px]  overflow-hidden mr-6 ">
      <a href={link} target="_blank"  rel="noopener noreferrer">
        <img className="w-full rounded-[10px] hover:border-2 border-black " src={image} alt="Card image" />
        <div className="px-6 py-4" style={{fontFamily:"Public"}}>
            <div className="font-bold text-xl mb-2 text-violet-500 ">{title}</div>
            <p className="text-black text-base">{description}</p>
            <div className="text-black ">{techStack}</div>
        </div>
      </a>
    </div>
    );

const row1 =[
    "https://banner2.cleanpng.com/20190129/vxi/kisspng-javascript-web-applications-scalable-vector-graphi-5c50fcc8cdff26.2471555315488114648438.jpg",
    "https://e7.pngegg.com/pngimages/390/229/png-clipart-logo-html5-brand-design-text-logo.png",
    "https://e7.pngegg.com/pngimages/603/759/png-clipart-css3-cascading-style-sheets-logo-html-world-wide-web-blue-angle-thumbnail.png",
    "https://cdn0.iconfinder.com/data/icons/logos-brands-in-colors/128/react-512.png",
    "https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-976x1024-eobwqz2q.png",
    "https://miro.medium.com/v2/resize:fit:1400/1*xOqCfciF90c8nH0HhMpapQ.png",
    "https://static-00.iconduck.com/assets.00/docker-icon-2048x522-prfhswr7.png",
    ]

    const row2 = [
    "https://velog.velcdn.com/images/yoonvelog/post/e4c26b6e-c999-4bcb-8cda-3e0a5c4e4022/image.png",
    "https://tiiny.host/blog/assets/images/1_adcnxab1qc_5kf8juxdeya.png",
    "https://assets.awwwards.com/awards/avatar/2152182/652d1de29c2e9754617887.png",
    "https://konstantinlebedev.com/static/76d81ec25cd799b15cd16c0b16e869af/cover.png",
    "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/laravel-featured.png",
    "https://user.oc-static.com/upload/2021/09/30/16330114394851_p1c2-1.png",
    "https://developer.okta.com/assets-jekyll/blog/tutorial-kotlin-beginners-guide/kotlin-logo-social-21c8518b19eb96d96f35e0057bb92b7e1281a24820e0fa09e39c42f184bd7faa.png"

    ]
    

  return (
    <div id='projects' className=' mt-10 rounded-[20px]'>

        <h1 className='text-4xl text-violet-600 uppercase leading-loose font-bold mb-10 ml-10' style={{fontFamily:"Wood"}}>Selected Projects</h1>
        <div className="flex flex-wrap justify-center items-center space-y-2 rounded-[20px] ">
            <ImageCard image= "img/chaise.jpeg" title="Les Chaises Volantes" description="E-commerce website" techStack="SQL, Tailwind, React, Node.js" link="https://plateforme-vente-meubles-chaisesvolantes-front.vercel.app/" />
            <ImageCard image= "img/horoscope.jpg" title="Relias" description="Website for a daily horoscope" techStack="JavaScript" link="https://stevanyf.github.io/Relias/Relias/proj.html"/>
            <ImageCard image= "img/surf2.jpg" title="Surf-Spots (en cours...)" description="Mobile app to discover surf-spots" techStack="Kotlin, Android Studio" />
        </div>
       
        <div className="grid grid-cols-1 gap-x-2 gap-y-4 mb-20 sm:grid-cols-2 m-10 " style={{fontFamily:"Public"}}>
            <div className="w-full h-70 bg-lime-200 text-black text-center p-10 rounded-[20px] shadow-lg ">
                <p className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-left">If you want to see other projects that I've been working on, you can take a look on my GitHub to see the code source</p>
                <div className='mt-10'><a className='p-2 border-2 border-black rounded-[30px]  uppercase text-black text-sm sm:text-base md:text-lg lg:text-2xl' href='https://github.com/StevanyF'>My GitHub</a></div>
            </div>
            <div className="w-full h-70 bg-violet-200 text-black text-center p-10 rounded-[20px] shadow-lg">
                <p className="text-base sm:text-base md:text-lg lg:text-xl font-semibold text-left">In each of my projects, I've been working on the front-end integration and the user interface development, in order to deliver functional and user-friendly solutions.</p>
            </div>
        </div>
       

        <AppContainer>
            <Wrapper>
            <Text style={{fontFamily:'Wood-Light'}}>Stacks, Frameworks and Libraries used in my projects</Text>
            <Marquee>
                <MarqueeGroup>
                {
                    row1.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup>
                <MarqueeGroup>
                {
                    row1.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup>
            </Marquee>
            <Marquee>
                <MarqueeGroup2>
                {
                    row2.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup2>
                <MarqueeGroup2>
                {
                    row2.map( el =>(
                    <ImageGroup>
                        <Image src={el} />
                    </ImageGroup>
                    ))
                }
                </MarqueeGroup2>
            </Marquee>
            </Wrapper>

        </AppContainer>

    </div>
  )
}

export default Projects;

const AppContainer = styled.div `
  whidth: 100vw;
  height: 70vh;
  color: #000000;
  position:relative;
  display:flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color:white;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
`

const Wrapper = styled.div `
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
`
const Text = styled.div `
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 40px;
  color: black;
`

const Marquee = styled.div `
  display: flex;
  width: 80rem;
  user-select:none;
  overflow: hidden;
`
const scrollX= keyframes `
from {
  left: translateX(0);
}
to {
  transform: translateX(-100%);
}
`

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  white-space: nowrap;
  width: 100%; 
  animation : ${scrollX} 15s linear infinite;
`

const MarqueeGroup = styled.div`
  ${common}
 `

 const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s; 
 `

const ImageGroup = styled.div `
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) /10);


 `

const Image = styled.img `
 
  object-fit: contain;
  width: 100%;
  height: 100%; 
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px ;
  box-shadow: rgba(99, 99,99, 0.2) 0px 2px 8px 0px;
  
  `