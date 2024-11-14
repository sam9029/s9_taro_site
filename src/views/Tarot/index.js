const totalCards = 78;
const cardWidth = 240;
const cardHeight = 160;

let container = null;
let containerHasClickEvent = false; // 是否已经绑定click事件
let cardsData = []; // 用于存储卡片位置数据
let selectedCards = []; // 存储已抽取的卡片
const maxSelectedCards = 3; // 最多允许3张卡片保持抽取状态

const radius = 200; // 圆的半径
const hoverDistance = 20; // 悬停时移动的距离
const angleStep = 300 / totalCards; // 每个卡片之间的角度间隔 (预留60度，防止卡片重叠)

function drawerCardCircle() {
  container = document.querySelector(".circle__container"); // 获取容器元素
  const containerCenterX = container.offsetWidth / 2; // 容器的中心X坐标
    const containerCenterY = container.offsetHeight / 2; // 容器的中心Y坐标

  // 动态生成卡片
  for (let i = 1; i <= totalCards; i++) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class='card-back'></div>`;

    // 计算每张卡片的角度
    const angle = angleStep * i;
    const cos = (angle * Math.PI) / 180;
    const sin = (angle * Math.PI) / 180;

    const x = containerCenterX + radius * Math.cos(cos) - cardWidth / 2; // 减去卡片宽度的一半
    const y = containerCenterY + radius * Math.sin(sin) - cardHeight / 2; // 减去卡片高度的一半

    // 设置卡片的平移和旋转
    const finalTransform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
    card.style.setProperty("--final-transform", finalTransform); // 最终位置用
    card.style.setProperty("--i", i); // 动画延迟用
    card.style.setProperty("--card-width", cardWidth + "px"); // 卡片宽
    card.style.setProperty("--card-height", cardHeight + "px"); // 卡片高

    // 计算悬停时卡片向圆外的移动方向
    const hoverX = hoverDistance * Math.cos((angle * Math.PI) / 180);
    const hoverY = hoverDistance * Math.sin((angle * Math.PI) / 180);
    const hoverTransform = `translate(${x + hoverX}px, ${
      y + hoverY
    }px) rotate(${angle}deg)`;
    card.style.setProperty("--hover-transform", hoverTransform); // 设置悬停时的移动方向

    container.appendChild(card);
    cardsData.push(card);
  }

  // 使用事件委托在父元素上绑定点击事件
  handleCardClick();
}

function handleCardClick() {
  // 使用事件委托在父元素上绑定点击事件
  if (!containerHasClickEvent) {
    container.addEventListener("click", (event) => {
      /**
       * closest(".card") 从触发事件的元素开始，向上寻找最接近的匹配指定选择器的祖先元素
       * 在这个例子中，它会从 event.target 开始，寻找离它最近的带有 .card 类名的祖先元素。
       * */
      const clickedCard = event.target.closest(".card");

      if (clickedCard) {
        // 如果该卡片已经抽取，恢复原位
        if (clickedCard.classList.contains("selected")) {
          clickedCard.classList.remove("selected");
          selectedCards = selectedCards.filter((c) => c !== clickedCard); // 从已选卡片中移除
        } else {
          // 如果尚未抽取且已有三张卡片，移除最早的一张
          if (selectedCards.length === maxSelectedCards) {
            const cardToReset = selectedCards.shift(); // 移除数组中最早的卡片
            cardToReset.classList.remove("selected");
          }

          // 抽取当前卡片
          clickedCard.classList.add("selected");
          selectedCards.push(clickedCard); // 添加到已选卡片数组
        }
      }

      if (selectedCards.length == maxSelectedCards) {
        showConfirm(true);
      } else {
        showConfirm(false);
      }

      containerHasClickEvent = true;
    });
  }
}

function clearCardsData() {
  container.innerHTML = null;
  selectedCards = [];
  cardsData = [];
}

// 逆向动画：卡片返回到中心
function resetCards() {
  // 定义动画结束后的处理函数
  let lastCard = null;
  const handleAnimationEnd = () => {
    // 清除之前的cardEl--DOM
    clearCardsData();
    // 重新创建卡片
    drawerCardCircle();

    // 动画完成后移除监听器
    lastCard.removeEventListener("animationend", handleAnimationEnd);
  };

  cardsData.forEach((card, index) => {
    card.style.animation = "moveToCenter 1s backwards";
    card.style.animationDelay = `${index * 0.01}s`; // 延迟效果，逐个执行

    // 追加动画执行监听器
    if (index + 1 === cardsData.length) {
      lastCard = card;
      // 添加动画结束事件监听器
      card.addEventListener("animationend", handleAnimationEnd);
    }
  });
}

function showConfirm(flag = true) {
  const btn = document.querySelector("#confirmBtn");

  if (flag) {
    btn.style.display = "block";
    return;
  }
  btn.style.display = "none";
}

function handleConfirm() {
  if (selectedCards.length < maxSelectedCards) {
    return showMessage("至少抽取三张", "warning");
  }

  selectedCards.map((clickedCard) => {
    clickedCard.classList.remove("selected");
  });
  selectedCards = [];
  showSelectedCardPanel();
  showConfirm(false);
}

function showSelectedCardPanel() {
  const panels = Array.from(
    document.querySelectorAll(".selected-card__wrapper")
  );

  panels.map((item) => {
    const { name, description, reversed_description, cover_url, position } =
      randomReadTaroCard();
    const positionLabel = TARO_POSITION[position];

    const coverEl = item.querySelector(".card-cover");
    let descriptionLabel = description;
    coverEl.style.maxWidth = "unset";
    coverEl.src = cover_url;

    /** 正逆位判断 */
    if (position === "reversed") {
      coverEl.classList.add("rotate-180");
      descriptionLabel = reversed_description;
    } else {
      coverEl.classList.remove("rotate-180");
    }

    item.querySelector(".card-name").innerText = `${name} (${positionLabel})`;
    item.querySelector(".card-description").innerText = descriptionLabel;
  });

  document.querySelector(".selected-panel__wrapper").classList.add("!block");
}

function closeSelectedCardPanel() {
  document.querySelector(".selected-panel__wrapper").classList.remove("!block");
}

function getRandomPosition() {
  // Math.random() 生成 0 到 1 之间的随机数
  // 如果结果小于 0.5，则返回 "正位"，否则返回 "逆位"
  return Math.random() < 0.5 ? TARO_KEY_POSITION[0] : TARO_KEY_POSITION[1];
}

function randomReadTaroCard() {
  const randomIndex = Math.floor(Math.random() * TARO_MAPPER_LEN); // Math.random() 生成 0 到 1 之间的随机数，乘以 78 得到 0 到 77 之间的数，向下取整

  const cardKey = TARO_KEY_MAPPER[randomIndex];
  const position = getRandomPosition();
  const taroCardInfo = TARO_MAPPER[cardKey];

  // /**
  //  * 预加载图片
  //  * 使用 new Image() 访问指定链接的图片时，浏览器会开始下载并缓存该图片。
  //  * 随后，当你在页面上通过 <img src> 引用相同的图片时，
  //  * 浏览器会直接从缓存中加载它，而不需要重新发起网络请求，显著减少加载时间
  //  */
  // const imgEl = new Image();
  // imgEl.src = taroCardInfo.cover_url;

  return {
    ...taroCardInfo,
    position,
  };
}
