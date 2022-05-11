
const clearInput = () => {
  $('#todo').val('')
}

const appendItem = () => {
  const value = $('#todo').val()
  $('.todolist__item').append(`<li class="no-completed">
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

// 更新已完成項目
const updateCompletedCount = () => {
  const count = $('.todolist__item').find('.completed').length

  $('.todolist__info').find('a').text(count)
}

// 刪除待辦
const deleteTodo = (e) => {
  $(e.target).parent().closest('li').remove()
}

// 清除已完成項目
const clearCompletedTodo = () => {
  $('.todolist__item').find('.completed').fadeOut(500, () => {
    $('.todolist__item').find('.completed').remove()
    updateCompletedCount()
  })

}


// 監聽
$(() => {
  $('.todolist__item').on('click', '.delete', (e) => deleteTodo(e))

  // 狀態：全部、待完成、已完成
  $('.todolist__tabs li').each(function () {
    $(this).click(function () {
      $(this).siblings().find('a').removeClass('active')
      $(this).find('a').addClass('active')
    })
  })

  // 每條待辦事項加上 class completed, no-completed
  $('.todolist__item li').on('click', 'input', (e) => {
    const li = $(e.target).parent()

    if (li.hasClass('completed')) {
      li.removeClass('completed')
      li.addClass('no-completed')
    } else {
      li.removeClass('no-completed')
      li.addClass('completed')
    }

    // 更新已完成項目
    updateCompletedCount()

  })

  // 篩選全部
  $('.todolist__tabs').on('click', '.all', () => {
    $('.todolist__item').children().show()
  })

  // 篩選待完成
  $('.todolist__tabs').on('click', '.no-completed', () => {
    $('.todolist__item').find('.completed').hide()
    $('.todolist__item').find('.no-completed').show()
  })

  // 篩選已完成
  $('.todolist__tabs').on('click', '.completed', () => {
    $('.todolist__item').find('.completed').show()
    $('.todolist__item').find('.no-completed').hide()
  })
})