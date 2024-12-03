        const button = document.querySelectorAll('.button')
        const body = document.querySelector('body')

        button.forEach(function (but){
            but.addEventListener('click',function(e){
                if(e.target.id==='grey'){
                    body.style.backgroundColor='grey'  // we can also write e.targer.id
                }
                if(e.target.id==='white'){
                    body.style.backgroundColor=e.target.id
                }
                if(e.target.id==='rgb(51, 7, 147)'){
                    body.style.backgroundColor='pink'
                }
                if(e.target.id==='lightgreen'){
                    body.style.backgroundColor='lightgreen'
                }
                if(e.target.id==='black'){
                    body.style.backgroundColor='rgb(39, 25, 25)'
                    button.style.borderColor = 'white'
                }
                if(e.target.id==='brown'){
                    body.style.backgroundColor='brown'
                }
                if(e.target.id==='purple'){
                    body.style.backgroundColor='rgb(51, 7, 147)'

                }
                if(e.target.id==='blue'){
                    body.style.backgroundColor='blue'
                }
                if(e.target.id==='yellow'){
                    body.style.backgroundColor='yellow'
                }
                if(e.target.id==='pink'){
                    body.style.backgroundColor='rgb(138, 6, 118)'
                }
                
            })            
        })
