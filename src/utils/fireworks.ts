/**
 * #烟花类
 * author: sam9029
 * desc: 代码区域组件
 * create_date: 2023-09-01
 * update_date: 2023-09-01
 * version: 1.0
 *
 * *****************************
 * #原理&使用指南
 * 
 * 创建画布canvas
 * 
 * canvas追加到指定元素（默认body）的子元素中
 *  - 绝对定位，zindex：-1
 * 点击事件监听（绑定在指定的外部元素身上（默认body）），点击位置为烟花爆炸位置
 *  - 绑定在 canvas上会不生效，被页面元素阻挡了
 * 
 * ！！！外部使用时：
 * - 要注意挂载元素的z-index层级需要 > -1；
 * - 且其他z-index>-1的层级元素本身的背景是透明的
 * *****************************
 * 
 * 使用代码
    // <div ref="targetRef">  ...  </div>

    import { ref, onMounted, onUnmounted } from 'vue'
    import Firework from '@/utils/fireworks'

    const targetRef = ref(null)
    let fireworkInstance

    onMounted(() => {
    fireworkInstance = new Firework(homeRef.value)
    })

    onUnmounted(() => {
    fireworkInstance.destroy()
    })

    function handleShowFireworks() {
        // 随机位置触发烟花
        fireworkInstance.createFirework()
    }
 */

class Firework {
  /** 烟花颜色 */
  colors: Array<string> = ['#FF1461', '#18FF92', '#5A87FF', '#FBF38C']

  /** 画布 */
  canvas: HTMLCanvasElement
  ctx: any

  /** 指定绑定的元素 */
  container: HTMLElement

  /** 动画帧回调事件的ID */
  animateFrameEventId: number | null = null

  /** 烟花球合集 */
  particles: Array<any> = []
  /** 单次点击的烟花球数量 */
  particleCount = 10

  constructor(container: HTMLElement | null, options = { colors: [], zIndex: '-1' }) {
    this.canvas = document.createElement('canvas')
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
    this.ctx = this.canvas.getContext('2d')

    this.container = container || (document.querySelector('body') as HTMLElement)
    this.container.appendChild(this.canvas)

    const { colors, zIndex } = options
    if (colors.length) this.colors = colors
    this.canvas.style = `position: absolute;top: 0;left: 0;z-index: ${zIndex};`

    this.init()
  }

  init() {
    this.container.addEventListener('click', (event) => {
      this.create(event.clientX, event.clientY)
    })
    this.animate()
  }

  create(x: number, y: number) {
    x = x || Math.floor(Math.random() * window.innerWidth)
    y = y || Math.floor(Math.random() * window.innerHeight)

    for (let i = 0; i < this.particleCount; i++) {
      const angle = (Math.PI * 2 * i) / this.particleCount
      const speed = Math.random() * 3 + 2
      this.particles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        alpha: 1,
        radius: Math.random() * 3 + 2,
      })
    }
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.particles = this.particles.filter((p) => p.alpha > 0)

    this.particles.forEach((particle) => {
      particle.x += particle.vx
      particle.y += particle.vy
      particle.alpha -= 0.01

      this.ctx.beginPath()
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false)
      this.ctx.fillStyle = `rgba(255, 165, 0, ${particle.alpha})`
      this.ctx.fill()
    })

    // 创建动画帧
    this.animateFrameEventId = window.requestAnimationFrame(() => this.animate())
  }

  // Clean up canvas when not needed
  destroy() {
    // 清除烟花球合集
    this.particles = []
    // 移除canvas
    this.container.removeChild(this.canvas)
    // 取消动画帧
    this.animateFrameEventId && window.cancelAnimationFrame(this.animateFrameEventId)
  }
}

// Export as a module
export default Firework
