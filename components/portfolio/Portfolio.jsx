import { useState } from "react";
import stylesPortfolio from "./portfolio.module.scss";
import { IoIosArrowForward, IoIosArrowBack} from "react-icons/io";
import Link from 'next/link'
import { urlchanger } from "../../helpers/index";

function Portfolio({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const status = "Live"

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : projects.projects.length - 1) : setCurrentSlide(currentSlide < projects.projects.length - 1 ? currentSlide + 1 : 0);
    
  };
  return (
    <div className={stylesPortfolio.portfolio} id="portfolio">
      <div className={stylesPortfolio.slider}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>

        {projects && projects.projects.map((project) => (
            <div className={stylesPortfolio.container} key={project.id}>
              <div className={stylesPortfolio.item}>
                  <div className={stylesPortfolio.topContainer}>
                    <div className={stylesPortfolio.imgContainer}>
                      <Link href={project.link}>
                        <img className={stylesPortfolio.Clicker}src={urlchanger(project.project_image[0].image)}
                        alt="Front Page of website"
                        />
                        {/* <img className={stylesPortfolio.Clicker}src={project.project_image[0].image}
                        alt="Front Page of website"
                        /> */}
                      </Link>
                    </div>
                  </div>
                <div className={stylesPortfolio.MidContainer}>
                  <img className = {stylesPortfolio.imgContainer}src={project.thumbnail}/>
                  <div className={stylesPortfolio.HeaderContainer}>
                    <Link href={project.link} target="_blank"><h2 className={stylesPortfolio.Clicker}>{project.title}</h2></Link>
                  </div>
                  <div className={stylesPortfolio.online}>
                        {(status === 'Live')?
                        <>
                          <span className={stylesPortfolio.dot_live}></span>
                        </>
                        :
                        <>
                        <h3>On Github</h3>
                        <span className={stylesPortfolio.dot_github}><h3>G</h3></span>
                        </>
                        }
                    <div className={stylesPortfolio.dot_sizer}>
                    </div>
                  </div>
                  
                </div>
                <div className={stylesPortfolio.bottomContainer}>
                  <div className={stylesPortfolio.description}>
                    <p>{project.description}</p>
                    </div>
                    <div className={stylesPortfolio.techstack}>
                    <p>{project.tech_stack}</p>
                    </div>
                </div>
              </div>
            </div>
        ))}

        </div>

        <div className={stylesPortfolio.Arrow_left_placer}>
          <div className={stylesPortfolio.arrowleft}>
            <IoIosArrowBack className={stylesPortfolio.arrow} onClick={() => handleClick("left")}/>
          </div>
        </div>

        <div className={stylesPortfolio.Arrow_right_placer}>
          <div className={stylesPortfolio.arrowright}>
            <IoIosArrowForward className={stylesPortfolio.arrow} onClick={() => handleClick()}/>
          </div>
        </div>
      
    </div>
  )
}
export default Portfolio;
