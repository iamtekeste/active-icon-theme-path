var iconThemeName =  require('active-icon-theme-name')
var path = ''
module.exports = function iconThemePath(){
return  iconThemeName().then(function(result){
    return '/usr/share/icons/' + result;
  })
}
