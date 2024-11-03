// 使用示例
// showMessage("Operation successful!", "success");
// showMessage("Warning! Something might go wrong.", "warning");
// showMessage("Error! Action failed.", "danger");
// showMessage("Information: This is a notification.", "info");

let messageList = [];

function showMessage(message, type = "info") {
  // 创建提示框元素
  const messageBox = document.createElement("div");

  // 为提示框添加基础样式
  messageBox.style.position = "fixed";
  messageBox.style.top = 40 + messageList.length * 70 + "px";
  messageBox.style.left = "50%";
  messageBox.style.transform = "translateX(-50%)";

  messageBox.style.minWidth = "150px";
  messageBox.style.height = "60px";

  messageBox.style.display = "flex";
  messageBox.style.justifyContent = "center";
  messageBox.style.alignItems = "center";

  messageBox.style.padding = "15px 30px";
  messageBox.style.borderRadius = "8px";
  messageBox.style.fontSize = "16px";
  messageBox.style.color = "#fff";
  messageBox.style.zIndex = 1000;
  messageBox.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  messageBox.style.opacity = "0";
  messageBox.style.transition = "opacity 0.3s ease";

  // 根据消息类型设置不同的背景颜色
  switch (type) {
    case "success":
      messageBox.style.backgroundColor = "#67c23a";
      break;
    case "danger":
      messageBox.style.backgroundColor = "#f56c6c";
      break;
    case "warning":
      messageBox.style.backgroundColor = "#e6a23c";
      messageBox.style.color = "#333"; // 提示框颜色调整为黑色
      break;
    case "info":
    default:
      messageBox.style.backgroundColor = "#909399";
      break;
  }

  // 设置提示消息的内容
  messageBox.textContent = message;

  // 将提示框插入到 body 中
  document.body.appendChild(messageBox);
  const uid = window.crypto.randomUUID();
  messageList.push({ uid, messageBox });

  // 使用 setTimeout 让提示框渐入
  setTimeout(() => {
    messageBox.style.opacity = "1";
  }, 10);

  // 3秒后自动消失并移除
  setTimeout(() => {
    messageBox.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(messageBox);
      messageList = messageList.filter((item) => item.uid != uid);
    }, 300); // 等待动画结束再移除元素
  }, 3000);
}
