// Sample works data
const worksData = [
    {
        id: 1,
        title: "Баскетбольный мяч Larsen",
        category: "infographic",
        description: "Официальный размер 2.5 с цепкой резиновой поверхностью. Идеальный выбор для тренировок и игр",
        image: "images/works/work1.jpg"
    },
    {
        id: 2,
        title: "Кроссовки Dunk Low",
        category: "infographic",
        description: "Классические кроссовки в стиле Just Do It. Удобные и стильные для повседневной носки.",
        image: "images/works/work2.jpg"
    },
    {
        id: 3,
        title: "Вишнёвый нектар RioBa",
        category: "infographic",
        description: "Натуральный вишнёвый нектар без красителей и консервантов. Идеальный выбор для любителей свежего и полезного напитка.",
        image: "images/works/work3.jpg"
    },
    {
        id: 4,
        title: "Lipton Peach Tea",
        category: "infographic",
        description: "Освежающий чай Lipton с нежным персиковым вкусом. Упаковка содержит 12 пакетиков для удобного заваривания.",
        image: "images/works/work4.jpg"
    },
    {
        id: 5,
        title: "Ударная дрель ID-90MA",
        category: "infographic",
        description: "Мощная дрель с ударным механизмом (900 Вт). Подходит для ремонта и строительных работ.",
        image: "images/works/work5.jpg"
    },
    {
        id: 6,
        title: "Кухонный стул (Прочность)",
        category: "infographic",
        description: "Надёжный стул для кухни с металлическим основанием и ножками из натурального бука. Выдерживает нагрузку до 100 кг.",
        image: "images/works/work6.jpg"
    },
    {
        id: 7,
        title: "Тушь для ресниц Sibmet",
        category: "infographic",
        description: "Тушь с эффектом удлинения и разделения ресниц. Не осыпается и не оставляет следов.",
        image: "images/works/work7.jpg"
    },
    {
        id: 8,
        title: "Швабра Hauswell с отжимом",
        category: "infographic",
        description: "Удобная швабра с функцией отжима и двумя насадками из микрофибры. Компактный размер и лёгкость в использовании.",
        image: "images/works/work8.jpg"
    },
    {
        id: 9,
        title: "Наушники A.Rooz",
        category: "infographic",
        description: "Беспроводные наушники с чистым звуком, сенсорным управлением и оригинальным дизайном. Компактные и стильные.",
        image: "images/works/work9.jpg"
    },
    {
        id: 10,
        title: "Электросамокат Xiaomi SACHUPO",
        category: "infographic",
        description: "Лёгкий и манёвренный электросамокат с мощным двигателем 13 кВт и запасом хода 12 км. Идеален для городских поездок и коротких дистанций.",
        image: "images/works/work10.jpg"
    },
    {
        id: 11,
        title: "Протеиновое печенье SHOCK DONUT",
        category: "infographic",
        description: "Высокобелковое печенье в удобной упаковке (12 шт). Отличный перекус для спортсменов и тех, кто следит за питанием.",
        image: "images/works/work11.jpg"
    },
    {
        id: 12,
        title: "Смартфон HONOR X7B",
        category: "infographic",
        description: "Стильный и функциональный смартфон с ярким дисплеем и долгим временем работы. Отличный выбор для работы и развлечений.",
        image: "images/works/work12.jpg"
    },
    // Add more works as needed
];

// Initialize gallery
document.addEventListener('DOMContentLoaded', () => {
    const worksGrid = document.querySelector('.works-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = document.getElementById('workModal');
    const modalImage = modal.querySelector('.modal__image');
    const modalTitle = modal.querySelector('.modal__title');
    const modalDescription = modal.querySelector('.modal__description');
    const modalClose = modal.querySelector('.modal__close');
    
    // Render works
    function renderWorks(filter = 'all') {
        worksGrid.innerHTML = '';
        
        const filteredWorks = filter === 'all' 
            ? worksData 
            : worksData.filter(work => work.category === filter);
        
        filteredWorks.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';
            workItem.dataset.category = work.category;
            
            workItem.innerHTML = `
                <div class="work-img-container">
                    <img src="${work.image}" alt="${work.title}" class="work-img" loading="lazy">
                    <div class="work-overlay">
                        <div class="work-info">
                            <h3 class="work-title">${work.title}</h3>
                            <p class="work-category">${work.category === 'infographic' ? 'Инфографика' : 'Визуализация данных'}</p>
                            <button class="view-btn" data-id="${work.id}">Смотреть проект</button>
                        </div>
                    </div>
                </div>
            `;
            
            worksGrid.appendChild(workItem);
        });
        
        // Add event listeners to view buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const workId = parseInt(btn.dataset.id);
                const work = worksData.find(w => w.id === workId);
                
                if (work) {
                    modalImage.src = work.image;
                    modalImage.alt = work.title;
                    modalTitle.textContent = work.title;
                    modalDescription.textContent = work.description;
                    
                    modal.classList.add('active');
                    document.body.classList.add('no-scroll');
                }
            });
        });
    }
    
    // Filter works
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            renderWorks(filter);
        });
    });
    
    // Close modal
    modalClose.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    modal.querySelector('.modal__overlay').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.classList.remove('no-scroll');
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            modal.classList.remove('active');
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Initial render
    renderWorks();
});
