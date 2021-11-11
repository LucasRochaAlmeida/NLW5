export default function Modal(){
    function open(){
        //atribuir a classe active para a modal
        document.querySelector('.modal-wrapper').classList.add('active')
    }
    function close(){
        //remover a classe active da modal
    }

    return{
        open,
        close
    }
}