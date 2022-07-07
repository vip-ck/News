
const changeLikeIconColor = (iconElement) => {
  iconElement.classList.add('like--red');
}

const handleLike = (event) => {
  const iconElement = event.target;
  const postId = iconElement.dataset.postId;
  const csrfToken = document.getElementsByName(
    "csrf-token"
  )[0].content;

  fetch(`/posts/${postId}/like`, {
    method: 'POST',
    headers: {
      'X-CSRF-Token': csrfToken
    }
  })

  changeLikeIconColor(iconElement);
}

document.addEventListener('DOMContentLoaded', function () {
  const iconElement = document.getElementById("like");
  
  iconElement.addEventListener("click", handleLike);
})