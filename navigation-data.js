// navigation-data.js
const navigationData = {
    // Navbar Links
    navLinks: [
        { href: "index.html", text: "Home" },
        { href: "index.html#about", text: "About" },
        { href: "events.html", text: "Events" },
        { href: "index.html#team", text: "Team" },
        { href: "index.html#gallery", text: "Gallery" },
        { href: "index.html#faq", text: "FAQ" },
        { href: "index.html#contact", text: "Contact" }
    ],

    // Hero Section Data

    hero: {
        title: "GeeksforGeeks Campus Body",
        subtitle: "NITRA Technical Campus", 
        description: "Where Code Meets Innovation - Building Tomorrow's Tech Leaders Today",
        buttons: {
            primary: {
                text: "Join Our Coding Revolution",
                action: "joinCommunity"
            },
            secondary: {
                text: "Explore Tech Events", 
                action: "viewEvents"
            }
        },
        stats: [
            { value: "500+", label: "Active Coders" },
            { value: "50+", label: "Tech Events" },
            { value: "25+", label: "Expert Workshops" }
        ]
    },

    about: {
        title: "About GFG Campus Body",
        description: "GeeksforGeeks Campus Body at NITRA Technical Campus is an elite technical community established in 2025 under the prestigious GeeksforGeeks Campus Program, spearheaded by Vaibhav Babele. As an official campus chapter founded through dedicated efforts and strategic planning, we are committed to creating a vibrant coding ecosystem that transforms students into industry-ready professionals through hands-on learning, competitive programming, and real-world project development. Under Vaibhav's leadership, our community has grown into a premier platform for technical excellence and innovation at NITRA.",
        features: [
            {
                icon: "fas fa-laptop-code",
                title: "Competitive Programming",
                description: "Weekly coding contests, DSA practice sessions, and preparation for ICPC, Google Code Jam, and other premier coding competitions"
            },
            {
                icon: "fas fa-users", 
                title: "Technical Workshops",
                description: "Comprehensive workshops on Web Development (MERN Stack), Android Development, AI/ML, Cloud Computing, and cutting-edge technologies"
            },
            {
                icon: "fas fa-gem",
                title: "Hackathons & Innovation",
                description: "48-hour hackathons, buildathons, and innovation challenges to solve real-world problems and build impactful projects"
            },
            {
                icon: "fas fa-chalkboard-teacher",
                title: "Expert Mentorship",
                description: "Guidance from industry professionals, GFG experts, and senior developers for career growth and technical excellence"
            },
            {
                icon: "fas fa-project-diagram",
                title: "Project Development",
                description: "Collaborative projects, open-source contributions, and portfolio building with modern tech stacks and best practices"
            },
            {
                icon: "fas fa-network-wired",
                title: "Industry Connect",
                description: "Networking sessions, placement preparation, and connections with top tech companies for internship and job opportunities"
            }
        ],
        
        logos: [
            {
                image: "assets/gfg.png",
                alt: "GeeksforGeeks Logo",
                name: "GeeksforGeeks",
                description: "World's leading platform for computer science education, coding practice, and interview preparation with 10M+ users worldwide"
            },
            {
                image: "assets/ntc.png", 
                alt: "NITRA Technical Campus Logo",
                name: "NITRA Technical Campus",
                description: "Premier technical institution in Ghaziabad known for academic excellence, industry partnerships, and state-of-the-art infrastructure"
            },
            {
                image: "assets/gfgcampus.png",
                alt: "Campus Body Logo", 
                name: "GFG Campus Body NITRA",
                description: "Official GeeksforGeeks Student Community driving technical innovation and coding culture at NITRA Technical Campus"
            }
        ]
    },

    // Team Section Data

    team: {
        title: "Our Team",
        subtitle: "Get to Know the Brilliant Minds Behind Our Coding Revolution - From Core Team to Tech Mavericks",filters: [
            { id: "all", text: "All Members" },
            { id: "core", text: "Core Team" },
            { id: "tech", text: "Tech Team" },
            { id: "design", text: "Design Team" }
        ]
    },

    // Gallery Section Data

    gallery: {
        title: "Gallery",
        subtitle: "Relive the most memorable moments from our tech journey - coding marathons that tested limits, workshops that sparked innovation, hackathons that built solutions, and celebrations that strengthened our developer community.",
        filters: [
            { id: "all", text: "All" },
            { id: "coding", text: "Coding Events" },
            { id: "workshop", text: "Workshops" },
            { id: "hackathon", text: "Hackathons" },
            { id: "meetup", text: "Meetups" }
        ]
    },

    // FAQ Section Data
    faq: {
        title: "Frequently Asked Questions",
        subtitle: "Get all your queries answered about joining GFG Campus Body, event participation, membership benefits, technical requirements, and community guidelines in one place",
        contactText: "Haven't found what you're looking for? Our team is always ready to help! Reach out to us directly through our <a href=\"#contact\">contact section</a> and we'll get back to you within 24 hours."
        },

    // Contact Section Data
    contact: {
    title: "Get In Touch With Us",
    subtitle: "Have questions about joining our community, want to collaborate on events, need technical guidance, or interested in partnership opportunities? We're here to help and excited to connect with fellow coders, innovators, and tech enthusiasts!",
    
    contactInfo: {
        title: "Reach Out to Our Team",
        description: "Prefer direct communication? Here are the best ways to connect with GFG Campus Body leadership:",
        details: [
            {
                icon: "fas fa-envelope",
                title: "Primary Email",
                text: "gfgntcg@gmail.com",
                link: "mailto:gfgntcg@gmail.com",
                linkText: "Send us an Email",
                description: "For general inquiries, membership questions, and collaboration proposals"
            },
            {
                icon: "fas fa-user-tie",
                title: "Campus Lead", 
                text: "Vaibhav Babele",
                link: "mailto:vaibhavbabele15@example.com",
                linkText: "Contact Campus President",
                description: "Direct contact for strategic partnerships and leadership opportunities"
            },
            {
                icon: "fas fa-map-marker-alt",
                title: "Campus Address", 
                text: "NITRA Technical Campus<br>Ghaziabad, Uttar Pradesh - 201001",
                link: "https://maps.google.com/?q=NITRA+Technical+Campus+Ghaziabad",
                linkText: "Get Directions",
                target: "_blank",
                description: "Visit us during college hours for direct interaction"
            },
            {
                icon: "fas fa-phone-alt",
                title: "Emergency Contact",
                text: "+91 98765 43210",
                link: "tel:+919876543210",
                linkText: "Call Now",
                description: "For urgent event-related queries and immediate assistance"
            }
        ]
    },
    
    socialLinks: {
        title: "Join Our Digital Community",
        description: "Stay updated with our latest events, coding resources, and community announcements:",
        links: [
            {
                href: "https://www.linkedin.com/in/geeksforgeeks-ntc/",
                icon: "fab fa-linkedin-in",
                platform: "LinkedIn",
                description: "Professional network and industry updates"
            },
            {
                href: "https://www.instagram.com/geeksforgeeks_ntc/", 
                icon: "fab fa-instagram",
                platform: "Instagram",
                description: "Event highlights and community stories"
            },
            {
                href: "https://github.com/gfgntc",
                icon: "fab fa-github", 
                platform: "GitHub",
                description: "Open-source projects and code resources"
            },
            {
                href: "https://chat.whatsapp.com/KmXvP5I1j9e4p6t7kx1xnc",
                icon: "fab fa-whatsapp",
                platform: "WhatsApp",
                description: "Instant community discussions and updates"
            },
            {
                href: "https://t.me/gfgntc",
                icon: "fab fa-telegram",
                platform: "Telegram",
                description: "Technical discussions and coding help"
            }
        ]
    },
    
    contactForm: {
        title: "Send Us a Detailed Message",
        description: "Fill out the form below and we'll get back to you within 24 hours:",
        fields: [
            {
                type: "text",
                id: "name",
                label: "Full Name *",
                placeholder: "Enter your full name",
                required: true
            },
            {
                type: "email", 
                id: "email",
                label: "Email Address *",
                placeholder: "your.email@example.com",
                required: true
            },
            {
                type: "text",
                id: "college_id", 
                label: "College ID",
                placeholder: "NITRA/2024/XXX",
                required: false
            },
            {
                type: "select",
                id: "query_type",
                label: "Query Type *",
                options: [
                    { value: "membership", text: "Membership Inquiry" },
                    { value: "event", text: "Event Participation" },
                    { value: "workshop", text: "Workshop Registration" },
                    { value: "collaboration", text: "Collaboration Proposal" },
                    { value: "technical", text: "Technical Help" },
                    { value: "other", text: "Other" }
                ],
                required: true
            },
            {
                type: "textarea",
                id: "message",
                label: "Detailed Message *", 
                placeholder: "Please describe your query in detail...",
                required: true,
                rows: 5
            }
        ],
        submitText: "Send Message to GFG Team",
        loadingText: "Sending your message...",
        successMessage: "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
        errorMessage: "Sorry, there was an error sending your message. Please try again or contact us directly via email."
    },
    
    responseInfo: {
        title: "What Happens Next?",
        points: [
            "You'll receive an automatic confirmation email immediately",
            "Our team reviews your message within 2-4 hours",
            "We respond to all queries within 24 hours maximum",
            "For urgent matters, use the emergency contact number"
        ]
    },
    
    mapSection: {
        title: "Visit Our Campus",
        description: "Come meet us in person at our tech hub in NITRA Technical Campus:",
        placeholder: {
            icon: "fas fa-map-marked-alt",
            text: "NITRA Technical Campus - GFG Hub", 
            link: "https://maps.google.com/?q=NITRA+Technical+Campus+Ghaziabad",
            linkText: "Open in Google Maps for Directions"
        }
    }
},


    // Footer Data
    footer: {
        brand: {
            logo: "GFGNTC",
            name: "Gfg NITRA",
            description: "GeeksforGeeks Campus Body at NITRA Technical Campus - Empowering coders and building a strong developer community."
        },
        quickLinks: [
            { href: "index.html", text: "Home" },
            { href: "index.html#about", text: "About Us" },
            { href: "events.html", text: "Events" },
            { href: "index.html#team", text: "Our Team" },
            { href: "index.html#gallery", text: "Gallery" }
        ],
        resources: [
            { href: "index.html#faq", text: "FAQ" },
            { href: "index.html#contact", text: "Contact" },
            { href: "https://www.geeksforgeeks.org/", text: "GFG Portal", target: "_blank" },
            { href: "https://practice.geeksforgeeks.org/", text: "Practice", target: "_blank" },
            { href: "https://www.geeksforgeeks.org/courses", text: "Courses", target: "_blank" }
        ],
        socialLinks: [
            { href: "https://www.linkedin.com/in/geeksforgeeks-ntc/", icon: "fab fa-linkedin-in", platform: "LinkedIn" },
            { href: "https://github.com/gfgntc", icon: "fab fa-github", platform: "GitHub" },
            { href: "https://www.instagram.com/geeksforgeeks_ntc/", icon: "fab fa-instagram", platform: "Instagram" },
            { href: "https://chat.whatsapp.com/KmXvP5I1j9e4p6t7kx1xnc", icon: "fab fa-whatsapp", platform: "WhatsApp" },
            { href: "mailto:gfgntcg@gmail.com", icon: "fas fa-envelope", platform: "Email" }
        ],
        contactInfo: [
            { icon: "fas fa-map-marker-alt", text: "NITRA Technical Campus, Ghaziabad" },
            { icon: "fas fa-envelope", text: "gfgntcg@gmail.com", href: "mailto:gfgntcg@gmail.com" },
            { icon: "fas fa-globe", text: "www.gfgcampusnitra.com", href: "#" }
        ],
        legalLinks: [
            { href: "#", text: "Privacy Policy" },
            { href: "#", text: "Terms of Service" }
        ]
    },

    // Action Links
    actionLinks: {
    joinCommunity: "https://chat.whatsapp.com/KmXvP5I1j9e4p6t7kx1xnc",
    registerEvent: "https://forms.gle/your-actual-form-link",
    contactEmail: "mailto:gfgntcg@gmail.com",
    linkedin: "https://www.linkedin.com/in/geeksforgeeks-ntc/",
    instagram: "https://www.instagram.com/geeksforgeeks_ntc/",
    github: "https://github.com/gfgntc",
    telegram: "https://t.me/gfgntc"
    }
};