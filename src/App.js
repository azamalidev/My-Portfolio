import React, { useState, useEffect } from 'react';
import styles from './style/mystyle.module.css';
import Aboutme from './component/aboutme';
import Skills from './component/skills';
import PhotoAlbum from 'react-photo-album';
import Services from './component/services';
import Projects from './component/projects';
import ScrollAnimation from 'react-animate-on-scroll';
import ProgressBar from 'react-scroll-progress-bar';
import img1 from './assets/images/Almuhasba 1.png';
import img2 from './assets/images/Servics-usa.png';
import img3 from './assets/images/FYP.png';
import img4 from './assets/images/Saudibank limited.png';
import img5 from './assets/images/stripePage.png';
import img6 from './assets/images/Apart-luxury.jpg';
import img7 from './assets/images/Mercurysolsnew.png';
import ItsMe from './assets/icons/itsme';

function App() {

  const photos = [
    { src: img1, width: 800, height: 600 },
    { src: img2, width: 1000, height: 600 },
    { src: img3, width: 900, height: 600 },
    { src: img4, width: 800, height: 600 },
    { src: img6, width: 800, height: 600 },
    { src: img7, width: 800, height: 600 },
    { src: img5, width: 800, height: 600 },
    { src: img4, width: 600, height: 600 },
    { src: img1, width: 800, height: 600 },
  ];

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const openCertificate = () => {
    window.open(
      'https://drive.google.com/drive/folders/1YZvqG7g2PUk8va_BUGfben1k8J3v1vGV',
      '_blank'
    );
  };

  return (
    <>
      <div className='w-[50px] mx-auto overflow-hidden'>
        <ProgressBar bgcolor='#3FFF00' />
        <div className='container-fluid' style={{ background: 'var(--cyber-bg)' }}>
          {/* Navbar */}
          <nav className='navbar navbar-expand-lg navbar-light bg-transparent'>
            <a className={`navbar-brand mt-4 ml-4 ${styles.navbarText}`} href='#'>
              <h5 style={{ fontSize: '30px' }} className='text-white font-weight-bold'>
                <span style={{ color: '#3FFF00' }}>{'{'}</span>{' '}
                <span style={{ color: 'white', textShadow: '0 0 10px rgba(63,255,0,0.5)' }}>Azam Ali</span>{' '}
                <span style={{ color: '#3FFF00' }}>{'}'}</span>
              </h5>
            </a>
            <button
              className='navbar-toggler mt-4'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
              style={{ color: 'white' }}
            >
              <span className='navbar-toggler-icon bg-white rounded'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <div className='col-sm-8'></div>
              <div className='col-sm-1'></div>
              <div className={`${styles.navbarButton} mt-4`} onClick={openCertificate}>
                Certificate
              </div>
              <div className='col-sm-2'></div>
            </div>
          </nav>

          {/* Hero */}
          <div className={`row mt-3 ${styles.animatedText}`}>
            <div className={`mt-5 mb-2 ${styles.topTextDiv} col-sm-7`}>
              <div className={`text-white ${styles.staticText}`}>I'am</div>
              <ul style={{ position: 'relative', left: '-20px' }}>
                <h1 className='h1' aria-label="React.js, Next.js, Express Nest"></h1>
              </ul>
              <div className={`text-white ${styles.staticText}`}>Developer</div>
              <h4 className={`${styles.topDivText} mt-3`} style={{ color: '#94a3b8' }}>
                A passionate Frontend + Backend developer from Pakistan, Punjab, RYK.
              </h4>
              {/* Social Media */}
              <div className={`${styles.socialMedia} mt-4`}>
                <a href='https://www.facebook.com/profile.php?id=100030632889504&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='white' className='bi bi-facebook' viewBox='0 0 16 16'>
                    <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                  </svg>
                </a>
                <a href='https://instagram.com/azamali7030?igshid=ZDdkNTZiNTM=' target='_blank' rel='noopener noreferrer'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-instagram' viewBox='0 0 16 16'>
                    <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                  </svg>
                </a>
                <a href='https://wa.me/+923327387008?text=Hello,%20how%20are%20I%20you%20?%20' className='whatsapp_float' target='_blank' rel='noopener noreferrer'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-whatsapp' viewBox='0 0 16 16'>
                    <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
                  </svg>
                </a>
                <a href='https://www.linkedin.com/in/azam-ali-455402255/' target='_blank' rel='noopener noreferrer'>
                  <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-linkedin' viewBox='0 0 16 16'>
                    <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                  </svg>
                </a>
              </div>
            </div>
            <div className='col-sm-5'>
              <div style={{ position: 'relative', top: '100px' }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='white' className={`${styles.moveUpDown1} bi bi-braces-asterisk m-4 offset-3`} viewBox='0 0 16 16'>
                  <path fillRule='evenodd' d='M1.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C2.25 2 1.49 2.759 1.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6ZM14.886 7.9v.164c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456v-1.3c-1.114 0-1.49-.362-1.49-1.456V4.352C14.51 2.759 13.75 2 12.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6ZM7.5 11.5V9.207l-1.621 1.621-.707-.707L6.792 8.5H4.5v-1h2.293L5.172 5.879l.707-.707L7.5 6.792V4.5h1v2.293l1.621-1.621.707.707L9.208 7.5H11.5v1H9.207l1.621 1.621-.707.707L8.5 9.208V11.5h-1Z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='white' className={`${styles.moveUpDown2} bi bi-balloon-fill m-4`} viewBox='0 0 16 16'>
                  <path fillRule='evenodd' d='M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='white' className={`${styles.moveUpDown1} bi bi-balloon-fill m-5`} viewBox='0 0 16 16'>
                  <path fillRule='evenodd' d='M8.48 10.901C11.211 10.227 13 7.837 13 5A5 5 0 0 0 3 5c0 2.837 1.789 5.227 4.52 5.901l-.244.487a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.244-.487ZM4.352 3.356a4.004 4.004 0 0 1 3.15-2.325C7.774.997 8 1.224 8 1.5c0 .276-.226.496-.498.542-.95.162-1.749.78-2.173 1.617a.595.595 0 0 1-.52.341c-.346 0-.599-.329-.457-.644Z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='#3FFF00' className={`bi bi-code m-4 ${styles.moveUpDown3}`} viewBox='0 0 16 16'>
                  <path d='M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z' />
                </svg>
                <svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='white' className={`bi bi-bootstrap m-4 ${styles.moveUpDown2}`} viewBox='0 0 16 16'>
                  <path d='M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377H6.375z' />
                  <path d='M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4z' />
                </svg>
              </div>
              <ItsMe />
            </div>
          </div>

          {/* About Me */}
          <Aboutme />

          {/* Experience */}
          <div className={`${styles.experienceSection} mt-5`}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionEyebrow}><svg width="8" height="8" viewBox="0 0 8 8" fill="#3FFF00"><circle cx="4" cy="4" r="4"/></svg>Career</div>
              <h2 className={styles.sectionTitle}>Experience</h2>
              <p className={styles.sectionSubtitle}>
                My professional journey building scalable web applications for startups and agencies.
              </p>
            </div>
            <div className={styles.experienceGrid}>
              <div className={styles.experienceCard}>
                <div className={styles.experienceCardDot}></div>
                <div className={styles.experienceCardContent}>
                  <div className={styles.experienceCardHeader}>
                    <div className={styles.experienceCompanyInfo}>
                      <h3 className={styles.experienceCompanyName}>Mercurysole</h3>
                      <p className={styles.experienceRole}>MERN Stack Developer</p>
                    </div>
                    <span className={styles.experienceDates}>2022 – 2024</span>
                  </div>
                  <div className={styles.experienceCardBody}>
                    <p className={styles.experienceText}>Built dynamic web applications, optimized backend architecture, and improved user engagement with scalable MERN solutions.</p>
                    <div className={styles.experienceTechTags}>
                      <span className={styles.experienceTag}>React</span>
                      <span className={styles.experienceTag}>Node.js</span>
                      <span className={styles.experienceTag}>Express</span>
                      <span className={styles.experienceTag}>MongoDB</span>
                      <span className={styles.experienceTag}>REST API</span>
                    </div>
                    <ul className={styles.experienceList}>
                      <li><span className={styles.experienceListIcon}>▹</span>Delivered responsive interfaces and API-driven workflows.</li>
                      <li><span className={styles.experienceListIcon}>▹</span>Improved performance with clean architecture and caching.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.experienceCard}>
                <div className={styles.experienceCardDot}></div>
                <div className={styles.experienceCardContent}>
                  <div className={styles.experienceCardHeader}>
                    <div className={styles.experienceCompanyInfo}>
                      <h3 className={styles.experienceCompanyName}>G-Teach Solution</h3>
                      <p className={styles.experienceRole}>MERN Stack Developer</p>
                    </div>
                    <span className={styles.experienceDates}>2024 – Present</span>
                  </div>
                  <div className={styles.experienceCardBody}>
                    <p className={styles.experienceText}>Contributing to scalable and high-performance web applications while collaborating with a high-performing team to deliver modern business solutions.</p>
                    <div className={styles.experienceTechTags}>
                      <span className={styles.experienceTag}>React</span>
                      <span className={styles.experienceTag}>Node.js</span>
                      <span className={styles.experienceTag}>TypeScript</span>
                      <span className={styles.experienceTag}>PostgreSQL</span>
                      <span className={styles.experienceTag}>AWS</span>
                    </div>
                    <ul className={styles.experienceList}>
                      <li><span className={styles.experienceListIcon}>▹</span>Led feature delivery across React, Node.js, and MongoDB.</li>
                      <li><span className={styles.experienceListIcon}>▹</span>Enabled fast, secure applications for real users.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Skills />
          <Services />
          <Projects />

          {/* Project Album */}
          <div className='mt-5 row'>
            <div className='col-sm-2'></div>
            <div className='col-sm-8 mb-5' style={{ textAlign: 'center' }}>
              <span className={`text-white mt-5 ${styles.servicestext}`}>
                <strong className='p-3 text-uppercase' style={{
                  position: 'relative', top: '-1px',
                  border: '3px solid #3FFF00', borderRadius: '2px',
                }}>
                  project album
                </strong>
              </span>
              <div className='row mt-5'>
                <PhotoAlbum layout='rows' photos={photos} />
              </div>
            </div>
            <div className='col-sm-2 fixed-top' style={{ top: '90%', left: '90%' }}>
              <div className={`${styles.bottomToTop} top-to-btm`}>
                {showTopBtn && (
                  <span className='icon-position icon-style' onClick={goToTop}>
                    <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#3FFF00' className='bi bi-arrow-up-circle-fill' viewBox='0 0 16 16'>
                      <path d='M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z' />
                    </svg>
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <div className='col-sm-12 mt-5 mb-5' style={{ textAlign: 'center' }}>
              <span className={`text-white mt-5 ${styles.servicestext}`}>
                <strong className='p-3 text-uppercase' style={{
                  position: 'relative', top: '-1px',
                  border: '3px solid #3FFF00', borderRadius: '2px',
                }}>
                  Testimonials
                </strong>
              </span>
            </div>
            <ScrollAnimation animateIn='fadeIn' delay='7'>
              <div className='row m-1'>
                <div className='col-sm-2'></div>
                <div className='col-sm-6 row m-2 rounded shadow' style={{ border: '2px solid #3FFF00' }}>
                  <div className='row col-sm-10'>
                    <div className='col-sm-8 row p-2'>
                      <div className='col-sm-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='white' className='bi bi-person-circle mt-1' viewBox='0 0 16 16'>
                          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                          <path fillRule='evenodd' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z' />
                        </svg>
                      </div>
                      <h3 className='text-white col-sm-10 mx-1'>Mr.Imarn__</h3>
                    </div>
                    <p className='text-white p-2'>
                      <em>I am thrilled to write a testimonial for Azam Ali and their outstanding web development services. I had the pleasure of working with Azam Ali on a recent project, and I cannot express enough gratitude for the incredible work they delivered.</em>
                    </p>
                  </div>
                  <div className='col-sm-2 p-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='#3FFF00' className='bi bi-chat-left-quote-fill col-sm-12' viewBox='0 0 16 16'>
                      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z' />
                    </svg>
                  </div>
                </div>
                <div className='col-sm-4'></div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeIn'>
              <div className='row m-1'>
                <div className='col-sm-3'></div>
                <div className='col-sm-6 row m-2 rounded shadow' style={{ border: '2px solid #3FFF00' }}>
                  <div className='row col-sm-10'>
                    <div className='col-sm-8 row p-2'>
                      <div className='col-sm-1'>
                        <svg xmlns='http://www.w3.org/2000/svg' width='28' height='28' fill='white' className='bi bi-person-circle mt-1' viewBox='0 0 16 16'>
                          <path d='M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z' />
                          <path fillRule='evenodd' d='M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z' />
                        </svg>
                      </div>
                      <h3 className='text-white col-sm-10 mx-1'>SKELP __</h3>
                    </div>
                    <p className='text-white p-2'>
                      <em>I am delighted to provide a glowing testimonial for the exceptional web development skills of Azam Ali. Working with Azam Ali has been an absolute pleasure, and I cannot speak highly enough of their talent and professionalism.</em>
                    </p>
                  </div>
                  <div className='col-sm-2 p-2'>
                    <svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' fill='#3FFF00' className='bi bi-chat-left-quote-fill col-sm-12' viewBox='0 0 16 16'>
                      <path d='M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm7.194 2.766a1.688 1.688 0 0 0-.227-.272 1.467 1.467 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 5.734 4C4.776 4 4 4.746 4 5.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.461 2.461 0 0 0-.227-.4zM11 7.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.466 2.466 0 0 0-.228-.4 1.686 1.686 0 0 0-.227-.273 1.466 1.466 0 0 0-.469-.324l-.008-.004A1.785 1.785 0 0 0 10.07 4c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z' />
                    </svg>
                  </div>
                </div>
                <div className='col-sm-3'></div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Contact */}
          <div className='mt-0 row' style={{ background: '#0a0a0f', textAlign: 'center', padding: '15px 0', lineHeight: '1', minHeight: '30vh', overflow: 'hidden' }}>
            <span className={`text-white my-3 ${styles.servicestext}`}>
              <strong className='mb-5 p-2 text-white text-uppercase text-center' style={{
                position: 'relative', top: '0px',
                border: '3px solid #3FFF00', borderRadius: '2px',
              }}>
                Contact Me
              </strong>
            </span>
            <div className='col-sm-12 mb-2'>
              <a href='https://www.facebook.com/profile.php?id=100030632889504&mibextid=ZbWKwL' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='white' className='bi bi-facebook' viewBox='0 0 16 16'>
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
              </a>
              <a href='https://instagram.com/azamali7030?igshid=ZDdkNTZiNTM=' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-instagram' viewBox='0 0 16 16'>
                  <path d='M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z' />
                </svg>
              </a>
              <a href='https://wa.me/+923327387008?text=Hello,%20how%20are%20I%20you%20?%20' className='whatsapp_float' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-whatsapp' viewBox='0 0 16 16'>
                  <path d='M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z' />
                </svg>
              </a>
              <a href='https://www.linkedin.com/in/azam-ali-455402255/' target='_blank' rel='noopener noreferrer'>
                <svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' style={{ margin: '7px' }} fill='white' className='bi bi-linkedin' viewBox='0 0 16 16'>
                  <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                </svg>
              </a>
            </div>
            <div className='col-sm-12'>
              <div>
                <a href='https://wa.me/923327387008' target='_blank' rel='noopener noreferrer' style={{ marginTop: '5px', marginBottom: '5px', background: '#3FFF00', color: '#000', fontWeight: 700, padding: '8px 20px' }} className='rounded'>
                  <span className='text-sm font-bold'>Let's Connect</span>
                </a>
              </div>
              <div style={{ marginTop: '5px', marginBottom: '5px' }}>
                <h6 className='text-white'>aazam7246@gmail.com</h6>
              </div>
              <div>
                <span className='text-white'>Pakistan, Punjab, Rahim Yar Khan.</span>
              </div>
            </div>
            <hr className='text-light mt-5' />
            <div className='footer text-center mt-16 mb-3'>
              <small className='text-white'>Azam Ali © {new Date().getFullYear()}</small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
