
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

const checkForm = () => {
  const value = $('#todo').val()
  if (!value) {
    alert('請填寫資料')
    return false
  }

  return true
}
// 新增待辦
const addNewTodo = () => {
  if (!checkForm()) return

  appendItem()
  clearInput()
}

// 刪除待辦
const deleteTodo = (e) => {
  $(e.target).parent().closest('li').remove()
}


// 監聽
$(() => {
  $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e))

  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active')
      $(this).find('a').addClass('active')
    })
  })
})