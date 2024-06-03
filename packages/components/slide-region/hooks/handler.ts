import {CaptchaData} from "../meta/data";
import {CaptchaEvent} from "../meta/event";
import {reactive, Ref} from "vue";
import {checkTargetFather} from "@/helper/helper";

export function useHandler(
  data: CaptchaData,
  event: CaptchaEvent,
  containerRef: Ref,
  tileRef: Ref,
) {
  const state = reactive<{x: number, y: number}>({x: data.thumbX || 0, y: data.thumbY || 0})

  const clear = () => {
    state.x = data.thumbX || 0
    state.y = data.thumbY || 0
  }

  const dragEvent = (e: Event|any) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = tileRef.value.offsetLeft
    const offsetTop = tileRef.value.offsetTop
    const width = containerRef.value.offsetWidth
    const height = containerRef.value.offsetHeight
    const tileWidth = tileRef.value.offsetWidth
    const tileHeight = tileRef.value.offsetHeight
    const maxWidth = width - tileWidth
    const maxHeight = height - tileHeight

    let isMoving = false
    let startX = 0
    let startY = 0
    let tileLeft = 0
    let tileTop = 0
    if (touch) {
      startX = touch.pageX - offsetLeft
      startY = touch.pageY - offsetTop
    } else {
      startX = e.clientX - offsetLeft
      startY = e.clientY - offsetTop
    }

    const moveEvent = (e: Event|any) => {
      isMoving = true
      const mTouche = e.touches && e.touches[0];

      let left = 0;
      let top = 0;
      if (mTouche) {
        left = mTouche.pageX - startX
        top = mTouche.pageY - startY
      } else {
        left = e.clientX - startX
        top = e.clientY - startY
      }

      if (left <= 0) {
        left = 0
      }

      if (top <= 0) {
        top = 0
      }

      if (left >= maxWidth) {
        left = maxWidth
      }

      if (top >= maxHeight) {
        top = maxHeight
      }

      state.x = left
      state.y = top
      tileLeft = left
      tileTop = top
      event.move && event.move(left, top)

      e.cancelBubble = true
      e.preventDefault()
    }

    const upEvent = (e: Event|any) => {
      if (!checkTargetFather(containerRef.value, e)) {
        return
      }

      if (!isMoving) {
        return
      }
      isMoving = false

      containerRef.value.removeEventListener("mousemove", moveEvent, false)
      containerRef.value.removeEventListener("touchmove", moveEvent, { passive: false })

      containerRef.value.removeEventListener( "mouseup", upEvent, false)
      containerRef.value.removeEventListener( "mouseout", upEvent, false)
      containerRef.value.removeEventListener("touchend", upEvent, false)

      event.confirm && event.confirm({x: tileLeft, y: tileTop}, () => {
        clear()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    containerRef.value.addEventListener("mousemove", moveEvent, false)
    containerRef.value.addEventListener("touchmove", moveEvent, { passive: false })
    containerRef.value.addEventListener( "mouseup", upEvent, false)
    containerRef.value.addEventListener( "mouseout", upEvent, false)
    containerRef.value.addEventListener("touchend", upEvent, false)
  }

  const closeEvent = (e: Event|any) => {
    event && event.close && event.close()
    clear()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const refreshEvent = (e: Event|any) => {
    event && event.refresh && event.refresh()
    clear()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent,
  }
}
