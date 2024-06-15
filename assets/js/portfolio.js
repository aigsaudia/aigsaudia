document.addEventListener('DOMContentLoaded', function() {
    const portfolioSection = document.getElementById('portfolio-section');

    const portfolioItems = [
        {
            id: 1,
            title: "Project 1",
            image: "path/to/image1.jpg",
            description: "Description for Project 1",
            link: "https://example.com/project1"
        },
        {
            id: 2,
            title: "Project 2",
            image: "path/to/image2.jpg",
            description: "Description for Project 2",
            link: "https://example.com/project2"
        },
        {
            id: 3,
            title: "Project 3",
            image: "path/to/image3.jpg",
            description: "Description for Project 3",
            link: "https://example.com/project3"
        },
        {
            id: 4,
            title: "Project 3",
            image: "path/to/image3.jpg",
            description: "Description for Project 3",
            link: "https://example.com/project3"
        },
        {
            id: 5,
            title: "Project 3",
            image: "path/to/image3.jpg",
            description: "Description for Project 3",
            link: "https://example.com/project3"
        },
        {
            id: 6,
            title: "Project 3",
            image: "path/to/image3.jpg",
            description: "Description for Project 3",
            link: "https://example.com/project3"
        }
    ];

    function createPortfolioItem(item) {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';

        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.title;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        const link = document.createElement('a');
        link.href = `portfolio-detail.html?id=${item.id}`;
        link.textContent = 'View Project';
        link.className = 'bx bx-link';

        portfolioItem.appendChild(img);
        portfolioItem.appendChild(title);
        portfolioItem.appendChild(description);
        portfolioItem.appendChild(link);

        return portfolioItem;
    }

    portfolioItems.forEach(item => {
        const portfolioItem = createPortfolioItem(item);
        portfolioSection.appendChild(portfolioItem);
    });
});
