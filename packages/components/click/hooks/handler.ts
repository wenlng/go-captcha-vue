import {ClickData, ClickDot} from "../meta/data";
import {ClickEvent} from "../meta/event";
import {reactive, toRaw} from "vue";
import {getDomXY} from "@/helper/helper";

export function useHandler(
  data: ClickData,
  event: ClickEvent,
) {
  const dots = reactive<{list: Array<ClickDot>}>({list: []})

  const clickEvent = (e: Event|any) => {
    const dom = e.currentTarget
    const xy = getDomXY(dom)

    const mouseX = e.pageX || e.clientX
    const mouseY = e.pageY || e.clientY

    const domX = xy.domX
    const domY = xy.domY

    const xPos = mouseX - domX;
    const yPos = mouseY - domY;

    const xx = parseInt(xPos.toString())
    const yy = parseInt(yPos.toString())
    const date = new Date()
    const index = dots.list.length
    dots.list.push({key: date.getTime(), index: index + 1, x: xx, y: yy})

    event.click && event.click(xx, yy)
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const confirmEvent = (e: Event|any) => {
    event.confirm && event.confirm(toRaw(dots.list), () => {
      resetData()
    })
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const closeEvent = (e: Event|any) => {
    event.close && event.close()
    resetData()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const refreshEvent = (e: Event|any) => {
    event.refresh && event.refresh()
    resetData()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const resetData = () => {
    dots.list = []
  }

  const clearData = () => {
    resetData()
    data.thumb = ''
    data.image = ''
  }

  return {
    dots,
    clickEvent,
    confirmEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
  }
}
