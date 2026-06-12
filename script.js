/**
 * Brain Station 23 Replica
 * Interaction Logic (Sticky Scroll, Mobile Hamburger Menu, Accordions, Sliders, Tabs & Counter)
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Scroll-Triggered Sticky Header ---
    const header = document.getElementById('site-header');
    
    if (header) {
        const handleScroll = () => {
            // Add sticky styling after scrolling 20px
            if (window.scrollY > 20) {
                header.classList.add('sticky');
            } else {
                header.classList.remove('sticky');
            }
        };
        
        // Listen to scroll events
        window.addEventListener('scroll', handleScroll);
        // Initial run in case page is refreshed while scrolled
        handleScroll();
    }
    
    // --- 2. Mobile Drawer Open/Close Actions ---
    const mobileToggleBtn = document.querySelector('.mobile-toggle');
    const drawerCloseBtn = document.querySelector('.drawer-close');
    const mobileDrawer = document.getElementById('mobile-drawer');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const body = document.body;
    
    const openDrawer = () => {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.add('active');
            drawerOverlay.classList.add('active');
            body.classList.add('scroll-locked');
        }
    };
    
    const closeDrawer = () => {
        if (mobileDrawer && drawerOverlay) {
            mobileDrawer.classList.remove('active');
            drawerOverlay.classList.remove('active');
            body.classList.remove('scroll-locked');
        }
    };
    
    if (mobileToggleBtn) {
        mobileToggleBtn.addEventListener('click', openDrawer);
    }
    
    if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeDrawer);
    }
    
    if (drawerOverlay) {
        drawerOverlay.addEventListener('click', closeDrawer);
    }
    
    // Close drawer on window resize if screen width exceeds mobile threshold
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 1024) {
            closeDrawer();
        }
    });

    // --- 3. Mobile Drawer Accordion Navigation ---
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');
    
    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            const currentItem = e.currentTarget.parentElement;
            const isAlreadyActive = currentItem.classList.contains('active');
            
            // Close other accordion items to keep UI clean
            const allItems = document.querySelectorAll('.drawer-menu-item.has-accordion');
            allItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // If the clicked item was not active, expand it
            if (!isAlreadyActive) {
                currentItem.classList.add('active');
            }
        });
    });

    // --- 4. Hero Slider Carousel ---
    const slidesWrapper = document.getElementById('hero-slides-wrapper');
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('hero-prev');
    const nextBtn = document.getElementById('hero-next');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 6000; // 6 seconds auto-play

    const updateSlide = (index) => {
        if (!slidesWrapper || slides.length === 0) return;
        
        // Boundaries check
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        // Translate wrapper
        slidesWrapper.style.transform = `translateX(-${currentSlide * 33.333}%)`;

        // Update active classes on slides
        slides.forEach((slide, i) => {
            if (i === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });

        // Update active classes on indicators
        dots.forEach((dot, i) => {
            if (i === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    };

    const startAutoPlay = () => {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            updateSlide(currentSlide + 1);
        }, slideDuration);
    };

    const resetAutoPlay = () => {
        startAutoPlay();
    };

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            updateSlide(currentSlide + 1);
            resetAutoPlay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            updateSlide(currentSlide - 1);
            resetAutoPlay();
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-slide'));
            updateSlide(index);
            resetAutoPlay();
        });
    });

    // Initialize carousel auto-play
    if (slidesWrapper && slides.length > 0) {
        updateSlide(0);
        startAutoPlay();
    }

    // Touch swipe support for mobile
    if (slidesWrapper) {
        let touchStartX = 0;
        let touchEndX = 0;

        slidesWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        slidesWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            const diff = touchStartX - touchEndX;
            if (Math.abs(diff) > 40) { // 40px threshold
                if (diff > 0) {
                    updateSlide(currentSlide + 1); // swipe left → next
                } else {
                    updateSlide(currentSlide - 1); // swipe right → prev
                }
                resetAutoPlay();
            }
        }, { passive: true });
    }

    // --- 5. Technology Stack Tab Filter ---
    const tabBtns = document.querySelectorAll('.tech-tab-btn');
    const tabPanes = document.querySelectorAll('.tech-tab-pane');

    tabBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const targetTab = e.currentTarget.getAttribute('data-tab');

            // Toggle active state of buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');

            // Toggle active state of panes
            tabPanes.forEach((pane) => {
                if (pane.id === `tab-${targetTab}`) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // --- 6. Scroll Triggered Counter Animation ---
    const counterElements = document.querySelectorAll('.count-up');
    
    const animateCounter = (el) => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        const duration = 1500; // 1.5s
        const startTime = performance.now();

        const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            // Ease out quad
            const easeProgress = progress * (2 - progress);
            const currentValue = Math.floor(easeProgress * target);
            el.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = target; // Ensure exact final value
            }
        };

        requestAnimationFrame(step);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target); // Run once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    counterElements.forEach((el) => {
        counterObserver.observe(el);
    });

    // --- 7. Interactive Lead Generation Form ---
    const budgetSlider = document.getElementById('form-budget');
    const budgetValDisp = document.getElementById('budget-value');
    const leadForm = document.getElementById('lead-form');
    const successOverlay = document.getElementById('form-success-msg');
    const successClose = document.getElementById('success-close');

    // Live Budget Slider Updates
    if (budgetSlider && budgetValDisp) {
        budgetSlider.addEventListener('input', (e) => {
            const val = parseInt(e.currentTarget.value, 10);
            if (val >= 100000) {
                budgetValDisp.textContent = '$100,000+';
            } else {
                budgetValDisp.textContent = `$${val.toLocaleString()}`;
            }
        });
    }

    // Validation & Submission Handler
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isFormValid = true;
            const requiredFields = leadForm.querySelectorAll('[required]');

            requiredFields.forEach((field) => {
                const parentGroup = field.closest('.form-group');
                
                // Reset styling
                if (parentGroup) {
                    parentGroup.classList.remove('invalid');
                }

                // Empty Check
                if (!field.value.trim()) {
                    isFormValid = false;
                    if (parentGroup) {
                        parentGroup.classList.add('invalid');
                    }
                } 
                // Email format check
                else if (field.type === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value.trim())) {
                        isFormValid = false;
                        if (parentGroup) {
                            parentGroup.classList.add('invalid');
                        }
                    }
                }
            });

            if (isFormValid) {
                // Show success overlay
                if (successOverlay) {
                    successOverlay.classList.add('active');
                }
            }
        });

        // Interactive error clearance on keydown/input
        const inputs = leadForm.querySelectorAll('input, textarea');
        inputs.forEach((input) => {
            input.addEventListener('input', (e) => {
                const parentGroup = e.currentTarget.closest('.form-group');
                if (parentGroup) {
                    parentGroup.classList.remove('invalid');
                }
            });
        });
    }

    // Success Modal Dismiss
    if (successClose && successOverlay && leadForm) {
        successClose.addEventListener('click', () => {
            successOverlay.classList.remove('active');
            leadForm.reset();
            // Reset budget label value to default
            if (budgetValDisp) {
                budgetValDisp.textContent = '$25,000';
            }
        });
    }

});
