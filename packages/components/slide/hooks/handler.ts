import {SlideData} from "../meta/data";
import {SlideEvent} from "../meta/event";
import {SlideConfig} from "../meta/config";
import {reactive, Ref, watch} from "vue";
import {checkTargetFather} from "@/helper/helper";

export function useHandler(
  data: SlideData,
  event: SlideEvent,
  config: SlideConfig,
  rootRef: Ref,
  containerRef: Ref,
  tileRef: Ref,
  dragBlockRef: Ref,
  dragBarRef: Ref,
) {
  const state = reactive<{dragLeft: number, thumbLeft: number, isFreeze: boolean}>({dragLeft: 0, thumbLeft: data.thumbX || 0, isFreeze: false})

  watch(() => data, (newData, _) => {
    if(!state.isFreeze){
      state.thumbLeft = newData.thumbX || 0
    }
  },{ deep: true })

  const dragEvent = (e: Event|any) => {
    const touch = e.touches && e.touches[0];
    const offsetLeft = dragBlockRef.value.offsetLeft
    const width = containerRef.value.offsetWidth
    const blockWidth = dragBlockRef.value.offsetWidth
    const maxWidth = width - blockWidth

    const tileWith  = tileRef.value.offsetWidth
    const tileOffsetLeft = tileRef.value.offsetLeft
    const tileMaxWith = width - (tileWith + tileOffsetLeft)
    const ratio = tileMaxWith / maxWidth

    let isMoving = false
    let tmpLeaveDragEvent: Event|any = null
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

      let ctX = tileOffsetLeft + (left * ratio)
      if (left >= maxWidth) {
        state.dragLeft = maxWidth
        state.thumbLeft = currentThumbX = maxWidth
        return
      }

      if (left <= 0) {
        state.dragLeft = 0
        state.thumbLeft = currentThumbX = tileOffsetLeft
        return
      }

      state.dragLeft = left
      state.thumbLeft = currentThumbX = ctX

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

      clearEvent()

      if (currentThumbX <= 0) {
        return
      }

      isMoving = false
      event.confirm && event.confirm({x: parseInt(currentThumbX.toString()), y: data.thumbY || 0}, () => {
        resetData()
      })

      e.cancelBubble = true
      e.preventDefault()
    }

    const leaveDragBlockEvent = (e: Event|any) => {
      tmpLeaveDragEvent = e
    }

    const enterDragBlockEvent = () => {
      tmpLeaveDragEvent = null
    }

    const leaveUpEvent = (_: Event|any) => {
      if(!tmpLeaveDragEvent) {
        return
      }

      upEvent(tmpLeaveDragEvent)
      clearEvent()
    }

    const scope = config.scope
    const dragDom = scope ? rootRef.value : dragBarRef.value
    const scopeDom = scope ? rootRef.value : document.body

    const clearEvent = () => {
      scopeDom.removeEventListener("mousemove", moveEvent, false)
      scopeDom.removeEventListener("touchmove", moveEvent, { passive: false })

      dragDom.removeEventListener( "mouseup", upEvent, false)
      // dragBarRef.value.removeEventListener( "mouseout", upEvent, false)
      dragDom.removeEventListener( "mouseenter", enterDragBlockEvent, false)
      dragDom.removeEventListener( "mouseleave", leaveDragBlockEvent, false)
      dragDom.removeEventListener("touchend", upEvent, false)

      scopeDom.removeEventListener("mouseleave", upEvent, false)
      scopeDom.removeEventListener("mouseup", leaveUpEvent, false)

      state.isFreeze = false
    }
    state.isFreeze = true

    scopeDom.addEventListener("mousemove", moveEvent, false)
    scopeDom.addEventListener("touchmove", moveEvent, { passive: false })

    dragDom.addEventListener( "mouseup", upEvent, false)
    // dragBarRef.value.addEventListener( "mouseout", upEvent, false)
    dragDom.addEventListener( "mouseenter", enterDragBlockEvent, false)
    dragDom.addEventListener( "mouseleave", leaveDragBlockEvent, false)
    dragDom.addEventListener("touchend", upEvent, false)

    scopeDom.addEventListener("mouseleave", upEvent, false)
    scopeDom.addEventListener("mouseup", leaveUpEvent, false)

  }

  const closeEvent = (e: Event|any) => {
    event && event.close && event.close()
    resetData()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const refreshEvent = (e: Event|any) => {
    event && event.refresh && event.refresh()
    resetData()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const resetData = () => {
    state.dragLeft = 0
    state.thumbLeft = data.thumbX || 0
  }

  const clearData = () => {
    data.thumb = ''
    data.image = ''
    data.thumbX = 0
    data.thumbY = 0
    data.thumbWidth = 0
    data.thumbHeight = 0
    resetData()
  }

  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
  }
}
