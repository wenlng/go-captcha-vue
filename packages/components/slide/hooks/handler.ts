import {CaptchaData} from "../meta/data";
import {CaptchaEvent} from "../meta/event";
import {reactive, Ref} from "vue";
import {checkTargetFather} from "@/helper/helper";

export function useHandler(
  data: CaptchaData,
  event: CaptchaEvent,
  containerRef: Ref,
  tileRef: Ref,
  dragBlockRef: Ref,
  dragBarRef: Ref,
) {
  const state = reactive<{dragLeft: number, thumbLeft: number}>({dragLeft: 0, thumbLeft: data.thumbX || 0})

  const clear = () => {
    state.dragLeft = 0
    state.thumbLeft = 0
  }

  const dragEvent = (e: Event|any) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.value.offsetLeft
    const width = containerRef.value.offsetWidth
    const blockWidth = dragBlockRef.value.offsetWidth
    const maxWidth =width - blockWidth
    const thumbX = data.thumbX || 0

    const tileWith  = tileRef.value.offsetWidth
    const ad = blockWidth - tileWith
    const ratio = ((maxWidth - thumbX) + ad) / maxWidth

    let isMoving = false
    let startX = 0
    let currentThumbX = 0
    if (touch) {
      startX = touch.pageX - offsetLeft
    } else {
      startX = e.clientX - offsetLeft
    }

    const moveEvent = (e: Event|any) => {
      isMoving = true
      const mTouche = e.touches && e.touches[0];

      let left = 0;
      if (mTouche) {
        left = mTouche.pageX - startX
      } else {
        left = e.clientX - startX
      }

      if (left >= maxWidth) {
        state.dragLeft = maxWidth
        return
      }

      if (left <= 0) {
        state.dragLeft = 0
        return
      }

      state.dragLeft = left
      currentThumbX = thumbX + (left * ratio)
      state.thumbLeft = currentThumbX

      event.move && event.move(currentThumbX, data.thumbY || 0)

      e.cancelBubble = true
      e.preventDefault()
    }

    const upEvent = (e: Event|any) => {
      if (!checkTargetFather(dragBarRef.value, e)) {
        return
      }

      if (!isMoving) {
        return
      }

      dragBarRef.value.removeEventListener("mousemove", moveEvent, false)
      dragBarRef.value.removeEventListener("touchmove", moveEvent, { passive: false })

      dragBarRef.value.removeEventListener( "mouseup", upEvent, false)
      dragBarRef.value.removeEventListener( "mouseout", upEvent, false)
      dragBarRef.value.removeEventListener("touchend", upEvent, false)

      isMoving = false
      event.confirm && event.confirm({x: parseInt(currentThumbX.toString()), y: data.thumbY || 0}, () => {
        clear()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    dragBarRef.value.addEventListener("mousemove", moveEvent, false)
    dragBarRef.value.addEventListener("touchmove", moveEvent, { passive: false })
    dragBarRef.value.addEventListener( "mouseup", upEvent, false)
    dragBarRef.value.addEventListener( "mouseout", upEvent, false)
    dragBarRef.value.addEventListener("touchend", upEvent, false)
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
