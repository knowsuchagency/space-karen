import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

const regex = /(ElonMusk|Elon Musk|Elon|Musk)/gi

const observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let node of mutation.addedNodes) {
      if (node.nodeType === Node.TEXT_NODE && regex.test(node.textContent)) {
        node.textContent = node.textContent.replace(regex, "Space Karen")
      } else {
        updateTextNodes(node)
      }
    }
  }
})

const updateTextNodes = (node) => {
  for (let child of node.childNodes) {
    if (child.nodeType === Node.TEXT_NODE && regex.test(child.textContent)) {
      child.textContent = child.textContent.replace(regex, "Space Karen")
    } else {
      updateTextNodes(child)
    }
  }
}

observer.observe(document.body, { childList: true, subtree: true })
updateTextNodes(document.body)
