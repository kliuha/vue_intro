const data = {
    forAutoComplete : [],
    msg: ''
};
const methods = {
    renderOptions() {
        for(item of this.forAutoComplete){
            let list = document.querySelector('.datalist')
            let option = document.createElement('option');
            option.value = item;
            list.appendChild(option);
        }
    },
    congratUser(month) {
        alert(`${month} справді крутий`)
    }
}
var vue = new Vue({
    el: '#app',
    data,
    created(){
        fetch('http://localhost:3000/test')
        .then((response)=>{
            return response.json();
        })
        .then((json) => {
            this.forAutoComplete= json;
            this.renderOptions()
        })
    },
    methods
});
