/**
 * @Author Awen
 * @Date 2024/05/25
 * @Email wengaolng@gmail.com
 **/

export function getDomXY(dom: any){
  let x = 0
  let y = 0
  if (dom.getBoundingClientRect) {
    const box = dom.getBoundingClientRect();
    const D = document.documentElement;
    x = box.left + Math.max(D.scrollLeft, document.body.scrollLeft) - D.clientLeft;
    y = box.top + Math.max(D.scrollTop, document.body.scrollTop) - D.clientTop
  }
  else{
    while (dom !== document.body) {
      x += dom.offsetLeft
      y += dom.offsetTop
      dom = dom.offsetParent
    }
  }
  return {
    domX: x,
    domY: y
  }
}

export function checkTargetFather(that: any, e: any) {
  let parent = e.relatedTarget
  try{
    while(parent && parent !== that) {
      parent = parent.parentNode
    }
  }catch (e){
    console.warn(e)
  }

  return parent !== that
}
