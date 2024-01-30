//menu
$('.menu a').click(function(e){
    e.preventDefault();
    id = $(this).attr('href');
    targetOffset = $(id).offset().top;
    console.log(targetOffset)
})
$('.menu a[key=hab').click(function(){
})


//habilidades
$(()=>{
    $('.icon_descricao').click(function(){
        $('.icon_descricao h3').html('Ola');
        $('.icon_descricao p').html('Aqui está listado meus conhecimentos Web e linguagens de programação.');
        $('.icon_descricao p[key=2]').html('Clique em uma opção.');
        $('.icon_descricao p[key=3]').html('A Esquerda.');
    })

    $('.icon[key= html').click(function(){
        $('.icon_descricao h3').html('HTML');
        $('.icon_descricao p').html('É uma linguagem de marcação,dita como o esqueleto de qualquer programa Web.');
        $('.icon_descricao p[key=2]').html('Obs: Possuo 1 ano de experiência com essa tecnologia.');
        $('.icon_descricao p[key=3]').html('Conhecimento: Avançado.');
    })
    $('.icon[key= css').click(function(){
        $('.icon_descricao h3').html('CSS');
        $('.icon_descricao p').html('Nome real é linguagem Cascading Style Sheet, uma linguagem de estilização, é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.');
        $('.icon_descricao p[key=2]').html('Obs: Possuo 1 ano de experiência com essa tecnologia');
        $('.icon_descricao p[key=3]').html('Conhecimento: Avançado.');
    })
    $('.icon[key= javaS').click(function(){
        $('.icon_descricao h3').html('JavaScript');
        $('.icon_descricao p').html('É uma linguagem de programação de alto nivel,multiparadigma. Juntamente com HTML e CSS, o JavaScript são as três principais tecnologias Web.');
        $('.icon_descricao p[key=2]').html('Obs: Possuo 2 meses de experiência com essa tecnologia');
        $('.icon_descricao p[key=3]').html('Conhecimento: intermediário.');
    })

    $('.icon[key= php').click(function(){
        $('.icon_descricao h3').html('PHP');
        $('.icon_descricao p').html('É uma linguagem de script open source de uso geral, muito utilizada, e especialmente adequada para o desenvolvimento web e que pode ser embutida dentro do HTML.');
        $('.icon_descricao p[key=2]').html('');
        $('.icon_descricao p[key=3]').html('Conhecimento: Iniciante.');
    })
    $('.icon[key= word').click(function(){
        $('.icon_descricao h3').html('WordPress');
        $('.icon_descricao p').html('É o Gerenciador de Conteúdo mais popular e utilizado para o desenvolvimento de sites em todo o mundo.');
        $('.icon_descricao p[key=2]').html('');
        $('.icon_descricao p[key=3]').html('Conhecimento: Iniciante.');
    })

    $('.icon[key= py').click(function(){
        $('.icon_descricao h3').html('PYTHON');
        $('.icon_descricao p').html('É uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML), muito ultilizada por ser eficiente e fácil de aprender.');
        $('.icon_descricao p[key=2]').html('OBS: Possuo 2 meses de experiência');
        $('.icon_descricao p[key=3]').html('Conhecimento: Básico.');
    })

})



//Sobre
$(()=>{
    $('.sobre').click(function(){
        setTimeout(function(){
            $('.sobre').html('<h4>Nome: <span>David Jorge da silva santos</span></h4><h4>Idade: <span>19 anos</span></h4><h4>Nacionalidade: <span>Brasileiro nato(nascido e criado)</span></h4><h4>Localidade: <span>Cabo Frio/RJ</span></h4><h4>Obs: <span>Estou fazendo Curso programdor Full-Stack, onde aprendo:</span> </h4><p>Html, Css, JavaScript</p><p>React, Jquery, TypeScript, Less, Node</p><p>PHP, Ruby</p><p>WordPress</p><p>Python</p>')
        },1000)
    })
})