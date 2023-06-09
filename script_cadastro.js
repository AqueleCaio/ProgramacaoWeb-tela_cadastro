const botao_cadastrar = document.getElementById('cadastrar')

const input_email = document.getElementById('iemail')
const input_nome = document.getElementById('inome')
const input_username = document.getElementById('iusername')
const input_senha = document.getElementById('isenha')

const linha1 = document.getElementById('linha01')
const linha2 = document.getElementById('linha02')
const linha3 = document.getElementById('linha03')
const linha4 = document.getElementById('linha04')

/* ******************************************************* */

input_email.addEventListener('click', function(e){
    e.preventDefault()
    linha1.classList.add('linha_destaque')
    
})

input_email.addEventListener('blur', function(e){
    e.preventDefault()
    linha1.classList.remove('linha_destaque')
    
})

/* ******************************************************* */

input_nome.addEventListener('click', function(e){
    e.preventDefault()
    linha2.classList.add('linha_destaque')
    
})

input_nome.addEventListener('blur', function(e){
    e.preventDefault()
    linha2.classList.remove('linha_destaque')
    
})

/* ******************************************************* */

input_username.addEventListener('click', function(e){
    e.preventDefault()
    linha3.classList.add('linha_destaque')
    
})

input_username.addEventListener('blur', function(e){
    e.preventDefault()
    linha3.classList.remove('linha_destaque')
    
})

/* ******************************************************* */


input_senha.addEventListener('click', function(e){
    e.preventDefault()
    linha4.classList.add('linha_destaque')
    
})

input_senha.addEventListener('blur', function(e){
    e.preventDefault()
    linha4.classList.remove('linha_destaque')
    
})

/* ******************************************************* */


/*
botao_cadastrar.addEventListener('click', function(e){
    e.preventDefault()
    window.location.href = "#"; //link para página principal.
});
*/