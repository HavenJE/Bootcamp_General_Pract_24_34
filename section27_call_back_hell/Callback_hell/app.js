setTimeout(()=>{
    document.body.style.backgroundColor = 'green';
    setTimeout(()=>{
        document.body.style.backgroundColor = 'blue';
        setTimeout(()=>{
            document.body.style.backgroundColor = 'green';
        }, 1000)
    }, 1000)
}, 1000)
