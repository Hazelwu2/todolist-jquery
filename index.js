
const clearInput = () => {
  $('#todo').val('')
}

const appendItem = () => {
  const value = $('#todo').val()
  $('.todolist__item').append(`<li>
    <input class="todolist__input" type="checkbox" />
    <span>${value}</span>
    <a class="delete" href="#">
      <i class="fa fa-x"></i>
    </a>
  </li>`)
}

// 新增待辦
const addNewTodo = () => {

  appendItem()
  clearInput()
}


// 監聽
$(function () {
  $('.delete').each(function () {
    $(this).click(function () {
      $(this).closest('li').remove()
    })
  })
})