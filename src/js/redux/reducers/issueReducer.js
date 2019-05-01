function selectedIssue(state=null, action) {
  if (action.type === "SELECT_ISSUE"){
    console.log("SELECTED" + action.id.toString());
    return action.id;
  } else return state;
}

function previewedIssue(state=null, action) {
  switch (action.type) {
    case "PREVIEW_ISSUE":
      return action.id;
    case "STOP_PREVIEW_ISSUE":
      return null;
    default:
      return null;
  }
}

export { selectedIssue, previewedIssue };