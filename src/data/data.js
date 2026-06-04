e// ==========================================
// 1. THÔNG TIN CÁ NHÂN & GIỚI THIỆU
// ==========================================
export const about = {
    name: "Lữ Xuân Tú",
    role: "Đại Ca",
    email: "contact@tuapi.dev",
    avatar: "/avatar.jpg", // Nên thêm ảnh đại diện để giao diện sống động hơn
    bio: "Một mẫu portfolio tối giản, hiện đại và tinh tế được xây dựng trên nền tảng Next.js. Giải pháp hoàn hảo cho các nhà phát triển muốn khẳng định thương hiệu cá nhân chuyên nghiệp mà không rườm rà, phức tạp.",
};

// ==========================================
// 2. CẤU HÌNH SEO GIÚP TĂNG THỨ HẠNG GOOGLE
// ==========================================
export const seo = {
    title: `${about.name} | ${about.role}`,
    description: "Mẫu portfolio Next.js tối giản, mượt mà dành cho lập trình viên muốn xây dựng không gian trực tuyến chuyên nghiệp và tinh gọn.",
    keywords: ["portfolio", "lập trình viên", "web developer", "Next.js", "tạo portfolio", "tối giản", "Lữ Xuân Tú"],
    url: "https://tuapi.dev", // Đường dẫn trang web của bạn
    ogImage: "/og-image.jpg",  // Ảnh hiển thị khi chia sẻ link lên Facebook/Zalo
}

// ==========================================
// 3. CẤU HÌNH HÒM THƯ LIÊN HỆ
// ==========================================
export const forms = {
    formspreeUrl: "https://formspree.io/f/<url>",
}

// ==========================================
// 4. KỸ NĂNG CÔNG NGHỆ (SKILLS)
// ==========================================
export const skills = [
    { name: "HTML5", alt: "HTML5 Logo", icon: "/icons/html.svg" },
    { name: "CSS3", alt: "CSS3 Logo", icon: "/icons/css.svg" },
    { name: "JavaScript", alt: "JavaScript Logo", icon: "/icons/js.svg" },
    { name: "Tailwind CSS", alt: "Tailwind CSS Logo", icon: "/icons/tailwind.svg" },
    { name: "React.js", alt: "React.js Logo", icon: "/icons/react.svg" },
    { name: "Next.js", alt: "Next.js Logo", icon: "/icons/nextjs.svg" },
];

// ==========================================
// 5. MẠNG XÃ HỘI (Cấu trúc lại để dễ render bằng .map)
// ==========================================
export const socials = [
    {
        name: "Facebook",
        url: "https://www.facebook.com/share/18gRh7Xb21/?mibextid=wwXIfr",
        icon: "/icons/facebook.svg"
    },
    {
        name: "GitHub",
        url: "https://github.com/luxuantu", // Thay bằng link github thực tế của bạn
        icon: "/icons/github.svg"
    },
    {
        name: "LinkedIn",
        url: "https://linkedin.com/in/luxuantu", // Thay bằng link linkedin thực tế của bạn
        icon: "/icons/linkedin.svg"
    }
];

// ==========================================
// 6. DỰ ÁN (PROJECTS)
// ==========================================
export const projects = {
    // Dự án tiêu biểu hiển thị ở vị trí ghim đầu trang
    featured: [
        {
            title: "E-Commerce High-Performance",
            description: "Hệ thống cửa hàng trực tuyến tốc độ cao với đầy đủ tính năng giỏ hàng, bộ lọc sản phẩm và quy trình thanh toán tối ưu, mang lại trải nghiệm mua sắm vượt trội.",
            tags: ["Next.js", "Tailwind CSS", "Redux"],
            github: "https://github.com/...",
            demo: "https://..."
        },
        {
            title: "Minimalist Developer Blog",
            description: "Nền tảng blog tối giản tích hợp bộ lọc danh mục thông minh và giao diện đọc bài thân thiện. Không gian hoàn hảo để chia sẻ kiến thức và ý tưởng sáng tạo.",
            tags: ["React.js", "Markdown", "CSS Modules"],
            github: "https://github.com/...",
            demo: "https://..."
        },
        {
            title: "Creative Portfolio Concept",
            description: "Trang portfolio cá nhân hiện đại giúp nâng tầm thương hiệu và trình diễn kỹ năng. Thiết kế responsive tối ưu, hiệu ứng chuyển trang mượt mà và chuẩn SEO.",
            tags: ["Next.js", "Framer Motion", "Tailwind"],
            github: "https://github.com/...",
            demo: "https://..."
        },
    ],
    // Các dự án phụ/khác
    others: [
        {
            title: "Task Management App",
            description: "Ứng dụng quản lý công việc hàng ngày với giao diện Kanban trực quan, hỗ trợ kéo thả và đặt lịch nhắc nhở.",
            tags: ["JavaScript", "LocalDB"],
            github: "https://github.com/...",
            demo: ""
        },
        {
            title: "Weather Forecast Dashboard",
            description: "Ứng dụng dự báo thời tiết real-time tích hợp API OpenWeatherMap, hiển thị biểu đồ nhiệt độ trực quan.",
            tags: ["React.js", "Chart.js"],
            github: "https://github.com/...",
            demo: ""
        }
    ],
};

// ==========================================
// 7. KINH NGHIỆM LÀM VIỆC (EXPERIENCE)
// ==========================================
export const experience = [
    {
        role: "Frontend Developer",
        company: "Tech Solutions",
        duration: "01/2024 - Hiện tại",
        description: "Chịu trách nhiệm phát triển và tối ưu hóa các ứng dụng web real-time bằng React.js và Next.js. Nâng cao hiệu năng giao diện (UI) và cải thiện đáng kể trải nghiệm người dùng (UX).",
    },
    {
        role: "Web Developer Intern",
        company: "Creative Studio",
        duration: "06/2023 - 12/2023",
        description: "Tham gia thiết kế layout website, xây dựng mã nguồn HTML/CSS chuẩn chỉnh và phối hợp cùng đội ngũ phát triển các tính năng JavaScript cho các dự án của khách hàng.",
    },
    {
        role: "Junior Developer",
        company: "Innovate Labs",
        duration: "09/2022 - 05/2023",
        description: "Phát triển và kiểm thử các component frontend, tối ưu hóa tốc độ tải trang, đồng thời tích cực tham gia review code và giải quyết các lỗi hệ thống.",
    },
];

// ==========================================
// 8. BÀI VIẾT / BLOG
// ==========================================
export const blogs = [
    {
        title: "Bản chất của React Hooks: Hiểu sâu trong 5 phút",
        excerpt: "Khám phá cách React Hooks vận hành dưới "under the hood" và những lưu ý quan trọng để tránh re-render thừa.",
        date: "12/03/2025",
        slug: "understanding-react-hooks",
    },
    {
        title: "CSS Grid vs Flexbox: Lựa chọn nào tối ưu cho layout của bạn?",
        excerpt: "So sánh chi tiết hai tư duy dàn trang phổ biến nhất trong CSS hiện đại thông qua các case-study thực tế.",
        date: "25/12/2024",
        slug: "css-grid-vs-flexbox",
    },
    {
        title: "Bí kíp tối ưu SEO toàn diện cho ứng dụng Next.js",
        excerpt: "Hướng dẫn từng bước cấu hình Meta Tags, Sitemap, Robots.txt và tối ưu Core Web Vitals chuẩn chỉnh nhất.",
        date: "10/07/2024",
        slug: "nextjs-seo-best-practices",
    },
];
