document.addEventListener('DOMContentLoaded', function(){
   var formEvent = {
       form: null,
       login: null,
       password: null,
       init: function(){
           this.form = document.getElementById('formLogin');
           this.login = document.getElementById('login');
           this.password = document.getElementById('password');
           
           formEvent.rememberUser();
           this.form.addEventListener('submit', function(e){
               e.preventDefault();
               
               formEvent.validation();
           });
       },
       validation: function(){
           var regEx = new RegExp(/^[a-zA-Z0-9'\s-]+$/);
           var res = this.login.value.match(regEx);
           
           
           if (res == null) {
               this.login.classList.add('error');
               this.login.previousElementSibling.classList.add('error');
           }
           else{
               this.login.classList.remove('error');
               this.login.previousElementSibling.classList.remove('error');
               
               if(this.password.value !== ''){
                   localStorage.setItem("login", this.login.value);
               }
           }
           if (this.password.value == '') {
               this.password.classList.add('error');
               this.password.previousElementSibling.classList.add('error');
           }
           else{
               this.password.classList.remove('error');
               this.password.previousElementSibling.classList.remove('error');
           }
       },
       rememberUser: function(){
           var userName = document.getElementById('helloLogin');
           
           if(localStorage.getItem('login') !== null){
               userName.innerHTML = 'Hello ' + localStorage.getItem('login');
            }
       }
   };
   formEvent.init();
});