let heart = document.getElementById('heart');
let tap = document.getElementById('tap');
let i = document.getElementById('i');
let footer = document.getElementById('footer');

function getSize() {
    let width, height, width2, width3, height2;
    
    if (window.innerWidth >= 1025) { 
        // ПК
        width = '40%';  // Зменшена ширина для серця
        width3 = '50%'; // Зменшена ширина при анімації
        height = '100%'; // Зменшена висота для серця
        width2 = '30%';
        height2 = '85%';
    } else if (window.innerWidth >= 600) { 
        // Планшет
        width = '70%';
        height = '100%';
        width3 = '90%';
        width2 = '40%';
        height2 = '95%';
    } else { 
        // Телефон
        width = '95%';
        height = '100%';
        height2 = '95%';
        width3 = '100%';
        width2 = '80%';
    }

    return { width, height, width2, width3, height2 };
}

heart.addEventListener('click', function () {
    tap.style.display = 'none';

    setTimeout(() => {
        let count = 0;
        let interval = setInterval(() => {
            if (count < 6) {
                let { width, height2, width3 } = getSize();

                if (count % 2 === 0) {
                    heart.style.width = width3;
                    heart.style.height = "100%";
                } else {
                    heart.style.width = width;
                    heart.style.height = height2;
                }

                count++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    heart.style.display = 'none';
                    i.style.display = "flex";
                    footer.style.display = "flex";

                    let { width2, height } = getSize();
                    i.style.width = width2;
                    i.style.height = height;
                }, 300); // Затримка, щоб серце плавно зникло перед появою i
            }
        }, 500);
    }, 600);
});
