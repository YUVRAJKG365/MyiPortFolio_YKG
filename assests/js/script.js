const initSwiper = () => {
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        loop: false,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        breakpoints: {
            576: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        },
        // Enable iOS edge swipe detection
        edgeSwipeDetection: true,
        edgeSwipeThreshold: 20,
        // Better touch support
        touchStartPreventDefault: false,
        touchRatio: 0.5,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        preventInteractionOnTransition: true,
        on: {
            init: function() {
                // Make ALL slides visible on init
                this.slides.forEach(slide => {
                    slide.style.opacity = 1;
                    slide.style.transform = 'translateY(0)';
                });
            },
            slideChange: function() {
                // Keep ALL slides visible during navigation
                this.slides.forEach(slide => {
                    slide.style.opacity = 1;
                    slide.style.transform = 'translateY(0)';
                });
            }
        }
    });

    // Force Swiper to update on resize
    window.addEventListener('resize', () => {
        swiper.update();
    });

    // Click event for certification cards
    document.querySelectorAll('.certification-card').forEach(card => {
        card.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            if (modalId) {
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.style.display = 'block';
                    document.body.style.overflow = 'hidden';
                }
            }
        });
    });
};


    // Handle modal close events
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    });

    // Close modal when clicking outside content
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

        // Mobile Navigation
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');
        
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.innerHTML = navLinks.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Scroll Indicator
        const scrollIndicator = document.getElementById('scrollIndicator');
        
        window.addEventListener('scroll', () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollProgress = (scrollTop / scrollHeight) * 100;
            scrollIndicator.style.width = `${scrollProgress}%`;
        });
        
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                fab.classList.add('active');
            } else {
                fab.classList.remove('active');
            }
        });
        
        // Modal Functionality
        const viewResumeBtn = document.getElementById('viewResumeBtn');
        const resumeModal = document.getElementById('resumeModal');
        const closeResumeModal = document.getElementById('closeResumeModal');
        const closeResumeModalBtn = document.getElementById('closeResumeModalBtn');
        
        viewResumeBtn.addEventListener('click', () => {
            resumeModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
        
        closeResumeModal.addEventListener('click', () => {
            resumeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        closeResumeModalBtn.addEventListener('click', () => {
            resumeModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        // Generic modal handling
        document.querySelectorAll('[data-modal]').forEach(element => {
            element.addEventListener('click', () => {
                const modalId = element.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
        });
        
        document.querySelectorAll('.close-modal').forEach(closeBtn => {
            closeBtn.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
        
        // Close modal when clicking outside content
        window.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        // Enhanced Modal Handling for Certificates
        function enhanceModals() {
            // Add close button functionality
            document.querySelectorAll('.close-modal').forEach(btn => {
            btn.addEventListener('click', function() {
                this.closest('.modal').style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target.classList.contains('modal')) {
                e.target.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    
        // Responsive iframe resizing
        window.addEventListener('resize', function() {
            document.querySelectorAll('.certificate-box iframe').forEach(iframe => {
                iframe.style.height = (window.innerWidth < 768) ? '250px' : '300px';
            });
        });
    }

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        initTextMorphing();
        enhanceModals();
        initSwiper();
    
        // Add animation delays for skill tags
        document.querySelectorAll('.skill-tag').forEach((tag, index) => {
            tag.style.animationDelay = `${index * 0.1}s`;
        });
    });
        
        // Contact Form Submission
        const contactForm = document.getElementById('contactForm');
        const formStatus = document.getElementById('formStatus');

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
    
            // Set reply-to email
            document.getElementById('replyTo').value = document.getElementById('email').value;
    
            const formData = new FormData(contactForm);
    
            try {
                formStatus.textContent = 'Sending message...';
                formStatus.style.color = 'var(--text-color)';
        
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
        
                if (response.ok) {
                    formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                    formStatus.style.color = 'lightgreen';
                    contactForm.reset();
                } else {
                    throw new Error('Form submission failed');
                }
            } catch (error) {
                formStatus.textContent = 'Oops! There was a problem sending your message. Please try again later.';
                formStatus.style.color = '#ff6b6b';
                console.error('Error:', error);
            }
        });
        
        // Intersection Observer for animations
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.section-title, .about-img, .about-text, .skill-tag, .skill-card, .timeline-item, .experience-card, .project-card, .certification-card, .contact-item, .open-to-work-card,.contact-form');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('section-title')) {
                            entry.target.classList.add('animate');
                        } 
                        else if (entry.target.classList.contains('about-img')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('about-text')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('skill-tag')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('skill-card')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('timeline-item')) {
                            if (entry.target.classList.contains('left')) {
                                entry.target.classList.add('animate-left');
                            } else {
                                entry.target.classList.add('animate-right');
                            }
                        }
                        else if (entry.target.classList.contains('experience-card')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('project-card')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('certification-card')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('contact-item')) {
                            entry.target.classList.add('animate');
                        }
                        else if (entry.target.classList.contains('open-to-work-card') || 
                                entry.target.classList.contains('contact-form')) {
                                entry.target.classList.add('animate');
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });
            
            elements.forEach(element => {
                observer.observe(element);
            });
        };
        
        // Initialize animations when DOM is loaded
        document.addEventListener('DOMContentLoaded', () => {
            animateOnScroll();
            
            // Add animation delays for skill tags
            document.querySelectorAll('.skill-tag').forEach((tag, index) => {
                tag.style.animationDelay = `${index * 0.1}s`;
            });
            
            // Add animation delays for contact items
            document.querySelectorAll('.contact-item').forEach((item, index) => {
                item.style.animationDelay = `${index * 0.1}s`;
            });
        });
        
        // iOS Viewport Height Fix
        const setViewportHeight = () => {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        };
        
        window.addEventListener('resize', setViewportHeight);
        setViewportHeight();
        

        // Text morphing animation
function initTextMorphing() {
    const textMorphElements = document.querySelectorAll('.text-morph');
    
    textMorphElements.forEach(element => {
        const texts = JSON.parse(element.getAttribute('data-texts'));
        let currentIndex = 0;
        let currentText = '';
        let isDeleting = false;
        let typingSpeed = 150;
        
        function type() {
            const fullText = texts[currentIndex];
            
            if (isDeleting) {
                currentText = fullText.substring(0, currentText.length - 1);
            } else {
                currentText = fullText.substring(0, currentText.length + 1);
            }
            
            element.textContent = currentText;
            
            if (!isDeleting && currentText === fullText) {
                typingSpeed = 1000;
                isDeleting = true;
            } else if (isDeleting && currentText === '') {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % texts.length;
                typingSpeed = 150;
            } else {
                typingSpeed = isDeleting ? 50 : 150;
            }
            
            setTimeout(type, typingSpeed);
        }
        
        type();
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll(
        '.skill-card, .project-card, .certification-card, ' +
        '.experience-card, .timeline-content, ' +
        '.open-to-work-card, .contact-form'
    );
    
    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('card-visible');
                // Optional: Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe all cards
    cards.forEach(card => {
        observer.observe(card);
    });
});
