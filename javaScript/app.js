const button = document.querySelector('.button')
const body = document.querySelector('body')
const colorText = document.querySelector('.colorText')
button.addEventListener('click', () =>{

    const values = [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        ]

        function randomColor () {
            let color = '#'
            for(let i =0;i<6;i++){
                let random = Math.floor(Math.random() * values.length)
                color += values[random]
            }
            return color
        }
        let color1 = randomColor()
        let color2 = randomColor()
        
        let  degree = Math.floor(Math.random() * 360)
        let linearColor = `linear-gradient(${degree}deg , ${color1} ,${color2})`
        body.style.background = linearColor
        colorText.textContent = linearColor
})
    


