`Utilizing DOM element for showing Numbers in the screen `
let count = document.querySelector('#countdown');

`Using callback changing the numbers in the screen`
setTimeout(()=>{
    count.innerText = 10;
    return setTimeout(()=>{
        count.innerText = 9;
        return setTimeout(()=>{
            count.innerText = 8;
            return setTimeout(()=>{
                count.innerText = 7;
                return setTimeout(()=>{
                    count.innerText = 6;
                    return setTimeout(()=>{
                        count.innerText = 5;
                        return setTimeout(()=>{
                            count.innerText = 4;
                            return setTimeout(()=>{
                                count.innerText = 3;
                                return setTimeout(()=>{
                                    count.innerText = 2;
                                    return setTimeout(()=>{
                                        count.innerText = 1;
                                        return setTimeout(()=>{
                                            count.innerText = "Happy Independance Day";
                                            count.style.cssText += `font-size: 2em;     
                                            box-shadow:
                                                inset 0 0 50px #fff,
                                                inset 20px 0 80px rgb(255, 60, 0),
                                                inset -20px 0 80px rgb(255, 145, 0),
                                                inset 20px 0 300px rgb(255, 60, 0),
                                                inset -20px 0 300px rgb(255, 145, 0),
                                                0 0 50px #fff,
                                                -10px 0 80px rgb(255, 60, 0),
                                                10px 0 80px rgb(255, 145, 0); `
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)
