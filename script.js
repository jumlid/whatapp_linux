
let Chat_list = document.querySelector('[aria-label = "Chat list"]')
let number_of_message = Chat_list.getAttribute('aria-rowcount')

for (let index = 0; index < number_of_message; index++) {

    let n = Chat_list.children[index]
    let a = n?.querySelector('span[title]')
    console.log(a.title)


}

