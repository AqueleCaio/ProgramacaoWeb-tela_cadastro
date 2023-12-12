$('#iemail').click((e) =>{   
    e.preventDefault()
    $('#linha01').addClass('linha_destaque')
})

$('#iemail').blur((e) =>{
    e.preventDefault()
    $('#linha01').removeClass('linha_destaque')
})

/* ******************************************************* */

$('#inome').click((e) =>{
    e.preventDefault()
    $('#linha02').addClass('linha_destaque')
})

$('#inome').blur((e) =>{
    e.preventDefault()
    $('#linha02').removeClass('linha_destaque')
})

/* ******************************************************* */

$('#iusername').click((e) =>{
    e.preventDefault()
    $('#linha03').addClass('linha_destaque')
})

$('#iusername').blur((e) =>{
    e.preventDefault()
    $('#linha03').removeClass('linha_destaque')
})

/* ******************************************************* */

$('#isenha').click((e) => {
    e.preventDefault()
    $('#linha04').addClass('linha_destaque')
})

$('#isenha').blur((e) => {
    e.preventDefault()
    $('#linha04').removeClass('linha_destaque')
})