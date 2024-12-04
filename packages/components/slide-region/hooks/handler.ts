import {SlideRegionData} from "../meta/data";
import {SlideRegionEvent} from "../meta/event";
import {SlideRegionConfig} from "../meta/config";
import {reactive, Ref, watch} from "vue";
import {checkTargetFather} from "@/helper/helper";

export function useHandler(
  data: SlideRegionData,
  event: SlideRegionEvent,
  config: SlideRegionConfig,
  rootRef: Ref,
  containerRef: Ref,
  tileRef: Ref,
  clearCbs: () => void
) {
  const state = reactive<{x: number, y: number, isFreeze: boolean}>({x: data.thumbX || 0, y: data.thumbY || 0, isFreeze: false})

  watch(() => data, (newData, _) => {
    if(!state.isFreeze){
      state.x = newData.thumbX || 0
      state.y = newData.thumbY || 0
    }
  },{ deep: true })

  const dragEvent = (e: Event|any) => {
    if (!checkTargetFather(containerRef.value, e)) {
      return
    }

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
    let tmpLeaveDragEvent: Event|any = null
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

      clearEvent()

      if (!isMoving) {
        return
      }

      isMoving = false

      if (tileLeft < 0 || tileTop < 0) {
        return
      }

      event.confirm && event.confirm({x: tileLeft, y: tileTop}, () => {
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
    const dragDom = scope ? rootRef.value : containerRef.value
    const scopeDom = scope ? rootRef.value : document.body

    const clearEvent = () => {
      scopeDom.removeEventListener("mousemove", moveEvent, false)
      scopeDom.removeEventListener("touchmove", moveEvent, { passive: false })

      dragDom.removeEventListener( "mouseup", upEvent, false)
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
    dragDom.addEventListener( "mouseenter", enterDragBlockEvent, false)
    dragDom.addEventListener( "mouseleave", leaveDragBlockEvent, false)
    dragDom.addEventListener("touchend", upEvent, false)

    scopeDom.addEventListener("mouseleave", upEvent, false)
    scopeDom.addEventListener("mouseup", leaveUpEvent, false)
  }

  const closeEvent = (e: Event|any) => {
    close()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const refreshEvent = (e: Event|any) => {
    refresh()
    e.cancelBubble = true
    e.preventDefault()
    return false
  }

  const close = () => {
    event && event.close && event.close()
    resetData()
  }

  const refresh = () => {
    event && event.refresh && event.refresh()
    resetData()
  }

  const resetData = () => {
    state.x = data.thumbX || 0
    state.y = data.thumbY || 0
  }

  const clearData = () => {
    clearCbs && clearCbs()
    resetData()
  }

  return {
    state,
    dragEvent,
    closeEvent,
    refreshEvent,
    resetData,
    clearData,
    refresh,
    close
  }
}
