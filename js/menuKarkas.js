window.onload = () => {
    let menuBlock = document.getElementById('header-menu');
    let menu = new Menu('my-menu', 'my-menu', [
        new MenuItem('/Notebooks', 'NOTEBOOK'),
        new MenuItem('/Mobile', 'MOBILE'),
        new MenuItem('/TV', 'TV'),
        new MenuItem('/PC', 'PC'),
        new SubMenu('/Intertament','INTERTAMENT', 'my-submenu','my-submenu', [
            new MenuItem('/Intertament/PS','PS'),
            new MenuItem('/Intertament/XBOX','XBOX'),
            new MenuItem('/Intertament/Games','Games'),
        ]) 
    ]);
    menuBlock.innerHTML = menu.render();
}