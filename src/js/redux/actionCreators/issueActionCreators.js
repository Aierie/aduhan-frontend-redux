//SELECTING AND PREVIEWING ISSUES
export function previewIssue(id) {
  return ({
    type: "PREVIEW_ISSUE",
    id
  })
}

export function stopPreviewIssue() {
  return({
    type: "STOP_PREVIEW_ISSUE"
  })
}

export function selectIssue(id) {
  return ({
    type: "SELECT_ISSUE",
    id
  })
}