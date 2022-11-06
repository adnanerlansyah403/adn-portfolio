import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Adn Portfolio</title>
        <meta name="description" content="Adn Portfolio" />
        
      </Head>
      <header class="header" id="header">
        <nav class="nav container">
            <a href="#" class="nav__logo">Adnan</a>

            <div class="nav__menu" id="nav-menu">
                <ul class="nav__list grid">
                    <li class="nav__item">
                        <a href="#home" class="nav__link active-link">
                            <i class="uil uil-estate nav__icon"></i> Home
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#about" class="nav__link">
                            <i class="uil uil-user nav__icon"></i> About
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#skills" class="nav__link">
                            <i class="uil uil-file-alt nav__icon"></i> Skills
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#services" class="nav__link">
                            <i class="uil uil-briefcase-alt nav__icon"></i> Services
                        </a>
                    </li>
                    <li class="nav__item">
                        <a href="#contactme" class="nav__link">
                            <i class="uil uil-scenery nav__icon"></i> Contact
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" id="nav-close"></i>
            </div>

            <div class="nav__btns">
                <i class="uil uil-moon change-theme" id="theme-button"></i>

                <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"></i>
                </div>
            </div>
        </nav>
      </header>
      
      <main className='main'>

        {/* HOME */}
        <section class="home section" id="home">
          <div class="home__container container grid">
              <div class="home__content grid">
                  <div class="home__social">
                      <a href="#" target="_blank" class="home__social-icon">
                          <i class="uil uil-link"></i>
                      </a>
                          
                      <a href="#" target="_blank"  class="home__social-icon">
                          <i class="uil uil-facebook-f"></i>
                      </a>
                      
                      <a href="#" target="_blank"  class="home__social-icon">
                          <i class="uil uil-instagram"></i>
                      </a>
                  </div>

                  <div class="home__img">
                      <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <mask id="mask0" mask-type="alpha">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                              130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                              97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                              0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                          </mask>
                          <g mask="url(#mask0)">
                              <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                              165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                              129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                              -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                              <image class="home__blob-img" x="12" xlinkHref="assets/img/myprofile-removebg-preview.png"/>
                          </g>
                      </svg>
                  </div>

                  <div class="home__data"></div>
              </div>

              <div class="home__data">
                  <h1 class="home__title">Hi, I&apos;am Adnan</h1>
                  <h3 class="home__subtitle">Fullstack Developer</h3>
                  <p class="home__description">
                      High level experience in web design and development knowledge, producing quality work.
                  </p>
                  <a href="#contact" class="button button--flex">
                      Contact Me <i class="uil uil-message button__icon"></i>
                  </a>
              </div>

              <div class="home__scroll">
                  <a href="#" class="home__scroll-button button--flex">
                      <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                      <span class="home__scroll-name">Scroll Down</span>
                      <i class="uil uil-arrow-down home__scroll-arrow"></i>
                  </a>
              </div>

          </div>
        </section>

        {/* ABOUT */}
        <section class="about section" id="about">
                    
          <h2 class="section__title">About Me</h2>
          <span class="section__subtitle">My Introduction</span>
          
          <div class="about__container container grid">
              <img src="assets/img/myprofile.png" alt="" class="about__img" />

              <div class="about__data">
                  <p class="about__description">
                      Web developer, with extensive knowledge, working in web technologies and UI / UX design, delivering quality work.
                  </p>

                  <div class="about__info">
                      <h2 class="text__md">
                          Freshgraduate
                          <i class="text__b-line"></i> 
                      </h2>    
                      
                      {/* <div>
                          <span class="about__info-title">08+</span>
                          <span class="about__info-name">
                              Years <br /> experience 
                          </span>
                      </div>

                      <div>
                          <span class="about__info-title">20+</span>
                          <span class="about__info-name">
                              Completed <br /> project 
                          </span>
                      </div>

                      <div>
                          <span class="about__info-title">05+</span>
                          <span class="about__info-name">
                              Companies <br /> worked 
                          </span>
                      </div>  */}
                  </div>

                  <div class="about__buttons">
                      <a download="" href="assets/pdf/CV-AdnanErlansyah.pdf" class="button button--flex">
                          Download CV <i class="uil uil-download-alt"></i>
                      </a>
                  </div>

              </div>
          </div>
    
        </section>

        {/* SKILLS */}
        <section class="skills section" id="skills">
                
          <h2 class="section__title">Skills</h2>
          <span class="section__subtitle">My technical level</span>

          <div class="skills__container container grid">
              <div>
                  <div class="skills__content skills__open">
                      <div class="skills__header">
                          <i class="uil uil-brackets-curly skills__icon"></i>

                          <div>
                              <h1 class="skills__title">
                                  Fullstack Developer
                              </h1>
                              <span class="skills__subtitle">More than 4 years</span>
                          </div>

                          <i class="uil uil-angle-down skills__arrow"></i>
                      </div>

                      <div class="skills__list grid">

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">HTML</h3>
                                  <span class="skills__number">90%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__html"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">CSS</h3>
                                  <span class="skills__number">80%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__css"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">JavaScript</h3>
                                  <span class="skills__number">60%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__js"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">React</h3>
                                  <span class="skills__number">85%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__html"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">HTML</h3>
                                  <span class="skills__number">90%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__react"></span>
                              </div>
                          </div>

                      </div>
                  </div>

                  <div class="skills__content skills__close">
                      <div class="skills__header">
                          <i class="uil uil-server-alt skills__icon"></i>

                          <div>
                              <h1 class="skills__title">
                                  Backend developer
                              </h1>
                              <span class="skills__subtitle">More than 2 years</span>
                          </div>

                          <i class="uil uil-angle-down skills__arrow"></i>
                      </div>

                      <div class="skills__list grid">

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">PHP</h3>
                                  <span class="skills__number">80%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__php"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">Node JS</h3>
                                  <span class="skills__number">70%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__node"></span>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>

              <div>
                  <div class="skills__content skills__close">
                      <div class="skills__header">
                          <i class="uil uil-swatchbook skills__icon"></i>

                          <div>
                              <h1 class="skills__title">
                                  Designer
                              </h1>
                              <span class="skills__subtitle">More than 3 years</span>
                          </div>

                          <i class="uil uil-angle-down skills__arrow"></i>
                      </div>

                      <div class="skills__list grid">

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">Figma</h3>
                                  <span class="skills__number">90%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__figma"></span>
                              </div>
                          </div>

                          <div class="skill__data">
                              <div class="skills__title">
                                  <h3 class="skills__name">Photoshop</h3>
                                  <span class="skills__number">85%</span>
                              </div>
                              <div class="skills__bar">
                                  <span class="skills__percentage skills__photoshop"></span>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>

          </div>

        </section>

        {/* QUALIFICATION */}
        <section class="qualification section">

          <h2 class="section__title">Qualification</h2>
          <span class="section__subtitle">My personal journey</span>

          <div class="qualification__container container">
              <div class="qualification__tabs">
                  <div class="qualification__button button--flex qualification__active" data-target="#education">
                      <i class="uil uil-graduation-cap qualification__icon"></i>
                      Education
                  </div>

                  <div class="qualification__button button--flex" data-target="#work">
                      <i class="uil uil-briefcase-alt qualifaction__icon"></i>
                      Work
                  </div>
              </div>

              <div class="qualification__sections">
                  <div class="qualification__content qualification__active" data-content id="education">
                      
                      <div class="qualification__data">
                          <div>
                              <h3 class="qualification__title">
                                  SDN Cikarang Kota 01
                              </h3>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt"></i>
                                  2009 - 2015
                              </div>
                          </div>

                          <div>
                              <span class="qualification__rounder"></span>
                              <span class="qualification__line"></span>
                          </div>
                      </div>

                      <div class="qualification__data">
                          <div></div>

                          <div>
                              <span class="qualification__rounder"></span>
                              <span class="qualification__line"></span>
                          </div>

                          <div>
                              <h3 class="qualification__title">
                                  Mts. As-salam
                              </h3>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt"></i>
                                  2015 - 2018
                              </div>
                          </div>
                      </div>

                      <div class="qualification__data">

                          <div>
                              <h3 class="qualification__title">
                                  Teknik Komputer dan Jaringan (TKJ)
                              </h3>
                              <span class="qualification__subtitle">SMK Hijau Muda - Lemah Abang</span>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt"></i>
                                  2018 - 2021
                              </div>
                          </div>

                          <div>
                              <span class="qualification__rounder"></span>
                              {/* <span class="qualification__line"></span> */}
                          </div>
                      </div>

                  </div>

                  <div class="qualification__content" data-content id="work">

                      <h2 class="text__md">
                          Freshgraduate
                          <i class="text__b-line"></i>
                      </h2>                            
                      
                      {/* <div class="qualification__data">
                          <div>
                              <h3 class="qualification__title">
                                  Software Enginner
                              </h3>
                              <span class="qualification__subtitle">Microsoft - Peru</span>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt"></i>
                                  2016 - 2018
                              </div>
                          </div>

                          <div>
                              <span class="qualification__rounder"></span>
                              <span class="qualification__line"></span>
                          </div>
                      </div>

                      <div class="qualification__data">
                          <div></div>

                          <div>
                              <span class="qualification__rounder"></span>
                              <span class="qualification__line"></span>
                          </div>

                          <div>
                              <h3 class="qualification__title">
                                  Web Design
                              </h3>
                              <span class="qualification__subtitle">Frontend Developer</span>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt">Apple Inc - Spain</i>
                                  2014 - 2017
                              </div>
                          </div>
                      </div>

                      <div class="qualification__data">

                          <div>
                              <h3 class="qualification__title">
                                  UI Designer
                              </h3>
                              <span class="qualification__subtitle">Figma - Spain</span>
                              <div class="qualification__calender">
                                  <i class="uil uil-calendar-alt"></i>
                                  2014 - 2017
                              </div>
                          </div>

                          <div>
                              <span class="qualification__rounder"></span>
                          </div>
                      </div> */}

                  </div>
              </div>

          </div>

        </section>

        {/* SERVICES */}
        <section class="services section" id="services">

          <h2 class="section__title">Services</h2>
          <span class="section__subtitle">What i offer</span>

          <div class="services__container container grid">

              <div class="services__content">
                  <div>
                      <i class="uil uil-web-grid services__icon"></i>
                      <h3 class="services__title">Frontend <br /> Developer</h3>
                  </div>

                  <span class="button button--flex button--small button--link services__button">
                      View More
                      <i class="uil uil-arrow-right button__icon"></i>
                  </span>

                  <div class="services__modal">
                      <div class="services__modal-content">
                          <h4 class="services__modal-title">Frontend <br /> Developer</h4>
                          <i class="uil uil-times services__modal-close"></i>

                          <ul class="services__modal-services grid">
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I develop the user interface</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>Web page development</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I create ux element interactions</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I position your company brand</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="services__content">
                  <div>
                      <i class="uil uil-server-alt skills__icon"></i>
                      <h3 class="services__title">Backend <br /> Developer</h3>
                  </div>

                  <span class="button button--flex button--small button--link services__button">
                      View More
                      <i class="uil uil-arrow-right button__icon"></i>
                  </span>

                  <div class="services__modal">
                      <div class="services__modal-content">
                          <h4 class="services__modal-title">Backend <br /> Developer</h4>
                          <i class="uil uil-times services__modal-close"></i>

                          <ul class="services__modal-services grid">
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I develop the security with middleware and authentication</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>Support RESTAPI</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>

              {/* <div class="services__content">
                  <div>
                      <i class="uil uil-pen services__icon"></i>
                      <h3 class="services__title">Branding <br /> Designer</h3>
                  </div>

                  <span class="button button--flex button--small button--link services__button">
                      View More
                      <i class="uil uil-arrow-right button__icon"></i>
                  </span>

                  <div class="services__modal">
                      <div class="services__modal-content">
                          <h4 class="services__modal-title">Branding <br /> Designer</h4>
                          <i class="uil uil-times services__modal-close"></i>

                          <ul class="services__modal-services grid">
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I develop the user interface</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>Web page development</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I create ux element interactions</p>
                              </li>
                              <li class="services__modal-service">
                                  <i class="uil uil-check-circle services__modal-icon"></i>
                                  <p>I position your company brand</p>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>    */}

          </div>

        </section>

        {/* PROJECT IN MIND */}
        <section class="project section">
          <div class="project__bg">
              <div class="project__container container grid">
                  <div class="project__data">
                      <h2 class="project__title">You have a new</h2>
                      <p class="project__description">
                          Contact me now and get 30% discount for first time
                      </p>
                      <a href="#ccontact" class="button button--flex button--white">
                          Contact Me
                          <i class="uil uil-message project__icon button__icon"></i>
                      </a>
                  </div>

                  <img src="assets/img/project.png" alt="" class="project__img" />
              </div>
          </div>
        </section>

        {/* CONTACT ME */}
        <section class="contact section" id="contact">
          <h2 class="section__title">Contact Me</h2>
          <span class="section__subtitle">Get in touch</span>

          <div class="contact__container container grid">
              <div>
                  <div class="contact__information">
                      <i class="uil uil-phone-alt contact__icon"></i>

                      <div>
                          <h3 class="contact__title">Call Me</h3>
                          <span class="contact__subtitle">+62-819-5744-0893</span>
                      </div>
                  </div>
                  <div class="contact__information">
                      <i class="uil uil-envelope-alt contact__icon"></i>

                      <div>
                          <h3 class="contact__title">Email</h3>
                          <span class="contact__subtitle">adnanerlansyah403@gmail.com</span>
                      </div>
                  </div>
                  <div class="contact__information">
                      <i class="uil uil-phone-alt contact__icon"></i>

                      <div>
                          <h3 class="contact__title">Location</h3>
                          <span class="contact__subtitle">Cikarang Utara -  Bekasi, Indonesia 17530</span>
                      </div>
                  </div>
              </div>
              
              <div class="contact__bg">
                  <a href="mailto:adnanerlansyah403@gmail.com" class="button button--flex ">
                      Send Message
                      <i class="uil uil-message button__icon"></i>
                  </a>
              </div>
          </div>
      </section>
        

      </main>

      <footer className='footer'>

        <div class="footer__bg">
          <div class="footer__container container grid">
              <div>
                  <h1 class="footer__title">Adnan</h1>
                  <span class="footer__subtitle">Frontend developer</span>
              </div>

              <ul class="footer__links">
                  <li>
                      <a href="#services" class="footer__link">Services</a>
                  </li>
                  <li>
                      <a href="#portfolio" class="footer__link">Portfolio</a>
                  </li>
                  <li>
                      <a href="#contact" class="footer__link">Contact</a>
                  </li>
              </ul>

              <div class="footer__socials">
                  <a href="https://www.facebook.com/adnan.erlansyah.7" target="_blank" rel='noreferrer' class="footer__social">
                      <i class="uil uil-facebook-f"></i>
                  </a>

                  
                  <a href="#" target="_blank" class="footer__social">
                      <i class="uil uil-instagram"></i>
                  </a>

                  
                  <a href="https://github.com/adnanerlansyah403" target="_blank" rel='noreferrer' class="footer__social">
                      <i class="uil uil-github-alt"></i>
                  </a>
              </div>
          </div>

          <p class="footer__copy">&#169; Adnan. All right reserved.</p>
        </div>

      </footer>
      
      <a href="#" class="scrollup" id="scroll-up">
        <i class="uil uil-arrow-up scrollup__icon"></i>
      </a>

    </div>
  )
}
