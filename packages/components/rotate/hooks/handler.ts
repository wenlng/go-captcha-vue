import {RotateData} from "../meta/data";
import {RotateEvent} from "../meta/event";
import {reactive, Ref} from "vue";
import {checkTargetFather} from "@/helper/helper";

export function useHandler(
  data: RotateData,
  event: RotateEvent,
  dragBlockRef: Ref,
  dragBarRef: Ref,
) {
  const state = reactive<{dragLeft: number, thumbAngle: number}>({dragLeft: 0, thumbAngle: data.angle || 0})

  const clear = () => {
    state.dragLeft = 0
    state.thumbAngle = 0
  }

  const dragEvent = (e: Event|any) => {
    const touch = e.touches && e.touches[0];

    const offsetLeft = dragBlockRef.value.offsetLeft
    const width = dragBarRef.value.offsetWidth
    const blockWidth = dragBlockRef.value.offsetWidth
    const maxWidth = width - blockWidth
    const p = 360 / maxWidth

    let angle = 0
    let isMoving = false
    let startX = 0;
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
      angle = (left * p)
      state.thumbAngle = angle

      event.rotate && event.rotate(angle)

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
      event.confirm && event.confirm(parseInt(angle.toString()), () => {
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
