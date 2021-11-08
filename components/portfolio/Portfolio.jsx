import { useState } from "react";
import stylesPortfolio from "./portfolio.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import arrow from '../../assets/arrow.svg'

function Portfolio({ projects }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : projects.projects.length - 1) : setCurrentSlide(currentSlide < projects.projects.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className={stylesPortfolio.portfolio} id="portfolio">
      <div
        className={stylesPortfolio.slider}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {projects && projects.projects.map((project) => (
          <>
            <div className={stylesPortfolio.container} key={project.id}>
              <div className={stylesPortfolio.item} >
                <div className={stylesPortfolio.left}>
                  <div className={stylesPortfolio.leftContainer}>
                    <div className={stylesPortfolio.imgContainer}>
                      <img src={project.thumbnail} />
                    </div>
                    <Link href={project.link}><h2 className={stylesPortfolio.Clicker}>{project.title}</h2></Link>
                    <p>{project.description}</p>
                  </div>
                </div>
                <div className={stylesPortfolio.right}>
                <Link href={project.link}>
                  <img className={stylesPortfolio.Clicker}src={project.project_image[0].image}
                    alt="Front Page of website"
                  />
                  </Link>
                </div>
              </div>
            </div>
          </>
        ))}

      </div>
      <div className={stylesPortfolio.Arrow_left_placer}>
        <Image
          src={arrow}
          className={stylesPortfolio.arrowleft}
          objectFit="contain"
          alt="left arrow"
          onClick={() => handleClick("left")}
        />
      </div>
      <div className={stylesPortfolio.Arrow_right_placer}>
        <Image
          src={arrow}
          className={stylesPortfolio.arrowright}
          alt="right arrow"
          objectFit="contain"
          onClick={() => handleClick()}
        />
      </div>
    </div>
  )
}

export default Portfolio;