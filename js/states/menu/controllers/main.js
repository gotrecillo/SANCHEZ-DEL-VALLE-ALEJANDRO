
function navigate() {
  menu = menuState;
  if(menu.whatMenu == 'main'){
    displayMainNavigate(menu);
  }else if(menu.whatMenu == 'settings'){
    displaySettingsNavigate(menu)
  }
}

function displayMainNavigate(menu) {
  if(menu.cursors.down.isDown && menu.timeMenu<menu.time.now){
      menu.timeMenu = menu.time.now + 200;
      downMainMenu(menu);
      styleMainOptions(menu);
  }
  if(menu.cursors.up.isDown && menu.timeMenu<menu.time.now){
      menu.timeMenu = menu.time.now + 200;
      upMainMenu(menu);
      styleMainOptions(menu);
  }
  selectorMainOptions(menu);
}

function displaySettingsNavigate(menu) {
  if(menu.cursors.down.isDown && menu.timeMenu<menu.time.now){
      menu.timeMenu = menu.time.now + 200;
      downSettingsMenu(menu);
      styleSettingsOptions(menu);
  }
  if(menu.cursors.up.isDown && menu.timeMenu<menu.time.now){
      menu.timeMenu = menu.time.now + 200;
      upSettingsMenu(menu);
      styleSettingsOptions(menu);
  }
  selectorSettingsOptions(menu);
}
