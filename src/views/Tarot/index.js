import { TARO_KEY_POSITION, TARO_MAPPER_LEN, TARO_KEY_MAPPER, TARO_MAPPER } from '@/enum/taro_enum'

/** 基本参数 */
export const totalCards = 78
export const cardWidth = 240
export const cardHeight = 160

export const maxSelectedCards = 3 // 最多允许3张卡片保持抽取状态
export const radius = 200 // 圆的半径
export const hoverDistance = 20 // 悬停时移动的距离
export const angleStep = 300 / totalCards // 每个卡片之间的角度间隔 (预留60度，防止卡片重叠)

export function getRandomPosition() {
  // Math.random() 生成 0 到 1 之间的随机数
  // 如果结果小于 0.5，则返回 "正位"，否则返回 "逆位"
  return Math.random() < 0.5 ? TARO_KEY_POSITION[0] : TARO_KEY_POSITION[1]
}

export function randomReadTaroCard() {
  const randomIndex = Math.floor(Math.random() * TARO_MAPPER_LEN) // Math.random() 生成 0 到 1 之间的随机数，乘以 78 得到 0 到 77 之间的数，向下取整

  const cardKey = TARO_KEY_MAPPER[randomIndex]
  const position = getRandomPosition()
  const taroCardInfo = TARO_MAPPER[cardKey]

  // /**
  //  * 预加载图片
  //  * 使用 new Image() 访问指定链接的图片时，浏览器会开始下载并缓存该图片。
  //  * 随后，当你在页面上通过 <img src> 引用相同的图片时，
  //  * 浏览器会直接从缓存中加载它，而不需要重新发起网络请求，显著减少加载时间
  //  */
  // const imgEl = new Image();
  // imgEl.src = taroCardInfo.cover_url;

  return {
    prop: cardKey,
    ...taroCardInfo,
    position,
  }
}

export function handleExtractCard(selectedCardNum = maxSelectedCards) {
  const selectedCard = []
  new Array(selectedCardNum).fill(undefined).map((item) => {
    let card = randomReadTaroCard()
    selectedCard.push(card)
  })
  return selectedCard
}
