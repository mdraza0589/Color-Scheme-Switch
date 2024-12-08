        const button = document.querySelectorAll('.button')
        const body = document.querySelector('body')
        const colorname = document.getElementById('colorname');

        button.forEach(function (but){
            but.addEventListener('click',function(e){

                if(e.target.id==='grey'){
                    body.style.backgroundColor='grey'  // we can also write e.targer.id
                    body.style.color='white'
                    colorname.innerText = 'grey'
                }
                else if(e.target.id==='white'){
                    body.style.color='black'
                    body.style.backgroundColor=e.target.id
                    colorname.innerText = 'White'
                }
                else if(e.target.id==='rgb(51, 7, 147)'){
                    body.style.backgroundColor='pink'
                    body.style.color='white'
                    colorname.innerText = 'pink'
                }
                else if(e.target.id==='lightgreen'){
                    body.style.backgroundColor='lightgreen'
                    body.style.color='black'
                    colorname.innerText = 'lightgreen'
                }
                else if(e.target.id==='black'){
                    body.style.backgroundColor='black'
                    body.style.color='white'
                    colorname.innerText = 'black'
                }
                else if(e.target.id==='brown'){
                    body.style.backgroundColor='brown'
                    body.style.color='white'
                    colorname.innerText = 'brown'
                }
                else if(e.target.id==='purple'){
                    body.style.backgroundColor='rgb(51, 7, 147)'
                    body.style.color='white'
                    colorname.innerText = 'purple'
                    
                }
                else if(e.target.id==='blue'){
                    body.style.backgroundColor='blue'
                    body.style.color='white'
                    colorname.innerText = 'blue'
                }
                else if(e.target.id==='yellow'){
                    body.style.backgroundColor='yellow'
                    body.style.color='black'
                    colorname.innerText = 'yellow'
                }
                else if(e.target.id==='pink'){
                    body.style.backgroundColor='rgb(138, 6, 118)'
                    body.style.color='white'
                    colorname.innerText = 'pink'
                }
                
            })            
        })
