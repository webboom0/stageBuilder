import { UIPanel } from "./libs/ui.js";
import { VideoEditTimeline } from "./VideoEdit.timeline.js";

function VideoEdit(editor) {
  const container = new UIPanel();
  container.setId("videoEdit");

  // 비디오 타임라인 추가
  const videoTimeline = new VideoEditTimeline(editor);
  container.add(videoTimeline);

  return container;
}

export { VideoEdit };
