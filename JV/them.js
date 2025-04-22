function addComment() {
    const commentInput = document.getElementById("comment");
    const commentList = document.getElementById("comment-list");
    const commentText = commentInput.value.trim();
  
    if (commentText === "") {
      alert("Bạn chưa nhập nội dung bình luận!");
      return;
    }
  
    // Tạo phần tử mới cho bình luận
    const commentItem = document.createElement("div");
    commentItem.className = "comment-item";
    commentItem.textContent = commentText;
  
    // Thêm vào danh sách bình luận
    commentList.prepend(commentItem); // prepend để bình luận mới lên đầu
  
    // Xóa nội dung trong ô textarea
    commentInput.value = "";
  }