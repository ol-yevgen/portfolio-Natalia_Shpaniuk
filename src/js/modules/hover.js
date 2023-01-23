export function hoverEffect() {
    const selector = document.querySelector('select');
    const autoTyped = document.querySelector('.auto_typed');

    if (window.matchMedia("(min-width: 767px)").matches) {
        document.addEventListener('DOMContentLoaded', () => {
            const sliderImgWrapper = document.querySelectorAll('.picture');
    
            const sliderTextWrapper = document.createElement('div');
            const sliderText = document.createElement('p');
    
            sliderTextWrapper.classList.add('image-slider__text');
    
            if (autoTyped.classList.contains('auto_typed-ua')) {
                sliderText.innerText = 'Детальніше';
            } else {
                sliderText.innerText = 'Tap to read more';
            }
    
            selector.addEventListener('change', () => {
                let langChange = selector.value;
                if (langChange !== 'ua') {
                    sliderText.innerText = 'Tap to read more';
                } else {
                    sliderText.innerText = 'Детальніше';
                }
            })
            
            sliderImgWrapper.forEach(img => {
                img.addEventListener('mouseover', (e) => {
                    let target = e.target;
    
                    target.parentNode.appendChild(sliderTextWrapper);
                    sliderTextWrapper.appendChild(sliderText);
    
                    target.style.opacity = '.1';
                })
    
                img.addEventListener('mouseout', (e) => {
                    let target = e.target;
    
                    target.parentNode.removeChild(sliderTextWrapper);
    
                    target.style.opacity = '1';
                })
            })
        })
    }

    

}